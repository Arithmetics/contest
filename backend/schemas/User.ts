import { list } from '@keystone-next/keystone/schema';
import { text, checkbox, password, relationship } from '@keystone-next/fields';
import { isAdmin, isOwnAccount } from '../keystoneTypeAugments';

export const User = list({
  access: {
    create: isOwnAccount,
    read: true,
    update: isOwnAccount,
    delete: isAdmin,
  },
  fields: {
    email: text({ isRequired: true, isUnique: true }),
    name: text({ isRequired: true }),
    userName: text({ isRequired: true, isUnique: true }),
    password: password(),
    isAdmin: checkbox({
      isRequired: true,
      defaultValue: false,
      access: { read: true, update: isAdmin, create: isAdmin },
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
  },
  ui: {
    listView: {
      initialColumns: ['email', 'name', 'isAdmin'],
    },
  },
});
