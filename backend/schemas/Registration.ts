import { ContestStatusType, Lists } from '.keystone/types';
import { graphql, list } from '@keystone-6/core';
import { checkbox, relationship, virtual } from '@keystone-6/core/fields';
import { AugKeystoneSession, isAdmin, isSignedIn } from '../keystoneTypeAugments';

export const Registration: Lists.Registration = list({
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
    isPremium: checkbox({
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
          tiebreaker: number;
        }>()({
          name: 'PointCounts',
          fields: {
            locked: graphql.field({ type: graphql.Int }),
            likely: graphql.field({ type: graphql.Int }),
            possible: graphql.field({ type: graphql.Int }),
            tiebreaker: graphql.field({ type: graphql.Float }),
          },
        }),
        async resolve() {
          // console.log('starting');
          // const context = _context as Context;
          // const graphql = String.raw;

          // if (
          //   cache[item.contestId as string] &&
          //   cache[item.contestId as string][item.userId as string]
          // ) {
          //   return cache[item.contestId as string][item.userId as string];
          // }
          // // const contestLines = (await lists.Line.findMany({
          // const contestLines = (await context.query.Line.findMany({
          //   where: { contest: { id: { equals: (item.contestId as string) || '' } } },
          //   query: graphql`
          //     id
          //     title
          //     benchmark
          //     standings(orderBy: { gamesPlayed: desc }, take: 1) {
          //       id
          //       wins
          //       gamesPlayed
          //       totalGames
          //     }
          //     choices {
          //       selection
          //       status
          //       bets {
          //         id
          //         isSuper
          //         user {
          //           id
          //         }
          //       }
          //     }
          //   `,
          // })) as Line[] | null;

          // let locked = 0;
          // let likely = 0;
          // let possible = 0;
          // let tiebreaker = 0;

          // contestLines?.forEach((line) => {
          //   line.choices?.forEach((choice) => {
          //     let lineDiff = 0;
          //     // only add points if user has a bet on the choice
          //     const usersBet = choice.bets?.find((bet) => bet?.user?.id === item.userId);
          //     if (usersBet) {
          //       const points = usersBet.isSuper ? 2 : 1;
          //       const standing = line.standings?.[0];
          //       if (standing) {
          //         const totalGames = line.standings?.[0].totalGames || 0;
          //         const gamesPlayed = line.standings?.[0].gamesPlayed || 0;
          //         const wins = line.standings?.[0].wins || 0;

          //         const winPercentage = wins / (gamesPlayed || 1);
          //         const projectedWins = Math.round(winPercentage * totalGames);

          //         const benchmark = line.benchmark || 0;

          //         lineDiff = Math.abs(projectedWins - benchmark);
          //       }

          //       if (choice.status === ChoiceStatus.Won) {
          //         locked += points;
          //         likely += points;
          //         possible += points;
          //         tiebreaker += lineDiff;
          //       }
          //       if (choice.status === ChoiceStatus.Winning) {
          //         likely += points;
          //         possible += points;
          //         tiebreaker += lineDiff;
          //       }
          //       if (choice.status === ChoiceStatus.Losing) {
          //         possible += points;
          //         tiebreaker = tiebreaker - lineDiff;
          //       }
          //       if (choice.status === ChoiceStatus.Lost) {
          //         tiebreaker = tiebreaker - lineDiff;
          //       }
          //       if (choice.status === ChoiceStatus.NotStarted) {
          //         possible += points;
          //       }
          //     }
          //   });
          // });
          // if (!cache[item.contestId as string]) {
          //   cache[item.contestId as string] = {};
          // }
          // cache[item.contestId as string][item.userId as string] = {
          //   locked,
          //   likely,
          //   possible,
          //   tiebreaker,
          // };
          // console.log(
          //   `set the queue for ${item.contestId},${item.userId}: ${locked},${likely},${possible},${tiebreaker}`
          // );
          return {
            locked: 0,
            likely: 0,
            possible: 0,
            tiebreaker: 0,
          };
        },
      }),
      ui: { query: '{ locked likely possible tiebreaker }' },
    }),
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

      // RULE: only can create for yourself
      if (resolvedData.user?.connect?.id !== session?.data?.id) {
        addValidationError('Can only create registration for own account');
      }

      const requestedContest = await lists.Contest.findOne({
        where: { id: resolvedData.contest?.connect?.id },
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
          contest: { id: { equals: resolvedData.contest?.connect?.id } },
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
      const lists = context.query;
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
  ui: {
    listView: {
      initialColumns: ['id', 'user', 'hasPaid', 'contest'],
    },
  },
});
