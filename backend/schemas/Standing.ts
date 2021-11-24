import { integer, relationship } from '@keystone-next/keystone/fields';
import { list } from '@keystone-next/keystone';
import { isAdmin } from '../keystoneTypeAugments';

export const Standing = list({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    gamesPlayed: integer({ isRequired: true }),
    wins: integer({ isRequired: true }),
    totalGames: integer({ isRequired: true }),
    line: relationship({ ref: 'Line.standings', many: false }),
  },
});
