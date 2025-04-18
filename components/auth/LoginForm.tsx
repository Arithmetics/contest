import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
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
import ChakraLink from '../ChakraLink';
import { Routes } from '../../constants';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [signin, { data, loading }] = useSignInMutation({
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    update: (cache) => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'contests',
      });
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'allBets',
      });
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'bets',
      });
      return cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'contest',
      });
    },
  });

  const submitLogin = async (data: LoginFormInputs): Promise<void> => {
    try {
      const res = await signin({
        variables: { email: data.email.toLowerCase(), password: data.password },
      });

      if ((res.data?.authenticateUserWithPassword as UserAuthenticationWithPasswordSuccess)?.item) {
        toast({
          title: 'Signed in',
          description: 'Welcome back',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        router.push('/');
      }
    } catch (e) {
      toast({
        title: 'Error',
        description:
          'There was an error on the backend. Try again and then Email Brock if it persists',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack spacing={4} w={'full'} maxW={'md'} rounded={'xl'} p={{ base: 4, sm: 6, md: 8 }}>
      <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
        Sign in to your account
      </Heading>
      <FormControl id="email" isInvalid={!!errors?.email?.message}>
        <FormLabel color={'gray.500'}>Email address</FormLabel>
        <Input
          {...register('email')}
          name="email"
          type="email"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl id="password" isInvalid={!!errors?.password?.message}>
        <FormLabel color={'gray.500'}>Password</FormLabel>
        <Input
          type="password"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
          {...register('password')}
          name="password"
          onKeyPress={(e) => (e.key === 'Enter' ? handleSubmit(submitLogin)() : undefined)}
        />
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
      <Stack spacing={6}>
        <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
          <Checkbox color={'gray.500'} border={0.5} borderColor="gray.300">
            {' '}
            Remember me
          </Checkbox>
          <ChakraLink href={`/${Routes.FORGOT_PASSWORD}`} title="Forgot Password?" />
        </Stack>
        <FormLabel color={'btbets.500'}>
          {(data?.authenticateUserWithPassword as UserAuthenticationWithPasswordFailure)?.message}
        </FormLabel>
        <Button
          colorScheme="btbets"
          color="white"
          onClick={handleSubmit(submitLogin)}
          isLoading={loading}
        >
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
}
