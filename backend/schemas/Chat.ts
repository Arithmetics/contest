import { relationship, text } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { isSignedIn, isAdmin, AugKeystoneSession } from '../keystoneTypeAugments';

// import { Chat } from '../codegen/graphql-types';
import { Lists } from '.keystone/types';
import { Contest } from '../codegen/graphql-types';

export const Chat: Lists.Chat = list({
  access: {
    operation: {
      create: isSignedIn,
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    content: text({ validation: { isRequired: true } }),
    user: relationship({ ref: 'User.chats', many: false }),
    contest: relationship({ ref: 'Contest.chats', many: false }),
  },
  hooks: {
    validateInput: async (args) => {
      const { resolvedData, addValidationError, context } = args;
      const lists = context.query;
      const graphql = String.raw;

      console.log({ resolvedData });

      const session = context.session as AugKeystoneSession;

      if (session.data.isAdmin) {
        return;
      }

      // use this or session id becuase we guard for mismatched userId
      const userId = resolvedData.user?.connect?.id;
      const contestId = resolvedData.contest?.connect?.id;

      if (!userId || !contestId) {
        addValidationError('User and contest must be provided');
      }

      // RULE: user must be registered for the contest
      const contest = await lists.Contest.findOne({
        where: { id: contestId },
        query: graphql`
        id
        registrations {
            id
            user {
                id
                name
            }
        }
      `,
      });

      const typedContest = contest as Contest;

      const usersRegistration = typedContest?.registrations?.find((r) => r.user?.id === userId);

      // must be registered for the contest
      if (!usersRegistration) {
        addValidationError('User must be registered for the contest.');
      }

      // RULE: user can only create chats for themselves
      if (userId !== session.data?.id) {
        addValidationError('Can only create chat for own account');
      }
    },
  },
});
