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
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  useCheckIfEmailAvailableQuery,
  useCheckIfUsernameAvailableQuery,
  useSignUpMutation,
} from '../../generated/graphql-types';
import { Routes } from '../../constants';
import PasswordInput from './PasswordInput';

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

  const emailAvailQuery = useCheckIfEmailAvailableQuery({
    skip: true,
  });

  const testEmail = async (email?: string): Promise<boolean> => {
    setEmailLoading(true);
    const res = await emailAvailQuery.refetch({ email });
    setEmailLoading(false);
    const count = res?.data?.usersCount;
    return count === 0;
  };

  const userNameAvailQuery = useCheckIfUsernameAvailableQuery({
    skip: true,
  });

  const testUserName = async (userName?: string): Promise<boolean> => {
    setUserNameLoading(true);
    const res = await userNameAvailQuery.refetch({ userName });
    setUserNameLoading(false);
    const count = res?.data?.usersCount;
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [signup, { loading: signupLoading }] = useSignUpMutation();

  const submitCreateAccount = async (formData: SignupFormInputs): Promise<void> => {
    try {
      const res = await signup({
        variables: {
          email: formData.email,
          password: formData.password,
          name: formData.realName,
          userName: formData.userName,
        },
      });
      if (res.data?.createUser?.id) {
        toast({
          title: 'Account created',
          description: 'Go ahead and log in',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        reset();
        router.push(`/${Routes.LOGIN}`);
      }
    } catch (e) {
      toast({
        title: 'Error',
        description: 'Something went wrong creating your account. Refresh and try again.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack rounded={'xl'} p={{ base: 4, sm: 6, md: 8 }} spacing={{ base: 8 }} maxW={{ lg: 'lg' }}>
      <Stack spacing={4}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
          Create an account
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
          You can use this account for any of the competitions I run
        </Text>
      </Stack>
      <Box as={'form'} mt={10}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired isInvalid={!!errors?.email?.message}>
            <FormLabel color={'gray.500'}>Email</FormLabel>
            <Input
              {...register('email')}
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

          <FormControl id="realName" isRequired isInvalid={!!errors?.realName?.message}>
            <FormLabel color={'gray.500'}>Real Name</FormLabel>
            <Input
              {...register('realName')}
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

          <FormControl id="userName" isRequired isInvalid={!!errors?.userName?.message}>
            <FormLabel color={'gray.500'}>Display Name</FormLabel>
            <Input
              {...register('userName')}
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
            isDisabled={signupLoading}
          />
        </Stack>
        <Button
          colorScheme="btbets"
          color="white"
          mt={8}
          w={'full'}
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
