import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        userName
        # other stuff
      }
    }
  }
`;

export function useUser(): unknown {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}
