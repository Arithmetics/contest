import { integer, relationship } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
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
    gamesPlayed: integer({ validation: { isRequired: true } }),
    wins: integer({ validation: { isRequired: true } }),
    totalGames: integer({ validation: { isRequired: true } }),
    line: relationship({ ref: 'Line.standings', many: false }),
  },
});
