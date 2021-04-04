import { Button } from '@chakra-ui/react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../User';

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    endSession
  }
`;

export default function LogOut(): JSX.Element {
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const logout = (): void => {
    signout();
  };

  return (
    <Button variant="ghost" colorScheme="teal" onClick={logout}>
      Logout
    </Button>
  );
}
