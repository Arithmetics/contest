import { text, checkbox, password, relationship } from '@keystone-next/keystone/fields';
import { list } from '@keystone-next/keystone';
import { isAdmin, isOwnAccount } from '../keystoneTypeAugments';

export const User = list({
  access: {
    operation: {
      create: isOwnAccount,
      query: () => true,
      update: isOwnAccount,
      delete: isAdmin,
    },
  },
  fields: {
    email: text({ validation: { isRequired: true }, isIndexed: 'unique', isFilterable: true }),
    name: text({ validation: { isRequired: true } }),
    userName: text({ validation: { isRequired: true }, isIndexed: 'unique', isFilterable: true }),
    password: password(),
    isAdmin: checkbox({
      defaultValue: false,
      access: { read: () => true, update: isAdmin, create: isAdmin },
    }),
    bets: relationship({ ref: 'Bet.user', many: true }),
    avatarImage: relationship({
      ref: 'CloudImage',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    registrations: relationship({ ref: 'Registration.user', many: true }),
  },
  ui: {
    listView: {
      initialColumns: ['email', 'name', 'isAdmin'],
    },
  },
});
