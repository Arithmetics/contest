import { checkbox, select, relationship, virtual } from '@keystone-6/core/fields';
import { graphql } from '@apollo/client/core';
import { list } from '@keystone-6/core';
import { Context, Lists } from '.keystone/types';
import { AugKeystoneSession, isAdmin } from '../keystoneTypeAugments';
import { ChoiceStatus, Line } from '../codegen/graphql-types';

export const Choice: Lists.Choice<AugKeystoneSession> = list({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    selection: select({
      type: 'enum',
      options: [
        { label: 'Over', value: 'OVER' },
        { label: 'Under', value: 'UNDER' },
        { label: 'Away', value: 'AWAY' },
        { label: 'Home', value: 'HOME' },
      ],
      validation: {
        isRequired: true,
      },
      ui: { displayMode: 'select' },
    }),
    isWin: checkbox({ defaultValue: false }),
    line: relationship({ ref: 'Line.choices', many: false }),
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
          // const graphql = String.raw;
          const requestedLine = (await lists.Line.findOne({
            where: { id: (item.lineId as string) || '' },
            query: graphql.raw`
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
