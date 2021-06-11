import { Flex, Stack } from '@chakra-ui/react';
import UpdateAccountForm from '../components/auth/UpdateAccountForm';
import UpdatePasswordForm from '../components/auth/UpdatePasswordForm';
import UpdateAvatar from '../components/auth/UpdateAvatar';

export default function AccountPage(): JSX.Element {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} flexDirection={'column'} alignItems={'center'} justifyContent={'start'}>
        <UpdateAccountForm />
        <UpdatePasswordForm />
        <UpdateAvatar />
      </Flex>
    </Stack>
  );
}
