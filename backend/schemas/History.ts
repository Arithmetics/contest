import { integer, relationship, select, text } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { isAdmin } from '../keystoneTypeAugments';
import { RootContestType } from './Contest';

export const History = list({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    display: text({ validation: { isRequired: true } }),
    contestType: select({
      type: 'enum',
      options: [
        { label: 'NBA Over Under', value: RootContestType.NBA_OVER_UNDER },
        { label: 'NFL Over Under', value: RootContestType.NFL_OVER_UNDER },
        { label: 'NFL ATS', value: RootContestType.NFL_ATS },
      ],
      validation: {
        isRequired: true,
      },
    }),
    year: integer({ validation: { isRequired: true } }),
    user: relationship({ ref: 'User.histories', many: false }),
  },
});
