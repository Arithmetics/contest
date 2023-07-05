import { float, relationship, text, timestamp, virtual } from '@keystone-6/core/fields';
import { list, graphql } from '@keystone-6/core';
import { Context, Lists } from '.keystone/types';
import { isAdmin } from '../keystoneTypeAugments';
import { Contest } from '../codegen/graphql-types';

export const Line: Lists.Line = list({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    title: text({ validation: { isRequired: true } }),
    closingTime: timestamp({ validation: { isRequired: true } }),
    benchmark: float({ validation: { isRequired: true } }),
    image: relationship({
      ref: 'CloudImage',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    contest: relationship({ ref: 'Contest.lines', many: false }),
    choices: relationship({ ref: 'Choice.line', many: true }),
    standings: relationship({ ref: 'Standing.line', many: true }),
    labelName: virtual({
      field: graphql.field({
        type: graphql.String,
        async resolve(item, _args, _context) {
          const context = _context as Context;
          const lists = context.query;
          const graphql = String.raw;
          const parentContest = (await lists.Contest.findOne({
            where: { id: (item.contestId as string) || '' },
            query: graphql`
              id
              name
            `,
          })) as Contest;

          const contestTitle = parentContest?.name || '';

          return `${item.title}: ${contestTitle}`;
        },
      }),
    }),
  },
  ui: {
    labelField: 'labelName',
  },
});
