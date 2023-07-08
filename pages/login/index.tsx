import { Flex, Image, Stack } from '@chakra-ui/react';
import LoginForm from '../../components/auth/LoginForm';

export default function LoginPage(): JSX.Element {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <LoginForm />
      </Flex>
      <Flex flex={1} align={'center'}>
        <Image
          maxHeight={'700px'}
          alt={'Login Image'}
          objectFit={'cover'}
          src={'/images/blur_edges.png'}
        />
      </Flex>
    </Stack>
  );
}
