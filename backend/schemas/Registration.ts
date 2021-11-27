import { checkbox, relationship, virtual } from '@keystone-next/keystone/fields';
import { list, graphql } from '@keystone-next/keystone';
import { KeystoneListsAPI } from '@keystone-next/keystone/types';
import { KeystoneListsTypeInfo, ContestStatusType } from '.keystone/types';
import { isAdmin, isSignedIn, AugKeystoneSession } from '../keystoneTypeAugments';
import { ChoiceStatus, Line } from '../codegen/graphql-types';

export const Registration = list({
  access: {
    operation: {
      query: () => true,
      delete: isSignedIn,
      create: isSignedIn,
      update: isAdmin,
    },
  },
  fields: {
    hasPaid: checkbox({
      defaultValue: false,
      access: {
        read: () => true,
        update: isAdmin,
      },
    }),
    contest: relationship({ ref: 'Contest.registrations', many: false }),
    user: relationship({ ref: 'User.registrations', many: false }),

    counts: virtual({
      field: graphql.field({
        type: graphql.object<{
          locked: number;
          likely: number;
          possible: number;
        }>()({
          name: 'PointCounts',
          fields: {
            locked: graphql.field({ type: graphql.Int }),
            likely: graphql.field({ type: graphql.Int }),
            possible: graphql.field({ type: graphql.Int }),
          },
        }),
        async resolve(item, _args, context) {
          const lists = context.query as KeystoneListsAPI<KeystoneListsTypeInfo>;
          const graphql = String.raw;

          const contestLines = (await lists.Line.findMany({
            where: { contest: { id: { equals: (item.contestId as string) || '' } } },
            query: graphql`
              id
              title
              choices {
                selection
                status
                bets {
                  id
                  isSuper
                  user {
                    id
                  }
                }
              }
            `,
          })) as Line[] | null;

          let locked = 0;
          let likely = 0;
          let possible = 0;

          contestLines?.forEach((line) => {
            line.choices?.forEach((choice) => {
              // only add points if user has a bet on the choice
              const usersBet = choice.bets?.find((bet) => bet?.user?.id === item.userId);
              if (usersBet) {
                const points = usersBet.isSuper ? 2 : 1;
                if (choice.status === ChoiceStatus.Won) {
                  locked += points;
                  likely += points;
                  possible += points;
                }
                if (choice.status === ChoiceStatus.Winning) {
                  likely += points;
                  possible += points;
                }
                if (choice.status === ChoiceStatus.Losing) {
                  possible += points;
                }
                if (choice.status === ChoiceStatus.NotStarted) {
                  possible += points;
                }
              }
            });
          });
          return {
            locked,
            likely,
            possible,
          };
        },
      }),
      ui: { query: '{ locked likely possible }' },
    }),
  },
  hooks: {
    validateInput: async (args) => {
      const { resolvedData, addValidationError, context } = args;
      const lists = context.query as KeystoneListsAPI<KeystoneListsTypeInfo>;
      const graphql = String.raw;

      const session = context.session as AugKeystoneSession;

      if (session.data.isAdmin) {
        return;
      }

      // RULE: only can create for yourself
      if (resolvedData.user.connect.id !== session?.data?.id) {
        addValidationError('Can only create registration for own account');
      }

      const requestedContest = await lists.Contest.findOne({
        where: { id: resolvedData.contest.connect.id },
        query: graphql`
            id
            status
          `,
      });

      if ((requestedContest.status as ContestStatusType) !== 'OPEN') {
        addValidationError('The contest is closed');
      }

      // RULE: only one registration per user per contest
      const duplicateRegistrations = await lists.Registration.findMany({
        where: {
          contest: { id: resolvedData.contest.connect.id },
          user: { id: { equals: session?.data?.id } },
        },
        query: graphql`
            id
          `,
      });

      if (duplicateRegistrations.length !== 0) {
        addValidationError('Cannot register for same contest twice');
      }
    },
    validateDelete: async (args) => {
      const { item, addValidationError, context } = args;
      const lists = context.query as KeystoneListsAPI<KeystoneListsTypeInfo>;
      const graphql = String.raw;

      const session = context.session as AugKeystoneSession;

      if (session.data.isAdmin) {
        return;
      }

      if (item.userId !== session.data?.id) {
        addValidationError('Can only delete your own contest');
      }

      const requestedContest = await lists.Contest.findOne({
        where: { id: item.contestId },
        query: graphql`
            id
            status
          `,
      });

      if ((requestedContest.status as ContestStatusType) !== 'OPEN') {
        addValidationError('The contest is closed. Cannot leave contest.');
      }
    },
  },
});
