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
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CURRENT_USER_QUERY } from '../User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
          userName
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

const schema = yup.object().shape({
  email: yup.string().required('Enter your email'),
  password: yup.string().required('Enter your password'),
});

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login(): JSX.Element {
  const { register, handleSubmit, errors } = useForm<LoginFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  console.log(loading);

  const submitLogin = async (data: LoginFormInputs): Promise<void> => {
    console.log(data);

    const res = await signin({ variables: { email: data.email, password: data.password } });

    console.log(res);
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
        <FormLabel color={'red.500'}>{data?.authenticateUserWithPassword?.message}</FormLabel>
        <Button variant="red-gradient" onClick={handleSubmit(submitLogin)}>
          {/* mt={8} w={'full'} */}
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
}
