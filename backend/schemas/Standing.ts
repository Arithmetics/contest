import { integer, relationship } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { AugKeystoneSession, isAdmin } from '../keystoneTypeAugments';
import { Lists } from '.keystone/types';

export const Standing: Lists.Standing<AugKeystoneSession> = list({
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
