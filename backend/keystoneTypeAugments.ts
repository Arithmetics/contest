import { KeystoneContext, KeystoneListsAPI } from '@keystone-next/types';
import { KeystoneListsTypeInfo } from '.keystone/types';

export type AugKeystoneSession = {
  itemId: string;
  listKey: string;
  data: {
    id: string;
    isAdmin: boolean;
  };
};

export type AugListAccessArgs = {
  itemId?: string;
  session?: AugKeystoneSession;
  context: KeystoneContext;
};

export function isSignedIn({ session }: AugListAccessArgs): boolean {
  return !!session;
}

export function isAdmin({ session }: AugListAccessArgs): boolean {
  return !!session?.data?.isAdmin;
}

export function isOwnAccount({ itemId: userId, session }: AugListAccessArgs): boolean {
  return userId === session?.data.id;
}

export function isIsoDateInFuture(isoDateString: string | number): boolean {
  const parsedDate = new Date(isoDateString);
  const now = new Date();
  return now < parsedDate;
}

export async function canModifyBet(accessArgs: AugListAccessArgs): Promise<boolean> {
  const { session, context, itemId } = accessArgs;

  if (!itemId) {
    return false;
  }

  const lists: KeystoneListsAPI<KeystoneListsTypeInfo> = context.lists;
  const userId = session?.data.id;

  const graphql = String.raw;
  const bet = await lists.Bet.findOne({
    where: { id: itemId },
    query: graphql`
      id
      user {
        id
      }
      choice {
        line {
          closingTime
        }
      }

  `,
  });

  const isBetOwner = bet?.user.id === userId;
  const isInFuture = isIsoDateInFuture(bet?.choice?.line?.closingTime || 0);

  return isAdmin(accessArgs) || (!isInFuture && isBetOwner);
}

export async function canReadBet(accessArgs: AugListAccessArgs): Promise<boolean> {
  const { session, context, itemId } = accessArgs;

  if (!itemId) {
    return false;
  }

  const lists: KeystoneListsAPI<KeystoneListsTypeInfo> = context.lists;
  const userId = session?.data.id;

  const graphql = String.raw;

  const bet = await lists.Bet.findOne({
    where: { id: itemId },
    query: graphql`
      id
      user {
        id
      }
      choice {
        line {
          closingTime
        }
      }

  `,
  });

  const isBetOwner = bet?.user.id === userId;

  const closingTime = new Date(bet?.choice?.line?.closingTime || 0);
  const now = new Date();
  const isAfterFuture = now > closingTime;

  return isAdmin(accessArgs) || isAfterFuture || isBetOwner;
}
