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
  Text,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

const schema = yup.object().shape({
  email: yup.string().email().required('Enter your email'),
});

type ForgotPasswordFormInputs = {
  email: string;
};

export default function ForgotPasswordForm(): JSX.Element {
  const { register, handleSubmit, errors } = useForm<ForgotPasswordFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [requestReset, { data, loading }] = useMutation(REQUEST_RESET_MUTATION);

  const submitForgotPassword = async (data: ForgotPasswordFormInputs): Promise<void> => {
    console.log(data);
    const res = await requestReset({ variables: { email: data.email } });
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
        Forgot your password?
      </Heading>
      <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
        You&apos;ll get an email with a reset link
      </Text>
      <FormControl
        id="email"
        isInvalid={!!errors?.email?.message}
        errortext={errors?.email?.message}
      >
        {/* <FormLabel color={'gray.500'}>Email address</FormLabel> */}
        <Input
          placeholder="your-email@example.com"
          _placeholder={{ color: 'gray.500' }}
          ref={register}
          name="email"
          type="email"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>
      {data?.sendUserPasswordResetLink === null && (
        <p>Password reset email send. Check your inbox</p>
      )}
      {data?.sendUserPasswordResetLink?.message && <p>{data?.sendUserPasswordLink?.message}</p>}
      <Stack spacing={6}>
        <Button
          variant="red-gradient"
          onClick={handleSubmit(submitForgotPassword)}
          disabled={loading}
          isLoading={loading}
        >
          Request Reset
        </Button>
      </Stack>
    </Stack>
  );
}
