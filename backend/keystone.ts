import { config } from '@keystone-next/keystone/schema';
import { statelessSessions, withItemData } from '@keystone-next/keystone/session';
import { createAuth } from '@keystone-next/auth';
import { createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { sendPasswordResetEmail } from './lib/mail';
import { insertSeedData } from './seedData';

import { User } from './schemas/User';
import { Contest } from './schemas/Contest';
import { ContestImage } from './schemas/ContestImage';
import { Line } from './schemas/Line';
import { Choice } from './schemas/Choices';
import { Bet } from './schemas/Bet';

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
      Contest,
      ContestImage,
      Line,
      User,
    }),
    session: withItemData(
      statelessSessions({
        maxAge: sessionMaxAge,
        secret: sessionSecret,
      }),
      { User: `id` }
    ),
  })
);
