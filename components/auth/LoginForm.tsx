import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Link,
  Stack,
  useToast,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import {
  useSignInMutation,
  UserAuthenticationWithPasswordSuccess,
  UserAuthenticationWithPasswordFailure,
} from '../../generated/graphql-types';

import { CURRENT_USER_QUERY } from '../queries';

const schema = yup.object().shape({
  email: yup.string().required('Enter your email'),
  password: yup.string().required('Enter your password'),
});

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function ForgotPasswordForm(): JSX.Element {
  const router = useRouter();
  const toast = useToast();

  const { register, handleSubmit, errors, reset } = useForm<LoginFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [signin, { data, loading }] = useSignInMutation({
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const submitLogin = async (data: LoginFormInputs): Promise<void> => {
    try {
      const res = await signin({ variables: { email: data.email, password: data.password } });

      if ((res.data?.authenticateUserWithPassword as UserAuthenticationWithPasswordSuccess)?.item) {
        toast({
          title: 'Signed in',
          description: 'Welcome back',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        reset();
        router.push('/');
      }
    } catch (e) {
      toast({
        title: 'Error',
        description: 'There was an error on the backend. Email Brock',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

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
      <FormControl
        id="email"
        isInvalid={!!errors?.email?.message}
        errortext={errors?.email?.message}
      >
        <FormLabel color={'gray.500'}>Email address</FormLabel>
        <Input
          ref={register}
          name="email"
          type="email"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl
        id="password"
        isInvalid={!!errors?.password?.message}
        errortext={errors?.password?.message}
      >
        <FormLabel color={'gray.500'}>Password</FormLabel>
        <Input
          type="password"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
          ref={register}
          name="password"
        />
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
      <Stack spacing={6}>
        <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
          <Checkbox color={'gray.500'} border={0.5} borderColor="gray.300">
            {' '}
            Remember me
          </Checkbox>
          <Link color={'blue.500'}>Forgot password?</Link>
        </Stack>
        <FormLabel color={'red.500'}>
          {(data?.authenticateUserWithPassword as UserAuthenticationWithPasswordFailure)?.message}
        </FormLabel>
        <Button variant="red-gradient" onClick={handleSubmit(submitLogin)} isLoading={loading}>
          {/* mt={8} w={'full'} */}
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
}
