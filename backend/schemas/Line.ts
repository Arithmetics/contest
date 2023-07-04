import { float, relationship, text, timestamp, virtual } from '@keystone-6/core/fields';
import { list, graphql } from '@keystone-6/core';
import { KeystoneListsAPI } from '@keystone-6/core/types';
import { KeystoneListsTypeInfo } from '.keystone/types';
import { isAdmin } from '../keystoneTypeAugments';
import { Contest } from '../codegen/graphql-types';

export const Line = list({
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
        async resolve(item, _args, context) {
          const lists = context.query as KeystoneListsAPI<KeystoneListsTypeInfo>;
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
