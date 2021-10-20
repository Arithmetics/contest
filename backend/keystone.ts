import { config } from '@keystone-next/keystone/schema';
import { statelessSessions } from '@keystone-next/keystone/session';
import { createAuth } from '@keystone-next/auth';
import { createSchema } from '@keystone-next/keystone/schema';
import cron from 'node-cron';
import 'dotenv/config';

import { sendPasswordResetEmail } from './lib/mail';
import { insertSeedData } from './seedData';
import { startDailyStandingsJob } from './standingsJob';

import { User } from './schemas/User';
import { Contest } from './schemas/Contest';
import { CloudImage } from './schemas/CloudImage';
import { Line } from './schemas/Line';
import { Choice } from './schemas/Choice';
import { Bet } from './schemas/Bet';
import { Registration } from './schemas/Registration';
import { RuleSet } from './schemas/RuleSet';
import { Standing } from './schemas/Standing';

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
      adapter: 'prisma_postgresql',
      url: process.env.DATABASE_URL || 'postgres://localhost:5432/contest',
      useMigrations: false, // need to change this some day
      async onConnect(context) {
        console.log('connected');

        cron.schedule('0 0 3 * * *', () => {
          console.log('running NFL standing job!');

          startDailyStandingsJob(
            context,
            'ckre48xe10960292pu1w1puj8',
            'http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams?limit=100'
          );
          console.log('running NBA standing job!');
          startDailyStandingsJob(
            context,
            'ckudib3ur1716721jmclxp1pvo4',
            'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams?limit=100'
          );
        });

        if (process.argv.includes('--seed-data')) {
          await insertSeedData(context);
        }
      },
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists: createSchema({
      Bet,
      Choice,
      CloudImage,
      Contest,
      Line,
      Registration,
      RuleSet,
      Standing,
      User,
    }),
    session: statelessSessions({
      maxAge: sessionMaxAge,
      secret: sessionSecret,
    }),
  })
);
