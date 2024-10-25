import { useCurrentUserQuery, AuthenticatedItem, User } from '../generated/graphql-types';

export function useUser(): Partial<AuthenticatedItem> | null | undefined {
  const { data, loading } = useCurrentUserQuery();
  console.log({ loading, data });
  return data?.authenticatedItem as User;
}
