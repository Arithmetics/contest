import { Flex, Image, Stack } from '@chakra-ui/react';
import LoginForm from '../../components/auth/LoginForm';

export default function LoginPage(): JSX.Element {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <LoginForm />
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/01/AP-APTOPIX-Buccaneers-Packers-Football.jpg?w=1000&h=600&crop=1'
          }
        />
      </Flex>
    </Stack>
  );
}
