import { relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { KeystoneListsAPI } from '@keystone-next/types';
import { KeystoneListsTypeInfo } from '.keystone/types';
import { canModifyBet, canReadBet, isSignedIn, AugKeystoneSession } from '../keystoneTypeAugments';

function hasDuplicates(arr: number[]): boolean {
  return new Set(arr).size !== arr.length;
}

export const Bet = list({
  access: {
    create: isSignedIn,
    read: canReadBet,
    delete: canModifyBet,
    update: canModifyBet,
  },
  fields: {
    user: relationship({ ref: 'User.bets', many: false }),
    choice: relationship({ ref: 'Choice.bets', many: false }),
  },
  hooks: {
    validateInput: async (args) => {
      const { resolvedData, addValidationError, context } = args;
      const lists = context.lists as KeystoneListsAPI<KeystoneListsTypeInfo>;
      const graphql = String.raw;

      const session = context.session as AugKeystoneSession;

      const requestedChoice = await lists.Choice.findOne({
        where: { id: resolvedData.choice },
        query: graphql`
            id
            line {
              id
              closingTime
              title
              choices {
                id
                bets {
                  id
                  user {
                    id
                  }
                }
              }
              contest {
                id
                name
                registrations {
                  user {
                    id
                  }
                }
              }
            }
          `,
      });

      // RULE: only one bet per user per line
      const betIdsWithUsersId: number[] = [resolvedData.user];

      requestedChoice?.line?.choices
        .filter((c: { id: string }) => c.id !== resolvedData.choice)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .forEach((choice: { bets: any[] }) => {
          choice.bets.forEach((bet) => {
            betIdsWithUsersId.push(bet.user.id);
          });
        });

      if (hasDuplicates(betIdsWithUsersId)) {
        addValidationError('User already has a bet on this line');
      }

      // RULE: user must be registered for the contest
      const usersRegistration = requestedChoice?.line?.contest?.registrations?.some(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (r: any) => r?.user?.id === session.data?.id
      );

      if (!usersRegistration) {
        addValidationError('User must be registered for the contest.');
      }

      // RULE: user can only create bets for themselves
      if (resolvedData.user !== session.data?.id) {
        addValidationError('Can only create bet for own account');
      }

      // RULE: line must be open

      // TODO: betting rules for contest
    },
  },
});
