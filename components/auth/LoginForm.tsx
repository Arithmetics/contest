import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';

export default function Login(): JSX.Element {
  return (
    <Stack
      spacing={4}
      w={'full'}
      maxW={'md'}
      bg={'gray.50'}
      rounded={'xl'}
      p={{ base: 4, sm: 6, md: 8 }}
    >
      <Heading color={'gray.800'} lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
        Sign in to your account
      </Heading>
      <FormControl id="email">
        <FormLabel color={'gray.500'}>Email address</FormLabel>
        <Input type="email" bg={'gray.100'} border={0} color={'gray.500'} />
      </FormControl>
      <FormControl id="password">
        <FormLabel color={'gray.500'}>Password</FormLabel>
        <Input type="password" bg={'gray.100'} border={0} color={'gray.500'} />
      </FormControl>
      <Stack spacing={6}>
        <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
          <Checkbox color={'gray.500'} border={0.5} borderColor="gray.300">
            {' '}
            Remember me
          </Checkbox>
          <Link color={'blue.500'}>Forgot password?</Link>
        </Stack>
        <Button variant="red-gradient">
          {/* mt={8} w={'full'} */}
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
}
