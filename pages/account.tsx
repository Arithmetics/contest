import { Flex, Stack } from '@chakra-ui/react';
import UpdateAccountForm from '../components/auth/UpdateAccountForm';

export default function AccountPage(): JSX.Element {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <UpdateAccountForm />
      </Flex>
    </Stack>
  );
}
