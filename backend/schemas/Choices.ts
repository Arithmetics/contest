import { checkbox, select, relationship, virtual } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { KeystoneListsAPI } from '@keystone-next/types';
import { KeystoneListsTypeInfo } from '.keystone/types';
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
    labelName: virtual({
      resolver: async (item, _args, context) => {
        const lists: KeystoneListsAPI<KeystoneListsTypeInfo> = context.lists;
        const graphql = String.raw;
        const requestedLine = await lists.Line.findOne({
          where: { id: item.lineId || '' },
          query: graphql`
              id
              title
              benchmark
            `,
        });

        const title = requestedLine?.title || '??';
        const benchmark = requestedLine?.benchmark || '??';

        return `${title} - ${benchmark} - ${item.selection}`;
      },
    }),
  },
  ui: {
    labelField: 'labelName',
    listView: {
      initialColumns: ['selection', 'isWin', 'line'],
    },
  },
});
