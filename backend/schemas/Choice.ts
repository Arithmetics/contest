import { checkbox, select, relationship, virtual, integer, text } from '@keystone-6/core/fields';
import { list, graphql } from '@keystone-6/core';
import { Context, Lists } from '.keystone/types';
import { isAdmin } from '../keystoneTypeAugments';
import { ChoiceStatus, Line } from '../codegen/graphql-types';

export const Choice: Lists.Choice = list({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  hooks: {
    resolveInput: async ({ resolvedData, context }) => {
      // If there's a line being set and no contest specified
      if (resolvedData.line && !resolvedData.contest) {
        const lists = context.query;
        const graphql = String.raw;

        const id = resolvedData?.line?.connect?.id;

        // Find the parent Line and get its contest
        const parentLine = await lists.Line.findOne({
          where: { id },
          query: graphql`
            id
            contest {
              id
            }
          `,
        });

        // If the parent Line has a contest, set it on the Choice
        if (parentLine?.contest?.id) {
          resolvedData.contest = {
            connect: { id: parentLine.contest.id },
          };
        }
      }
      return resolvedData;
    },
  },
  fields: {
    title: text({ validation: { isRequired: true } }),
    selection: select({
      type: 'enum',
      options: [
        { label: 'Over', value: 'OVER' },
        { label: 'Under', value: 'UNDER' },
        { label: 'Away', value: 'AWAY' },
        { label: 'Home', value: 'HOME' },
        { label: 'Custom', value: 'CUSTOM' },
      ],
      validation: {
        isRequired: true,
      },
      ui: { displayMode: 'select' },
    }),
    isWin: checkbox({ defaultValue: false }),
    points: integer({ validation: { isRequired: true }, defaultValue: 1 }),
    line: relationship({ ref: 'Line.choices', many: false }),
    contest: relationship({
      ref: 'Contest.choices',
      many: false,
      ui: {
        hideCreate: true,
      },
    }),
    bets: relationship({ ref: 'Bet.choice', many: true }),
    image: relationship({
      ref: 'CloudImage',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    secondaryImage: relationship({
      ref: 'CloudImage',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    status: virtual({
      field: graphql.field({
        type: graphql.enum({
          name: 'ChoiceStatus',
          values: graphql.enumValues(['NOT_STARTED', 'WINNING', 'LOSING', 'WON', 'LOST']),
        }),
        async resolve(item, _args, _context) {
          const context = _context as Context;
          const lists = context.query;
          const graphql = String.raw;

          const requestedLine = (await lists.Line.findOne({
            where: { id: (item.lineId as string) || '' },
            query: graphql`
              id
              title
              benchmark
              standings(orderBy: { gamesPlayed: asc }) {
                id
                wins
                gamesPlayed
                totalGames
              }
            `,
          })) as Line | null;

          // NOT_STARTED if no line or standings
          if (!requestedLine || !requestedLine.standings || requestedLine.standings.length < 1) {
            return ChoiceStatus.NotStarted;
          }

          const { gamesPlayed, wins, totalGames } =
            requestedLine.standings[requestedLine.standings.length - 1];

          const safeWins = wins || 0;
          const safeGamesPlayed = gamesPlayed || 0;
          const safeTotalGames = totalGames || 0;
          const safeBenchmark = requestedLine.benchmark || 0;
          const losses = safeGamesPlayed - safeWins;
          const lossBenchmark = safeTotalGames - safeBenchmark;
          const gamesRemaining = safeTotalGames - safeGamesPlayed;
          const winPercentage = safeWins / (safeGamesPlayed || 1);
          const benchmarkPercentage = safeBenchmark / (safeTotalGames || 1);

          // WON if selected OVER and wins greater than benchmark
          if (item.selection === 'OVER' && safeWins > safeBenchmark) {
            return ChoiceStatus.Won;
          }

          // WON if selected UNDER and losses greater than loss benchmark
          if (item.selection === 'UNDER' && losses > lossBenchmark) {
            return ChoiceStatus.Won;
          }

          // LOST if selected OVER and wins + gamesRemaining less than benchmark
          if (item.selection === 'OVER' && safeWins + gamesRemaining < safeBenchmark) {
            return ChoiceStatus.Lost;
          }

          // LOST if selected UNDER and wins + gamesRemaining less than loss benchmark
          if (item.selection === 'UNDER' && losses + gamesRemaining < lossBenchmark) {
            return ChoiceStatus.Lost;
          }

          // WINNING if selected OVER current win % is greater than benchmark win %
          if (item.selection === 'OVER' && winPercentage > benchmarkPercentage + 0.000001) {
            return ChoiceStatus.Winning;
          }

          // LOSING if select over and current win % is less than benchmark win %
          if (item.selection === 'OVER' && winPercentage < benchmarkPercentage + 0.000001) {
            return ChoiceStatus.Losing;
          }

          // LOSING if selected UNDER current win % is more than benchmark win %
          if (item.selection === 'UNDER' && winPercentage > benchmarkPercentage + 0.000001) {
            return ChoiceStatus.Losing;
          }

          // WINNING if selected UNDER and current win % is less than benchmark win %
          if (item.selection === 'UNDER' && winPercentage < benchmarkPercentage + 0.000001) {
            return ChoiceStatus.Winning;
          }

          return ChoiceStatus.NotStarted;
        },
      }),
    }),
    labelName: virtual({
      field: graphql.field({
        type: graphql.String,
        async resolve(item, _args, _context) {
          const context = _context as Context;
          const lists = context.query;
          const graphql = String.raw;
          const requestedLine = (await lists.Line.findOne({
            where: { id: (item.lineId as string) || '' },
            query: graphql`
              id
              title
              benchmark
            `,
          })) as Line;

          const title = requestedLine?.title || '??';
          const benchmark = requestedLine?.benchmark || '??';

          return `${title} - ${benchmark} - ${item.selection}`;
        },
      }),
    }),
  },
  ui: {
    labelField: 'labelName',
    listView: {
      initialColumns: ['selection', 'isWin', 'line'],
    },
  },
});
