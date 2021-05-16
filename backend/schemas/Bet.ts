import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Bet = list({
  fields: {
    title: text({ isRequired: true }),
    user: relationship({ ref: 'User.bets', many: false }),
    choice: relationship({ ref: 'Choice.bets', many: false }),
  },
});
