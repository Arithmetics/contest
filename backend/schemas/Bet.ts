import { checkbox, relationship } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { canModifyBet, canReadBet, isSignedIn, AugKeystoneSession } from '../keystoneTypeAugments';
import { Choice } from '../codegen/graphql-types';

export const Bet = list({
  access: {
    operation: {
      create: isSignedIn,
    },
    filter: {
      query: canReadBet,
      delete: canModifyBet,
      update: canModifyBet,
    },
  },
  fields: {
    user: relationship({ ref: 'User.bets', many: false }),
    choice: relationship({ ref: 'Choice.bets', many: false }),
    isSuper: checkbox({ defaultValue: false }),
  },
  hooks: {
    validateInput: async (args) => {
      const { resolvedData, addValidationError, context } = args;
      const lists = context.query;
      const graphql = String.raw;

      const session = context.session as AugKeystoneSession;

      if (session.data.isAdmin) {
        return;
      }

      // use this or session id becuase we guard for mismatched userId
      const userId = resolvedData.user.connect.id;

      const requestedChoice = await lists.Choice.findOne({
        where: { id: resolvedData.choice.connect.id },
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
                ruleSet {
                  maxBets
                  maxSuperBets
                }
                registrations {
                  user {
                    id
                  }
                }
              }
            }
          `,
      });

      const typedChoice = requestedChoice as Choice;

      typedChoice.line?.choices?.forEach((choice) => {
        choice.bets?.forEach((bet) => {
          if (bet.user?.id === userId) {
            addValidationError('User already has a bet on this line');
          }
        });
      });

      // RULE: user must be registered for the contest
      const usersRegistration = typedChoice?.line?.contest?.registrations?.some(
        (r) => r?.user?.id === session.data?.id
      );

      if (!usersRegistration) {
        addValidationError('User must be registered for the contest.');
      }

      // RULE: user can only create bets for themselves
      if (userId !== session.data?.id) {
        addValidationError('Can only create bet for own account');
      }

      // RULE: line must be open
      if (typedChoice.line?.closingTime) {
        const lineCloses = Date.parse(typedChoice.line?.closingTime);
        const now = Date.now();
        if (lineCloses - now < 0) {
          addValidationError('Line has closed. No more bets.');
        }
      }

      // RULE: user must have remaining bets according to the rules of the contest

      const contest = typedChoice.line?.contest;

      const usersBets = await lists.Bet.findMany({
        where: {
          user: { id: { equals: userId } },
          choice: { line: { contest: { id: { equals: contest?.id } } } },
        },
        query: graphql`
          id
          isSuper
        `,
      });
      // normal bets
      const normalBetLimit = contest?.ruleSet?.maxBets || 0;
      const usersCurrentBets = usersBets.length || 0;
      if (usersCurrentBets === normalBetLimit || usersCurrentBets > normalBetLimit) {
        addValidationError('User is out of bets.');
      }

      // super bets
      const normalSuperBetLimt = contest?.ruleSet?.maxSuperBets || 0;
      const usersCurrentSuperBets = usersBets.filter((b) => b.isSuper).length || 0;
      if (
        resolvedData.isSuper &&
        (usersCurrentSuperBets === normalSuperBetLimt || usersCurrentSuperBets > normalSuperBetLimt)
      ) {
        addValidationError('User is out of super bets.');
      }
    },
  },
});
