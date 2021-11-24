import { float, relationship, text, timestamp } from '@keystone-next/keystone/fields';
import { list } from '@keystone-next/keystone';
import { isAdmin } from '../keystoneTypeAugments';

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
    title: text({ isRequired: true }),
    closingTime: timestamp({ isRequired: true }),
    benchmark: float({ isRequired: true }),
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
  },
});
