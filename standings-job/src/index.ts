import fetchEspnStandings from './espnStandings';
import getDBStandings from './dbStandings';

async function main(): Promise<void> {
  const my = await getDBStandings();
  const espn = await fetchEspnStandings();

  console.log(my);
  console.log(espn);
}

main();
