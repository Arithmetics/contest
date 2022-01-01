import { integer, relationship, select, text } from '@keystone-next/keystone/fields';
import { list } from '@keystone-next/keystone';
import { isAdmin } from '../keystoneTypeAugments';

export const Contest = list({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      type: 'enum',
      options: [
        { label: 'Open', value: 'OPEN' },
        { label: 'In Progress', value: 'IN_PROGRESS' },
        { label: 'Complete', value: 'COMPLETE' },
      ],
      validation: {
        isRequired: true,
      },
      defaultValue: 'OPEN',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    entryFee: integer(),
    contestType: select({
      type: 'enum',
      options: [
        { label: 'NBA Over Under', value: 'NBA_OVER_UNDER' },
        { label: 'NFL Over Under', value: 'NFL_OVER_UNDER' },
        { label: 'NFL ATS', value: 'NFL_ATS' },
      ],
      validation: {
        isRequired: true,
      },
    }),
    image: relationship({
      ref: 'CloudImage',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    lines: relationship({ ref: 'Line.contest', many: true }),
    registrations: relationship({ ref: 'Registration.contest', many: true }),
    ruleSet: relationship({ ref: 'RuleSet.contest', many: false }),
  },
});
