import { KeystoneContext, KeystoneListsAPI } from '@keystone-next/types';
import { KeystoneListsTypeInfo } from '.keystone/types';
import { users, contests } from './mockData';

export async function insertSeedData(keyStoneContext: KeystoneContext): Promise<void> {
  const lists: KeystoneListsAPI<KeystoneListsTypeInfo> = keyStoneContext.lists;

  const { prisma } = keyStoneContext;

  await prisma.user.deleteMany({});
  await prisma.contest.deleteMany({});
  await prisma.line.deleteMany({});
  await prisma.choice.deleteMany({});
  await prisma.bet.deleteMany({});

  console.log(`🌱 Inserting Seed Data: ${users.length} Users`);
  users.forEach(async (user) => {
    console.log(` 💁🏼‍♂️ Adding User: ${user.name}`);
    await lists.User.createOne({
      data: {
        ...user,
      },
    });
  });
  console.log(`✅ User Data Inserted: ${users.length} Users`);

  console.log(`🌱 Inserting Seed Data: ${contests.length} Contest`);
  contests.forEach(async (contest) => {
    console.log(` 🎲 Adding Contest: ${contest.name}`);
    await keyStoneContext.lists.Contest.createOne({
      data: {
        ...contest,
      },
    });
  });
  console.log(`✅ Contest Data Inserted: ${users.length} Contests`);

  console.log(`👋 Please start the process with \`npm run dev\``);
  process.exit();
}
