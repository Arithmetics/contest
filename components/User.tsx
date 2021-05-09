import { useCurrent_User_QueryQuery, AuthenticatedItem } from '../generated/graphql';

export function useUser(): AuthenticatedItem | null | undefined {
  const { data } = useCurrent_User_QueryQuery();
  return data?.authenticatedItem;
}
