import { KeystoneContext } from '@keystone-6/core/types';
import { TypeInfo } from '.keystone/types';

import { Line, Standing, StandingCreateInput } from './codegen/graphql-types';

import fetchEspnStandings from './espnStandings';
import { sendStandingsUpdate } from './lib/mail';

export async function startDailyStandingsJob(
  keyStoneContext: KeystoneContext<TypeInfo>,
  contestId: string,
  totalGames: number,
  apiUrl: string
): Promise<void> {
  const lists = keyStoneContext
    .withSession({
      data: {
        id: 'xx',
        isAdmin: true,
      },
    })
    .sudo().db;

  const graphql = String.raw;
  const espnStandings = await fetchEspnStandings(apiUrl);

  // need to figure out the contests to do (active with NFL_OU enum??)
  const linesWithStandings = (await keyStoneContext.query.Line.findMany({
    where: { contest: { id: { equals: contestId } } },
    query: graphql`
      id
      title
      benchmark
      standings {
        id
        gamesPlayed
        wins
      }
    `,
  })) as Line[] | null;

  const filteredLineStandings = linesWithStandings?.map((line) => {
    let maxGamesPlayed = 0;

    line?.standings?.forEach((standing) => {
      if (standing && standing.gamesPlayed && standing.gamesPlayed > maxGamesPlayed) {
        maxGamesPlayed = standing.gamesPlayed;
      }
    });
    const copyLine = { ...line };
    copyLine.standings = line.standings?.filter((s) => s.gamesPlayed === maxGamesPlayed);
    return copyLine;
  });

  const newStandingsToInsert: Standing[] = [];

  filteredLineStandings?.forEach((line) => {
    const matchingESPNStanding = espnStandings.find((s) => s.teamName === line.title);
    if ((matchingESPNStanding?.gamesPlayed || 0) > (line.standings?.[0]?.gamesPlayed || 0)) {
      newStandingsToInsert.push({
        id: '',
        gamesPlayed: matchingESPNStanding?.gamesPlayed,
        wins: matchingESPNStanding?.wins,
        totalGames: totalGames,
        line: {
          id: line.id,
          title: line.title,
          benchmark: line.benchmark,
        },
      });
    }
  });

  const newLineData: StandingCreateInput[] = newStandingsToInsert.map((ns) => {
    return {
      gamesPlayed: ns.gamesPlayed,
      wins: ns.wins,
      totalGames: ns.totalGames,
      line: { connect: { id: ns.line?.id } },
    };
  });

  await lists.Standing.createMany({
    data: newLineData,
  });

  newStandingsToInsert.forEach((ns) => {
    console.log(
      `New standing inserted: ${ns.line?.title} - ${ns.wins} wins / ${ns.gamesPlayed} games played`
    );
  });
  console.log(`${newStandingsToInsert.length} standings inserted in total`);

  // await: fill the cache for the contest
  const regs = await keyStoneContext.query.Registration.findMany({
    where: { contest: { id: { equals: contestId } } },
    query: graphql`
      id
      user {
        id
      }
      counts {
        locked
        likely
        possible
      }
    `,
  });

  console.log('cache filled');
  regs.forEach((r) => {
    console.log(r);
  });

  // send standings update email
  const previouslyAlerted: Record<string, boolean> = {};

  filteredLineStandings?.forEach((line) => {
    const team = line.title || '';
    const winsNeeded = line.benchmark || 0;
    const lossesNeeded = totalGames - winsNeeded;
    const wins = line.standings?.[0].wins || 0;
    const losses = (line.standings?.[0].gamesPlayed || 0) - wins;

    if (wins > winsNeeded || losses > lossesNeeded) {
      previouslyAlerted[team] = true;
    }
  });

  const alertStandings: Record<string, string> = {};

  newStandingsToInsert.forEach((standing) => {
    const team = standing.line?.title || '';
    const winsNeeded = standing?.line?.benchmark || 0;
    const lossesNeeded = totalGames - winsNeeded;

    const wins = standing.wins || 0;
    const losses = (standing?.gamesPlayed || 0) - wins;

    if (!previouslyAlerted[team] && wins > winsNeeded) {
      alertStandings[team] = 'OVER';
    }
    if (!previouslyAlerted[team] && losses > lossesNeeded) {
      alertStandings[team] = 'UNDER';
    }
  });

  if (Object.keys(alertStandings).length > 0) {
    sendStandingsUpdate(alertStandings, 'brock.m.tillotson@gmail.com');
  }
}
