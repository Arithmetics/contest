/* eslint-disable prettier/prettier */
import { Client } from 'ts-postgres';
import cuid from 'cuid';
import 'dotenv/config';
import { Line, Standing } from './codegen/graphql-types';

const client = new Client({
  host: process.env.HOST || '',
  port: Number(process.env.PORT) || 5432,
  user: process.env.USER || '',
  password: process.env.PASSWORD || '',
  database: process.env.DATABASE || '',
});

export default async function getDBStandings(): Promise<Line[]> {
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
          },
        ],
      };
      allLines.push(parsedLine);
    }
  } catch (e) {
    console.log('hmmm');
  } finally {
    await client.end();
  }

  return allLines;
}

export async function insertStandings(newStandingsToInsert: Standing[]): Promise<void> {
  await client.connect();

  try {
    for (let i = 0; i < newStandingsToInsert.length; i++) {
      const newStanding = newStandingsToInsert[i];
      const nid = cuid();

      const x = `INSERT INTO "Standing" VALUES ('${nid}', ${newStanding.gamesPlayed}, ${newStanding.wins}, ${newStanding.totalGames}, '${newStanding.line?.id}')`;
      await client.query(x);

      console.log(newStanding);
    }
  } finally {
    await client.end();
  }
}
