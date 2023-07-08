import { integer, relationship } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { isAdmin } from '../keystoneTypeAugments';
import { Lists } from '.keystone/types';

export const RuleSet: Lists.Registration = list({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    maxBets: integer(),
    maxSuperBets: integer(),
    superBetPointCount: integer(),
    contest: relationship({ ref: 'Contest.ruleSet', many: false }),
  },
});
