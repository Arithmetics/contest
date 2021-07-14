import { checkbox, relationship, virtual } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { KeystoneListsAPI, schema } from '@keystone-next/types';
import { KeystoneListsTypeInfo, ContestStatusType } from '.keystone/types';
import { isAdmin, isSignedIn, AugKeystoneSession } from '../keystoneTypeAugments';
import { ChoiceStatus, Line } from '../../generated/graphql-types';

export const Registration = list({
  access: {
    read: true,
    delete: isSignedIn,
    create: isSignedIn,
    update: isAdmin,
  },
  fields: {
    hasPaid: checkbox({
      defaultValue: false,
      access: {
        read: true,
        update: isAdmin,
      },
    }),
    contest: relationship({ ref: 'Contest.registrations', many: false }),
    user: relationship({ ref: 'User.registrations', many: false }),

    counts: virtual({
      field: schema.field({
        type: schema.object<{
          locked: number;
          likely: number;
          possible: number;
        }>()({
          name: 'PointCounts',
          fields: {
            locked: schema.field({ type: schema.Int }),
            likely: schema.field({ type: schema.Int }),
            possible: schema.field({ type: schema.Int }),
          },
        }),
        async resolve(item, _args, context) {
          const lists = context.lists as KeystoneListsAPI<KeystoneListsTypeInfo>;
          const graphql = String.raw;

          const contestLines = (await lists.Line.findMany({
            where: { contest: { id: (item.contestId as string) || '' } },
            query: graphql`
              id
              title
              choices {
                selection
                status
                bets {
                  id
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
                if (choice.status === ChoiceStatus.Won) {
                  locked += 1;
                  likely += 1;
                  possible += 1;
                }
                if (choice.status === ChoiceStatus.Winning) {
                  likely += 1;
                  possible += 1;
                }
                if (choice.status === ChoiceStatus.Losing) {
                  possible += 1;
                }
                if (choice.status === ChoiceStatus.NotStarted) {
                  possible += 1;
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
      graphQLReturnFragment: '{ locked likely possible }',
    }),
  },
  hooks: {
    validateInput: async (args) => {
      const { resolvedData, addValidationError, context } = args;
      const lists = context.lists as KeystoneListsAPI<KeystoneListsTypeInfo>;
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
          user: { id: session?.data?.id },
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
      const { existingItem, addValidationError, context } = args;
      const lists = context.lists as KeystoneListsAPI<KeystoneListsTypeInfo>;
      const graphql = String.raw;

      const session = context.session as AugKeystoneSession;

      if (session.data.isAdmin) {
        return;
      }

      if (existingItem.userId.toString() !== session.data?.id) {
        addValidationError('Can only delete your own contest');
      }

      const requestedContest = await lists.Contest.findOne({
        where: { id: existingItem.contestId.connect.id },
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
