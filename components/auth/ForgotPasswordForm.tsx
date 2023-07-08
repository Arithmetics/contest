import {
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import { Routes } from '../../constants';
import { useRequestResetMutation } from '../../generated/graphql-types';

const schema = yup.object().shape({
  email: yup.string().email().required('Enter your email'),
});

type ForgotPasswordFormInputs = {
  email: string;
};

export default function ForgotPasswordForm(): JSX.Element {
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ForgotPasswordFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [requestReset, { loading }] = useRequestResetMutation();

  const submitForgotPassword = async (data: ForgotPasswordFormInputs): Promise<void> => {
    try {
      const res = await requestReset({ variables: { email: data.email } });
      if (res.data?.sendUserPasswordResetLink) {
        toast({
          title: 'Reset email sent',
          description: 'Check your inbox and click the link in the email.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        reset();
        router.push(`/${Routes.LOGIN}`);
      } else {
        toast({
          title: 'Error',
          description: 'Please refresh and try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        reset();
      }
    } catch (e) {
      toast({
        title: 'Error',
        description: 'Please refresh and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      reset();
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
        Forgot your password?
      </Heading>
      <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
        You&apos;ll get an email with a reset link
      </Text>
      <FormControl id="email" isInvalid={!!errors?.email?.message}>
        <Input
          placeholder="your-email@example.com"
          _placeholder={{ color: 'gray.500' }}
          {...register('email')}
          name="email"
          type="email"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>
      <Stack spacing={6}>
        <Button
          variant="red-gradient"
          onClick={handleSubmit(submitForgotPassword)}
          isDisabled={loading}
          isLoading={loading}
        >
          Request Reset
        </Button>
      </Stack>
    </Stack>
  );
}
