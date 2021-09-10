import fetchEspnStandings from './espnStandings';
import getDBStandings, { insertStandings } from './dbStandings';
import { Standing } from './codegen/graphql-types';

async function main(): Promise<void> {
  const myLines = await getDBStandings();
  const espnStandings = await fetchEspnStandings();

  const newStandingsToInsert: Standing[] = [];

  myLines.forEach((line) => {
    const matchingESPNStanding = espnStandings.find((s) => s.teamName === line.title);
    if ((matchingESPNStanding?.gamesPlayed || 0) > (line.standings?.[0].gamesPlayed || 0)) {
      newStandingsToInsert.push({
        id: '',
        gamesPlayed: matchingESPNStanding?.gamesPlayed,
        wins: matchingESPNStanding?.wins,
        totalGames: 17,
        line: {
          id: line.id,
        },
      });
    }
  });
  await insertStandings(newStandingsToInsert);
}

main();
