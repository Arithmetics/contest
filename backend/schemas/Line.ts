import { float, relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Line = list({
  fields: {
    title: text({ isRequired: true }),
    closingTime: timestamp({ isRequired: true }),
    benchmark: float({ isRequired: true }),
    contest: relationship({ ref: 'Contest.lines', many: false }),
    choices: relationship({ ref: 'Choice.line', many: true }),
  },
});
