import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';

export const User = list({
  fields: {
    email: text({ isRequired: true, isUnique: true }),
    name: text({ isRequired: true }),
    userName: text({ isRequired: true, isUnique: true }),
    password: password(),
    bets: relationship({ ref: 'Bet.user', many: true }),
  },
});
