import { KeystoneContext, KeystoneListsAPI } from '@keystone-next/types';
import { KeystoneListsTypeInfo } from '.keystone/types';
import { contests } from './mockData/contests';
import { users } from './mockData/users';
import {
  User,
  Contest,
  BetCreateInput,
  Choice,
  ChoiceSelectionType,
} from './codegen/graphql-types';

export async function insertSeedData(keyStoneContext: KeystoneContext): Promise<void> {
  const lists = keyStoneContext
    .withSession({
      data: {
        id: 'xx',
        isAdmin: true,
      },
    })
    .sudo().lists as KeystoneListsAPI<KeystoneListsTypeInfo>;

  const { prisma } = keyStoneContext;

  await prisma.bet.deleteMany({});
  await prisma.choice.deleteMany({});
  await prisma.cloudImage.deleteMany({});
  await prisma.contest.deleteMany({});
  await prisma.line.deleteMany({});
  await prisma.registration.deleteMany({});
  await prisma.standing.deleteMany({});
  await prisma.user.deleteMany({});

  const createdUsers: User[] = [];
  const createdContests: Contest[] = [];

  console.log(`🌱 Inserting Seed Data: ${users.length} Users`);
  for (const user of users) {
    console.log(`💁🏼‍♂️  Adding User: ${user.name}`);
    createdUsers.push(
      (await lists.User.createOne({
        data: {
          ...user,
        },
      })) as User
    );
  }
  console.log(`✅ User Data Inserted: ${users.length} Users`);

  console.log(`🌱 Inserting Seed Data: ${contests.length} Contest`);
  for (const contest of contests) {
    console.log(`🎲  Adding Contest: ${contest.name}`);
    createdContests.push(
      (await lists.Contest.createOne({
        data: {
          ...contest,
        },
      })) as Contest
    );
  }
  console.log(`✅ Contest Data Inserted: ${contests.length} Contests`);

  // REGISTRATIONS PROGRAMATIC CREATE
  const allCreatedUsers = (await lists.User.findMany()) as User[];
  const allCreatedContests = (await lists.Contest.findMany()) as Contest[];

  console.log(`🌱 Inserting Seed Data: 4 Registrations`);
  await lists.Registration.createMany({
    data: [
      {
        data: {
          hasPaid: false,
          contest: { connect: { id: allCreatedContests[1].id } },
          user: { connect: { id: allCreatedUsers[0].id } },
        },
      },
      {
        data: {
          hasPaid: false,
          contest: { connect: { id: allCreatedContests[1].id } },
          user: { connect: { id: allCreatedUsers[1].id } },
        },
      },
      {
        data: {
          hasPaid: false,
          contest: { connect: { id: allCreatedContests[1].id } },
          user: { connect: { id: allCreatedUsers[2].id } },
        },
      },
      {
        data: {
          hasPaid: false,
          contest: { connect: { id: allCreatedContests[1].id } },
          user: { connect: { id: allCreatedUsers[3].id } },
        },
      },
    ],
  });
  console.log(`✏️ Inserted Seed Data: 4 Registrations`);

  // BETS PROGRAMATIC CREATE
  const nfl2020 = allCreatedContests[1];
  const graphql = String.raw;
  const nfl2020Choices = (await lists.Choice.findMany({
    where: { line: { contest: { id: nfl2020.id } } },
    query: graphql`
      id
      selection
    `,
  })) as Choice[];

  const betsToMake: { data: BetCreateInput }[] = [];

  nfl2020Choices.forEach((choice) => {
    if (choice.selection === ChoiceSelectionType.Over) {
      betsToMake.push({
        data: {
          user: { connect: { id: createdUsers[0].id } },
          choice: { connect: { id: choice.id } },
          isSuper: false,
        },
      });
      betsToMake.push({
        data: {
          user: { connect: { id: createdUsers[1].id } },
          choice: { connect: { id: choice.id } },
          isSuper: false,
        },
      });
    }
    if (choice.selection === ChoiceSelectionType.Under) {
      betsToMake.push({
        data: {
          user: { connect: { id: createdUsers[2].id } },
          choice: { connect: { id: choice.id } },
          isSuper: false,
        },
      });
      betsToMake.push({
        data: {
          user: { connect: { id: createdUsers[3].id } },
          choice: { connect: { id: choice.id } },
          isSuper: false,
        },
      });
    }
  });
  console.log('doing bets');
  await lists.Bet.createMany({
    data: betsToMake,
  });
  console.log('bets done');
  console.log(`👋 Please start the process with \`npm run dev\``);
  process.exit();
}
