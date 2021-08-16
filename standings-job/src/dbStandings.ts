/* eslint-disable prettier/prettier */
import { Client } from 'ts-postgres';
import { Standing } from './codegen/graphql-types';

type DBStanding = Omit<
  Standing & {
    lineId: string;
  },
  'line'
>;

export default async function getDBStandings(): Promise<Record<string, DBStanding>> {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'keystoneuser',
    password: 'rock7900',
    database: 'contest',
  });
  await client.connect();

  const allStandings: Array<DBStanding> = [];

  try {
    const resultIterator = client.query(`SELECT * FROM "Standing"`);

    for await (const row of resultIterator) {
      const parsedStanding: DBStanding = {
        id: row.get('id') as string,
        gamesPlayed: row.get('gamesPlayed') as number,
        wins: row.get('wins') as number,
        totalGames: row.get('totalGames') as number,
        lineId: row.get('line') as string,
      };
      allStandings.push(parsedStanding);
    }
  } finally {
    await client.end();
  }

  const highestGamesPlayedStandings: Record<string, DBStanding> = {};

  allStandings.forEach(standing => {
    const currentHighest = highestGamesPlayedStandings[standing.lineId];
    const currentGamesPlayed = currentHighest?.gamesPlayed || 0;
    const standingGamesPlayed = standing?.gamesPlayed || 0;

    if (!currentHighest) {
      highestGamesPlayedStandings[standing.lineId] = standing;
    } else if (currentGamesPlayed < standingGamesPlayed) {
      highestGamesPlayedStandings[standing.lineId] = standing;
    }
  });

  return highestGamesPlayedStandings;
  // highestGamesPlayedStandings now has all current standing records

  // now go get all new standings from api

  // compare each one to the matching line games played (need a way to match this...)

  // keep all new ones in an array

  // insert them all and print the new ones
}
