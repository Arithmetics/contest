import { statelessSessions } from '@keystone-6/core/session';
import { createAuth } from '@keystone-6/auth';
import { config } from '@keystone-6/core';
import cron from 'node-cron';
import 'dotenv/config';

import { sendPasswordResetEmail } from './lib/mail';
import { cache } from './cache';
// import { insertSeedData } from './seedData';
// import { startDailyStandingsJob } from './standingsJob';

import { User } from './schemas/User';
import { Contest } from './schemas/Contest';
import { CloudImage } from './schemas/CloudImage';
import { Line } from './schemas/Line';
import { Choice } from './schemas/Choice';
import { Bet } from './schemas/Bet';
import { Registration } from './schemas/Registration';
import { RuleSet } from './schemas/RuleSet';
import { Standing } from './schemas/Standing';
import { History } from './schemas/History';
import { Chat } from './schemas/Chat';

// import { Context } from '.keystone/types';

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('The SESSION_SECRET environment variable must be set in production');
  } else {
    sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --';
  }
}

const sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const auth = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: `id isAdmin`,
  initFirstItem: {
    fields: ['name', 'userName', 'email', 'password'],
  },
  passwordResetLink: {
    async sendToken(args) {
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

const frontendUrl = process.env.FRONTEND_URL;

if (!frontendUrl) {
  throw new Error(`Where's your FRONTEND_URL dude`);
}

export default auth.withAuth(
  config({
    server: {
      cors: {
        origin: [frontendUrl],
        credentials: true,
      },
    },
    db: {
      provider: 'postgresql',
      url: `${process.env.DATABASE_URL}?pool_timeout=0` || 'postgres://localhost:5432/contest',
      useMigrations: true,
      // async onConnect(_context) {
      async onConnect() {
        // const context = _context as Context;
        // async onConnect() {
        console.log('connected');
        // cron jobs
        cron.schedule('0 0 14 * * *', () => {
          Object.keys(cache).forEach((k) => {
            cache[k] = null;
          });

          // console.log('running NFL standing job!');

          // startDailyStandingsJob(
          //   context,
          //   'cl6sco44c19150jmcou8s8rlg',
          //   17,
          //   'https://site.api.espn.com/apis/v2/sports/football/nfl/standings'
          // );

          // console.log('running NBA standing job!');
          // startDailyStandingsJob(
          //   context,
          //   'cl93po7wh3206630imctmlg2a73',
          //   82,
          //   'https://site.api.espn.com/apis/v2/sports/basketball/nba/standings'
          // );
          // console.log('NO CRON JOBS SCHEDULED');
        });

        if (process.argv.includes('--seed-data')) {
          console.log('NO SEED DATA');
          // await insertSeedData(context);
        }
      },
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists: {
      Bet,
      Chat,
      Choice,
      CloudImage,
      Contest,
      History,
      Line,
      Registration,
      RuleSet,
      Standing,
      User,
    },
    session: statelessSessions({
      maxAge: sessionMaxAge,
      secret: sessionSecret,
    }),
  })
);
