import { KeystoneContext, KeystoneListsAPI } from '@keystone-next/keystone/types';
import { KeystoneListsTypeInfo } from '.keystone/types';

import { Line, Standing, StandingCreateInput } from './codegen/graphql-types';

import fetchEspnStandings from './espnStandings';

export async function startDailyStandingsJob(
  keyStoneContext: KeystoneContext,
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
    .sudo().db as KeystoneListsAPI<KeystoneListsTypeInfo>;

  const graphql = String.raw;
  const espnStandings = await fetchEspnStandings(apiUrl);

  // need to figure out the contests to do (active with NFL_OU enum??)
  const linesWithStandings = (await lists.Line.findMany({
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
}
