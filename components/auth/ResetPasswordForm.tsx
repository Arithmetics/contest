import {
  Button,
  Heading,
  Stack,
  FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';

import { useResetMutation, PasswordResetRedemptionErrorCode } from '../../generated/graphql-types';
import { Routes } from '../../constants';

import PasswordInput from './PasswordInput';
import ForgotPasswordForm from './ForgotPasswordForm';

function generatePasswordResetErrorText(code?: PasswordResetRedemptionErrorCode): string {
  if (code === PasswordResetRedemptionErrorCode.TokenExpired) {
    return 'Token is expired. Please request a new email and click the link inside.';
  }
  if (code === PasswordResetRedemptionErrorCode.TokenRedeemed) {
    return 'Token already used. Please request a new email and click the link inside.';
  }
  if (code === PasswordResetRedemptionErrorCode.Failure) {
    return 'Password reset failure. Please try again';
  }
  return 'Password reset failure. Please try again';
}

const schema = yup.object().shape({
  email: yup.string().email().required('Enter your email'),
  password: yup.string().min(8, 'Must be at least 8 characters').required('Password is required'),
});

type ResetPasswordInputs = {
  email: string;
  password: string;
};

export default function ResetPasswordForm(): JSX.Element {
  const router = useRouter();
  const toast = useToast();
  const { token } = router.query;

  const { register, handleSubmit, errors, reset } = useForm<ResetPasswordInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [resetPassword, { loading }] = useResetMutation();

  const submitResetPassword = async (data: ResetPasswordInputs): Promise<void> => {
    const res = await resetPassword({
      variables: { email: data.email, password: data.password, token: (token as string) || '' },
    });
    if (res.data?.redeemUserPasswordResetToken === null) {
      toast({
        title: 'Password reset',
        description: 'Go ahead and login with your new password',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      reset();
      router.push(`/${Routes.LOGIN}`);
    } else {
      const errorText = generatePasswordResetErrorText(
        res.data?.redeemUserPasswordResetToken?.code
      );

      toast({
        title: 'Error',
        description: errorText,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      reset();
    }
  };

  if (!token) {
    return <ForgotPasswordForm />;
  }

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
        Enter new password
      </Heading>
      <FormControl
        id="email"
        isRequired
        isInvalid={!!errors?.email?.message}
        errortext={errors?.email?.message}
      >
        <FormLabel color={'gray.500'}>Email address</FormLabel>
        <Input
          placeholder="your-email@example.com"
          _placeholder={{ color: 'gray.500' }}
          ref={register}
          name="email"
          type="email"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
          disabled={loading}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>
      <PasswordInput
        register={register}
        isInvalid={!!errors?.password?.message}
        errorText={errors?.password?.message}
        disabled={loading}
      />
      <Stack spacing={6}>
        <Button
          variant="red-gradient"
          onClick={handleSubmit(submitResetPassword)}
          isLoading={loading}
          disabled={loading}
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}
