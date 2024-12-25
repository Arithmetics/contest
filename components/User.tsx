import { useCurrentUserQuery, AuthenticatedItem, User } from '../generated/graphql-types';

export function useUser(): Partial<AuthenticatedItem> | null | undefined {
  const { data } = useCurrentUserQuery({
    fetchPolicy: 'network-only',
  });
  return data?.authenticatedItem as User;
}
