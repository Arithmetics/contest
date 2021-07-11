import { KeystoneContext } from '@keystone-next/types';
import { BetWhereInput } from '.keystone/types';

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
  operation: 'read' | 'update' | 'create' | 'delete';
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

export async function canModifyBet(
  accessArgs: AugListAccessArgs
): Promise<boolean | BetWhereInput> {
  const { session } = accessArgs;

  // RULE: Is admin
  if (isAdmin(accessArgs)) {
    return true;
  }

  const userId = session?.data?.id;
  const now = new Date().toISOString();

  // owns bet AND line is not closed
  const betOwnerAndLineNotClosed: BetWhereInput = {
    AND: [
      { user: { id: userId } },
      {
        choice: {
          line: { closingTime_gt: now },
        },
      },
    ],
  };

  return betOwnerAndLineNotClosed;
}

export async function canReadBet(accessArgs: AugListAccessArgs): Promise<boolean | BetWhereInput> {
  const { session } = accessArgs;

  // RULE: Is admin
  if (isAdmin(accessArgs)) {
    return true;
  }

  const userId = session?.data?.id;
  const now = new Date().toISOString();

  if (!userId) {
    return {
      choice: {
        line: { closingTime_lt: now },
      },
    };
  }

  // owns bet OR line is closed
  const betOwnerOrLineClosed: BetWhereInput = {
    OR: [
      { user: { id: userId } },
      {
        choice: {
          line: { closingTime_lt: now },
        },
      },
    ],
  };

  return betOwnerOrLineClosed;
}
