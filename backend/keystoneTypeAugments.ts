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
};

export function isSignedIn({ session }: AugListAccessArgs): boolean {
  return !!session;
}

export function isAdmin({ session }: AugListAccessArgs): boolean {
  return !!session?.data?.isAdmin;
}
