'use client';

import { Flex, Stack } from '@chakra-ui/react';
import UpdateAccountForm from '../components/auth/UpdateAccountForm';
import UpdatePasswordForm from '../components/auth/UpdatePasswordForm';
import UpdateAvatar from '../components/auth/UpdateAvatar';
import { useUser } from '../components/User';
import { useRouter } from 'next/router';

export default function AccountPage(): JSX.Element {
  const user = useUser();
  const router = useRouter();

  if (!user && typeof window !== 'undefined') {
    router.push('/login');
  }

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
