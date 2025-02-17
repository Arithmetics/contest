import { Container, Flex, SimpleGrid, Image, useBreakpointValue } from '@chakra-ui/react';
import SignupForm from '../../components/auth/SignupForm';

export default function SignUpPage(): JSX.Element {
  const show = useBreakpointValue({ base: false, md: true });
  return (
    <Container
      as={SimpleGrid}
      maxW={'7xl'}
      columns={{ base: 1, md: 2 }}
      spacing={{ base: 0 }}
      py={{ base: 10, sm: 20, lg: 20 }}
    >
      {show && (
        <Flex flex={1}>
          <Image
            maxHeight={'600px'}
            alt={'Signup Image'}
            objectFit={'cover'}
            src={'/images/login_graphic.png'}
          />
        </Flex>
      )}

      <SignupForm />
    </Container>
  );
}
