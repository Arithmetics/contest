import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isAdmin } from '../keystoneTypeAugments';

export const Contest = list({
  access: {
    create: isAdmin,
    read: true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      options: [
        { label: 'Open', value: 'OPEN' },
        { label: 'In Progress', value: 'IN_PROGRESS' },
        { label: 'Complete', value: 'COMPLETE' },
      ],
      defaultValue: 'OPEN',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    entryFee: integer(),
    image: relationship({
      ref: 'CloudImage',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    lines: relationship({ ref: 'Line.contest', many: true }),
  },
});
