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
            alt={'Signup Image'}
            objectFit={'cover'}
            src={'https://cdn131.picsart.com/325450196018211.png?type=webp&to=min&r=640'}
          />
        </Flex>
      )}

      <SignupForm />
    </Container>
  );
}
