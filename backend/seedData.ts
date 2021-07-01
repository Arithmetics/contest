import { KeystoneContext, KeystoneListsAPI } from '@keystone-next/types';
import { KeystoneListsTypeInfo } from '.keystone/types';
import { contests, users } from './mockData';

export async function insertSeedData(keyStoneContext: KeystoneContext): Promise<void> {
  const lists = keyStoneContext.lists as KeystoneListsAPI<KeystoneListsTypeInfo>;

  const { prisma } = keyStoneContext;

  await prisma.bet.deleteMany({});
  await prisma.choice.deleteMany({});
  await prisma.cloudImage.deleteMany({});
  await prisma.contest.deleteMany({});
  await prisma.line.deleteMany({});
  await prisma.registration.deleteMany({});
  await prisma.standing.deleteMany({});
  await prisma.user.deleteMany({});

  console.log(`🌱 Inserting Seed Data: ${users.length} Users`);
  for (const user of users) {
    console.log(` 💁🏼‍♂️ Adding User: ${user.name}`);
    await lists.User.createOne({
      data: {
        ...user,
      },
    });
  }
  console.log(`✅ User Data Inserted: ${users.length} Users`);

  console.log(`🌱 Inserting Seed Data: ${contests.length} Contest`);
  for (const contest of contests) {
    console.log(` 🎲 Adding Contest: ${contest.name}`);
    await lists.Contest.createOne({
      data: {
        ...contest,
      },
    });
  }
  console.log(`✅ Contest Data Inserted: ${contests.length} Contests`);

  console.log(`👋 Please start the process with \`npm run dev\``);
  process.exit();
}
