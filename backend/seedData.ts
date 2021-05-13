import { KeystoneContext } from '@keystone-next/types';
import { users, contests } from './mockData';

export async function insertSeedData(keyStoneContext: KeystoneContext): Promise<void> {
  //   const { prisma } = keyStoneContext.keystone.adapter;

  //   const adapter = keystone.adapter;
  //   const { prisma } = adapter;

  const { prisma } = keyStoneContext;

  await prisma.user.deleteMany({});
  await prisma.contest.deleteMany({});
  await prisma.line.deleteMany({});
  await prisma.choice.deleteMany({});

  console.log(`🌱 Inserting Seed Data: ${users.length} Users`);

  for (const user of users) {
    console.log(` 💁🏼‍♂️ Adding User: ${user.name}`);

    await keyStoneContext.lists.User.createOne({
      data: {
        email: user.email,
        userName: user.userName,
        password: user.password,
        name: user.name,
        isAdmin: user.isAdmin,
      },
    });
  }
  console.log(`✅ Seed Data Inserted: ${users.length} Users`);

  console.log(`🌱 Inserting Seed Data: ${contests.length} Contest`);

  for (const contest of contests) {
    console.log(` 🎲 Adding Contest: ${contest.name}`);

    await keyStoneContext.lists.Contest.createOne({
      data: {
        name: '2021 NFL Over Under',
        description: 'Pick over under team totals',
        status: 'IN_PROGRESS',
        entryFee: 25,
        lines: {
          create: [
            {
              title: 'Pittsburgh Steelers',
              closingTime: '1970-01-01T00:00:00.000Z',
              benchmark: 10.5,
              choices: {
                create: [
                  {
                    selection: 'OVER',
                  },
                  {
                    selection: 'UNDER',
                  },
                ],
              },
            },
            {
              title: 'Jacksonville Jaguars',
              closingTime: '1970-01-01T00:00:00.000Z',
              benchmark: 6.5,
              choices: {
                create: [
                  {
                    selection: 'OVER',
                  },
                  {
                    selection: 'UNDER',
                  },
                ],
              },
            },
          ],
        },
      },
    });
  }

  console.log(`👋 Please start the process with \`npm run dev\``);
  process.exit();
}
