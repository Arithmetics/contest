/* eslint-disable prettier/prettier */
import { Client } from 'ts-postgres';
import { Standing } from './codegen/graphql-types';

export default async function getDBStandings(): Promise<Record<string, Standing>> {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'keystoneuser',
    password: 'rock7900',
    database: 'contest',
  });
  await client.connect();

  const allStandings: Array<Standing> = [];

  try {
    const standingsIterator = client.query(
      `SELECT "Standing".id AS standingId, "Standing"."gamesPlayed", "Standing".wins, "Standing"."totalGames", "Line".id AS lineId, "Line".title FROM "Standing" LEFT JOIN "Line" ON "Standing".line = "Line".id;`
    );

    for await (const row of standingsIterator) {
      const parsedStanding: Standing = {
        id: row.get('standingid') as string,
        gamesPlayed: row.get('gamesPlayed') as number,
        wins: row.get('wins') as number,
        totalGames: row.get('totalGames') as number,
        line: {
          id: row.get('lineid') as string,
          title: row.get('title') as string,
        },
      };
      allStandings.push(parsedStanding);
    }
  } finally {
    await client.end();
  }

  const highestGamesPlayedStandings: Record<string, Standing> = {};

  allStandings.forEach(standing => {
    const lineTitle = standing?.line?.title || 'badEntry';
    const currentHighest = highestGamesPlayedStandings[lineTitle];
    const currentGamesPlayed = currentHighest?.gamesPlayed || 0;
    const standingGamesPlayed = standing?.gamesPlayed || 0;

    if (!currentHighest) {
      highestGamesPlayedStandings[lineTitle] = standing;
    } else if (currentGamesPlayed < standingGamesPlayed) {
      highestGamesPlayedStandings[lineTitle] = standing;
    }
  });

  return highestGamesPlayedStandings;
  // highestGamesPlayedStandings now has all current standing records

  // now go get all new standings from api

  // compare each one to the matching line games played (need a way to match this...)

  // keep all new ones in an array

  // insert them all and print the new ones
}
