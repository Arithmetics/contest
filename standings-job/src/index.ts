import fetchEspnStandings from './espnStandings';
import getDBStandings from './dbStandings';

async function main(): Promise<void> {
  const myStandings = await getDBStandings();
  const espnStandings = await fetchEspnStandings();

  const insertableStandings = espnStandings.filter((espnStanding) => {
    const matchingStanding = myStandings[espnStanding.teamName];

    return (matchingStanding.gamesPlayed || 0) < espnStanding.gamesPlayed;
  });

  console.log(insertableStandings);
}

main();
