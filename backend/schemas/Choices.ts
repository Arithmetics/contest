import { select, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Choice = list({
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
    line: relationship({ ref: 'Line.choices', many: false }),
    bets: relationship({ ref: 'Bet.choice', many: true }),
  },
});
