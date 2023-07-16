import { Flex, Stack } from '@chakra-ui/react';

import { useUser } from '../components/User';
import { useRouter } from 'next/router';

import NBAOverUnderForm from '../components/admin/NBAOverUnderForm';

export default function Admin(): JSX.Element {
  const user = useUser();
  const router = useRouter();

  if (!user?.isAdmin && typeof window !== 'undefined') {
    router.push('/');
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} flexDirection={'column'} alignItems={'center'} justifyContent={'start'}>
        <NBAOverUnderForm />
      </Flex>
    </Stack>
  );
}
