import { integer, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isAdmin } from '../keystoneTypeAugments';

export const RuleSet = list({
  access: {
    create: isAdmin,
    read: true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: {
    maxBets: integer(),
    maxSuperBets: integer(),
    superBetPointCount: integer(),
    contest: relationship({ ref: 'Contest.ruleSet', many: false }),
  },
});
