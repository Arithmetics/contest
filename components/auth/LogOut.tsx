import { Button, useToast } from '@chakra-ui/react';
import { CURRENT_USER_QUERY } from '../queries';

import { useSignOutMutation } from '../../generated/graphql-types';

export default function LogOut(): JSX.Element {
  const toast = useToast();
  const [signout] = useSignOutMutation({
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
