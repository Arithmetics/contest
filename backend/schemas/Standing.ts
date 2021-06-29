import { integer, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isAdmin } from '../keystoneTypeAugments';

export const Standing = list({
  access: {
    create: isAdmin,
    read: true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: {
    gamesPlayed: integer({ isRequired: true }),
    wins: integer({ isRequired: true }),
    totalGames: integer({ isRequired: true }),
    line: relationship({ ref: 'Line.standings', many: false }),
  },
});
