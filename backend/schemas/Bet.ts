import { relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { KeystoneListsAPI } from '@keystone-next/types';
import { KeystoneListsTypeInfo } from '.keystone/types';
import {
  AugKeystoneSession,
  canModifyBet,
  canReadBet,
  isIsoDateInFuture,
} from '../keystoneTypeAugments';

function hasDuplicates(arr: number[]): boolean {
  return new Set(arr).size !== arr.length;
}

export const Bet = list({
  access: {
    create: true,
    read: canReadBet,
    // read: true,
    delete: canModifyBet,
    update: canModifyBet,
  },
  fields: {
    user: relationship({ ref: 'User.bets', many: false }),
    choice: relationship({ ref: 'Choice.bets', many: false }),
  },
  hooks: {
    validateInput: async (args) => {
      const { resolvedData, addValidationError, context, operation } = args;
      const lists: KeystoneListsAPI<KeystoneListsTypeInfo> = context.lists;
      const graphql = String.raw;
      const session: AugKeystoneSession | undefined = context.session;

      // RULE: must be logged in
      if (!session || !session.data) {
        addValidationError('Must have session to use Bets');
        return;
      }

      const { id: userId, isAdmin } = session.data;

      // RULE: must be user assiged to be OR admin
      if (userId !== resolvedData.user && !isAdmin) {
        addValidationError('Can only create Bets under the signed in account');
        return;
      }

      // RULE: line closing time is in future (no edits) OR admin

      const requestedChoice = await lists.Choice.findOne({
        where: { id: resolvedData.choice },
        query: graphql`
            id
            line {
              id
              closingTime
              choices {
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

      const closingTime = requestedChoice?.line?.closingTime;

      const isInFuture = isIsoDateInFuture(closingTime || 0);

      if (!isInFuture && !isAdmin) {
        addValidationError('Bet is locked due to Line closing time being reached');
        return;
      }

      // only one bet per user per line
      const betIdsWithUsersId: number[] = operation === 'create' ? [resolvedData.user] : [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      requestedChoice?.line?.choices.forEach((choice: { bets: any[] }) => {
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
