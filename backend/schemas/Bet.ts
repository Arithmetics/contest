import { relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { canModifyBet, canReadBet } from '../keystoneTypeAugments';

export const Bet = list({
  access: {
    create: true,
    read: canReadBet,
    delete: canModifyBet,
    update: canModifyBet,
  },
  fields: {
    user: relationship({ ref: 'User.bets', many: false }),
    choice: relationship({ ref: 'Choice.bets', many: false }),
  },
});
