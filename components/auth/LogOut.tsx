import { Button, useToast } from '@chakra-ui/react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../User';

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    endSession
  }
`;

export default function LogOut(): JSX.Element {
  const toast = useToast();
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const logout = (): void => {
    try {
      signout();
      toast({
        title: 'Logged out',
        description: 'Successfully logged out',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: 'Error',
        description: 'There was some issue logging you out. Refresh and try again',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Button variant="ghost" colorScheme="teal" onClick={logout}>
      Logout
    </Button>
  );
}
