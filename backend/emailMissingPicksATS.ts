import { KeystoneContext } from '@keystone-6/core/types';
import { TypeInfo } from '.keystone/types';

import { sendReminderEmail } from './lib/mail';
import { Line } from './codegen/graphql-types';

export async function emailMissingPicksATS(
  keyStoneContext: KeystoneContext<TypeInfo>,
  contestId: string
): Promise<void> {
  const graphql = String.raw;

  const contest = await keyStoneContext.query.Contest.findOne({
    where: { id: contestId },
    query: graphql`
        id
        name
        registrations {
        id
        user {
            id
            email
            name
            userName
        }
        }
        lines {
        id
        title
        closingTime
        choices {
            id
            selection
            bets {
            id
            user {
                id
                email
                name
                userName
            }
            }
        }
        }
    `,
  });

  if (!contest) {
    console.error(`Contest with id ${contestId} not found`);
    return;
  }

  // @ts-expect-error any
  const users = contest.registrations.map((registration) => registration.user);
  const lines = contest.lines;

  for (const user of users) {
    const missingPicks: Line[] = [];
    for (const line of lines) {
      for (const choice of line.choices) {
        for (const bet of choice.bets) {
          if (bet.user.id === user.id) {
            missingPicks.push(line);
          }
        }
      }
    }

    if (missingPicks.length > 0) {
      await sendReminderEmail(user, missingPicks);
    }
  }
}
