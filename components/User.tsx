import { useCurrentUserQuery, AuthenticatedItem } from '../generated/graphql-types';

export function useUser(): Partial<AuthenticatedItem> | null | undefined {
  const { data } = useCurrentUserQuery();
  return data?.authenticatedItem;
}
