import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PasswordInput from './PasswordInput';

const CHECK_IF_EMAIL_AVAILABLE_QUERY = gql`
  query CHECK_IF_EMAIL_AVAILABLE_QUERY($email: String!) {
    _allUsersMeta(where: { email: $email }) {
      count
    }
  }
`;

const CHECK_IF_USERNAME_AVAILABLE_QUERY = gql`
  query CHECK_IF_USERNAME_AVAILABLE_QUERY($userName: String!) {
    _allUsersMeta(where: { userName: $userName }) {
      count
    }
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $userName: String!
    $password: String!
  ) {
    createUser(data: { email: $email, password: $password, name: $name, userName: $userName }) {
      id
      email
      name
      userName
    }
  }
`;

type SignupFormInputs = {
  email: string;
  realName: string;
  userName: string;
  password: string;
};

export default function SignupForm(): JSX.Element {
  const router = useRouter();
  const toast = useToast();

  const [emailLoading, setEmailLoading] = useState(false);
  const [userNameLoading, setUserNameLoading] = useState(false);

  const emailAvailQuery = useQuery(CHECK_IF_EMAIL_AVAILABLE_QUERY, {
    skip: true,
  });

  const testEmail = async (email?: string): Promise<boolean> => {
    setEmailLoading(true);
    const res = await emailAvailQuery.refetch({ email });
    setEmailLoading(false);
    console.log('refetched');
    const count = res?.data?._allUsersMeta?.count;
    return count === 0;
  };

  const userNameAvailQuery = useQuery(CHECK_IF_USERNAME_AVAILABLE_QUERY, {
    skip: true,
  });

  const testUserName = async (userName?: string): Promise<boolean> => {
    setUserNameLoading(true);
    const res = await userNameAvailQuery.refetch({ userName });
    setUserNameLoading(false);
    const count = res?.data?._allUsersMeta?.count;
    return count === 0;
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required('Email is required')
      .test('Email available', 'Email is taken', async (email) => await testEmail(email)),
    realName: yup.string().required('Your real name is required'),
    userName: yup
      .string()
      .min(2, 'Must be at least 2 characters')
      .required('Display name is required')
      .test(
        'UserName available',
        'Display name is taken',
        async (userName) => await testUserName(userName)
      ),
    password: yup.string().min(8, 'Must be at least 8 characters').required('Password is required'),
  });

  const { register, handleSubmit, errors, reset } = useForm<SignupFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [signup, { loading: signupLoading }] = useMutation(SIGNUP_MUTATION);

  const submitCreateAccount = async (formData: SignupFormInputs): Promise<void> => {
    const res = await signup({
      variables: {
        email: formData.email,
        password: formData.password,
        name: formData.realName,
        userName: formData.userName,
      },
    });
    if (res.data.createUser.id) {
      toast({
        title: 'Account created',
        description: 'Go ahead and log in',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      reset();
      router.push('/login');
    }
  };

  return (
    <Stack
      bg={'gray.50'}
      rounded={'xl'}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}
    >
      <Stack spacing={4}>
        <Heading
          color={'gray.800'}
          lineHeight={1.1}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        >
          Create an account
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
          You can use this account for any of the competitions I run
        </Text>
      </Stack>
      <Box as={'form'} mt={10}>
        <Stack spacing={4}>
          <FormControl
            id="email"
            isRequired
            isInvalid={!!errors?.email?.message}
            errortext={errors?.email?.message}
          >
            <FormLabel color={'gray.500'}>Email</FormLabel>
            <Input
              ref={register}
              name="email"
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              type="email"
              _placeholder={{ color: 'gray.500' }}
              placeholder="For login and contact"
              disabled={signupLoading || emailLoading}
            />
            {emailLoading && (
              <Spinner position="absolute" right={5} top={10} color="red.500" zIndex={300} />
            )}
            <FormErrorMessage>
              {errors?.email?.message || emailAvailQuery.error?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            id="realName"
            isRequired
            isInvalid={!!errors?.realName?.message}
            errortext={errors?.realName?.message}
          >
            <FormLabel color={'gray.500'}>Real Name</FormLabel>
            <Input
              ref={register}
              name="realName"
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{ color: 'gray.500' }}
              placeholder="I need this for payment"
              disabled={signupLoading}
            />
            <FormErrorMessage>{errors?.realName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl
            id="userName"
            isRequired
            isInvalid={!!errors?.userName?.message}
            errortext={errors?.userName?.message}
          >
            <FormLabel color={'gray.500'}>Display Name</FormLabel>
            <Input
              ref={register}
              name="userName"
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{ color: 'gray.500' }}
              placeholder="Everyone else will see this"
              disabled={signupLoading}
            />
            {userNameLoading && (
              <Spinner position="absolute" right={5} top={10} color="red.500" zIndex={300} />
            )}
            <FormErrorMessage>
              {errors?.userName?.message || userNameAvailQuery.error?.message}
            </FormErrorMessage>
          </FormControl>

          <PasswordInput
            register={register}
            isInvalid={!!errors?.password?.message}
            errorText={errors?.password?.message}
            disabled={signupLoading}
          />
        </Stack>
        <Button
          fontFamily={'heading'}
          mt={8}
          w={'full'}
          bgGradient="linear(to-r, red.400,red.600)"
          color={'white'}
          _hover={{
            bgGradient: 'linear(to-r, red.400,red.600)',
            boxShadow: 'xl',
          }}
          onClick={handleSubmit(submitCreateAccount)}
          disabled={!!errors.email || !!errors.password || !!errors.realName || !!errors.userName}
          isLoading={signupLoading}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
}
