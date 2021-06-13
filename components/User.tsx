import { useCurrentUserQuery, AuthenticatedItem, User } from '../generated/graphql-types';

export function useUser(): Partial<AuthenticatedItem> | null | undefined {
  const { data } = useCurrentUserQuery();
  return data?.authenticatedItem as User;
}
