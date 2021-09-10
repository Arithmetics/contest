/* eslint-disable prettier/prettier */
import { Client } from 'ts-postgres';
import cuid from 'cuid';
import { Line, Standing } from './codegen/graphql-types';

export default async function getDBStandings(): Promise<Line[]> {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'keystoneuser',
    password: 'rock7900',
    database: 'contest',
  });
  await client.connect();

  const allLines: Array<Line> = [];

  try {
    const linesIterator = client.query(
      `SELECT "Line".id, "Line".title, "Standing"."gamesPlayed", "Standing".wins FROM "Line" LEFT JOIN "Standing" ON "Line".id = "Standing".line AND "Standing"."gamesPlayed" = (SELECT MAX("gamesPlayed") FROM "Standing" WHERE "Standing".line = "Line".id);`
    );

    for await (const row of linesIterator) {
      const parsedLine: Line = {
        id: row.get('id') as string,
        title: row.get('title') as string,
        standings: [
          {
            id: '',
            gamesPlayed: row.get('gamesPlayed') as number,
            wins: row.get('wins') as number,
          }
        ]
      };
      allLines.push(parsedLine);
    }
  } finally {
    await client.end();
  }

  return allLines;
}


export async function insertStandings(newStandingsToInsert: Standing[]): Promise<void> {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'keystoneuser',
    password: 'rock7900',
    database: 'contest',
  });
  await client.connect();


  try {
    for (let i = 0; i < newStandingsToInsert.length; i++) {
      const newStanding = newStandingsToInsert[i]
      const nid = cuid()

      const x = `INSERT INTO "Standing" VALUES ('${nid}', ${newStanding.gamesPlayed}, ${newStanding.wins}, ${newStanding.totalGames}, '${newStanding.line?.id}')`
      console.log(x)
      await client.query(x);

      console.log(newStanding);
    }  
  
  } catch(e) {
    console.log(e)
  } finally {
    await client.end();
  }
}