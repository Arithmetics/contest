import { checkbox, select, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isAdmin } from '../keystoneTypeAugments';

export const Choice = list({
  access: {
    create: isAdmin,
    read: true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: {
    selection: select({
      dataType: 'enum',
      options: [
        { label: 'Over', value: 'OVER' },
        { label: 'Under', value: 'UNDER' },
        { label: 'Away', value: 'AWAY' },
        { label: 'Home', value: 'HOME' },
      ],
      isRequired: true,
      ui: { displayMode: 'select' },
    }),
    isWin: checkbox({ isRequired: true, defaultValue: false }),
    line: relationship({ ref: 'Line.choices', many: false }),
    bets: relationship({ ref: 'Bet.choice', many: true }),
  },
  ui: {
    labelField: 'selection',
    listView: {
      initialColumns: ['selection', 'isWin', 'line'],
    },
  },
});