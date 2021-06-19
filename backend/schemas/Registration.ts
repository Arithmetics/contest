import { checkbox, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { KeystoneListsAPI } from '@keystone-next/types';
import { KeystoneListsTypeInfo, ContestStatusType } from '.keystone/types';
import { isAdmin, isSignedIn, AugKeystoneSession } from '../keystoneTypeAugments';

export const Registration = list({
  access: {
    read: true,
    delete: isSignedIn,
    create: isSignedIn,
    update: isAdmin,
  },
  fields: {
    hasPaid: checkbox({
      defaultValue: false,
      access: {
        read: true,
        update: isAdmin,
      },
    }),
    contest: relationship({ ref: 'Contest.registrations', many: false }),
    user: relationship({ ref: 'User.registrations', many: false }),
  },
  hooks: {
    validateInput: async (args) => {
      const { resolvedData, addValidationError, context } = args;
      const lists: KeystoneListsAPI<KeystoneListsTypeInfo> = context.lists;
      const graphql = String.raw;

      const session = context.session as AugKeystoneSession;

      if (resolvedData.user !== session.data?.id) {
        addValidationError('Can only create registration for own account');
      }

      const requestedContest = await lists.Contest.findOne({
        where: { id: resolvedData.contest },
        query: graphql`
            id
            status
          `,
      });

      if ((requestedContest.status as ContestStatusType) !== 'OPEN') {
        addValidationError('The contest is closed');
      }

      // RULE: only one registration per user per contest
      const duplicateRegistrations = await lists.Registration.findMany({
        where: { contest: { id: resolvedData.contest }, user: { id: session.data?.id } },
        query: graphql`
            id
          `,
      });

      if (duplicateRegistrations.length !== 0) {
        addValidationError('Cannot register for same contest twice');
      }
    },
    validateDelete: async (args) => {
      const { existingItem, addValidationError, context } = args;
      const lists: KeystoneListsAPI<KeystoneListsTypeInfo> = context.lists;
      const graphql = String.raw;

      const session = context.session as AugKeystoneSession;

      if (existingItem.userId.toString() !== session.data?.id) {
        addValidationError('Can only delete your own contest');
      }

      const requestedContest = await lists.Contest.findOne({
        where: { id: existingItem.contestId },
        query: graphql`
            id
            status
          `,
      });

      if ((requestedContest.status as ContestStatusType) !== 'OPEN') {
        addValidationError('The contest is closed. Cannot leave contest.');
      }
    },
  },
});
