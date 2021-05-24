import { relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { KeystoneListsAPI } from '@keystone-next/types';
import { KeystoneListsTypeInfo } from '.keystone/types';
import { canModifyBet, canReadBet, isSignedIn } from '../keystoneTypeAugments';

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
      const { resolvedData, addValidationError, context, existingItem } = args;
      const lists: KeystoneListsAPI<KeystoneListsTypeInfo> = context.lists;
      const graphql = String.raw;

      const requestedChoice = await lists.Choice.findOne({
        where: { id: resolvedData.choice },
        query: graphql`
            id
            line {
              id
              closingTime
              choices {
                id
                bets {
                  id
                  user {
                    id
                  }
                }
              }
            }
          `,
      });

      // only one bet per user per line
      const betIdsWithUsersId: number[] = [existingItem.userId.toString()];

      requestedChoice?.line?.choices
        .filter((c: { id: string }) => c.id !== existingItem.choiceId.toString())
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .forEach((choice: { bets: any[] }) => {
          choice.bets.forEach((bet) => {
            betIdsWithUsersId.push(bet.user.id);
          });
        });

      if (hasDuplicates(betIdsWithUsersId)) {
        addValidationError('User already has a bet on this line');
      }

      // TODO: user 'bet points' avail?
    },
  },
});
