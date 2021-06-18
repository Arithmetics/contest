import { float, relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isAdmin } from '../keystoneTypeAugments';

export const Line = list({
  access: {
    create: isAdmin,
    read: true,
    update: isAdmin,
    delete: isAdmin,
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
  },
});
