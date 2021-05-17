import { list } from '@keystone-next/keystone/schema';
import { text, checkbox, password, relationship } from '@keystone-next/fields';
// import { AugKeystoneSession } from '../keystoneTypeAugments';

export const User = list({
  fields: {
    email: text({ isRequired: true, isUnique: true }),
    name: text({ isRequired: true }),
    userName: text({ isRequired: true, isUnique: true }),
    password: password(),
    isAdmin: checkbox({ isRequired: true, defaultValue: false }),
    bets: relationship({ ref: 'Bet.user', many: true }),
  },
  ui: {
    listView: {
      initialColumns: ['email', 'name', 'isAdmin'],
    },
  },
  // hooks: {
  //   resolveInput: async ({ resolvedData, context }) => {
  //     const session: AugKeystoneSession = context.session;

  //     return resolvedData;
  //   },
  // },
});
