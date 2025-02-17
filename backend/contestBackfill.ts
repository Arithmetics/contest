import { KeystoneContext } from '@keystone-6/core/types';
import { TypeInfo } from '.keystone/types';

export async function choiceContestBackfill(
  keyStoneContext: KeystoneContext<TypeInfo>
): Promise<void> {
  const graphql = String.raw;
  const context = keyStoneContext.sudo();
  context.session = {
    data: {
      isAdmin: true,
    },
  };

  // Get all Choices that don't have a contest set
  const choices = await context.query.Choice.findMany({
    where: { contest: null },
    query: graphql`
      id
      line {
        id
        contest {
          id
        }
      }
    `,
  });

  console.log(`Found ${choices.length} choices without contests`);

  // Update each choice with its parent line's contest
  for (const choice of choices) {
    if (choice.line?.contest?.id) {
      await context.query.Choice.updateOne({
        where: { id: choice.id },
        data: {
          contest: {
            connect: { id: choice.line.contest.id },
          },
        },
      });
      console.log(`Updated choice ${choice.id} with contest ${choice.line.contest.id}`);
    } else {
      console.log(`Skipping choice ${choice.id} - no contest found on parent line`);
    }
  }

  console.log('Contest backfill complete');
}

export async function betContestBackfill(
  keyStoneContext: KeystoneContext<TypeInfo>
): Promise<void> {
  const graphql = String.raw;
  const context = keyStoneContext.sudo();
  context.session = {
    data: {
      isAdmin: true,
    },
  };

  // Get all Bets that don't have a contest set
  const bets = await context.query.Bet.findMany({
    where: { contest: null },
    query: graphql`
      id
      choice {
        id
        contest {
          id
        }
      }
    `,
  });

  console.log(`Found ${bets.length} bets without contests`);

  // Update each bet with its parent choice's contest
  for (const bet of bets) {
    if (bet.choice?.contest?.id) {
      await context.query.Bet.updateOne({
        where: { id: bet.id },
        data: {
          contest: {
            connect: { id: bet.choice.contest.id },
          },
        },
      });
      console.log(`Updated bet ${bet.id} with contest ${bet.choice.contest.id}`);
    } else {
      console.log(`Skipping bet ${bet.id} - no contest found on parent choice`);
    }
  }

  console.log('Bet contest backfill complete');
}
