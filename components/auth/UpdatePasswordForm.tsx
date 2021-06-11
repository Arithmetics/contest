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
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import PasswordInput from './PasswordInput';

type UpdateAccountInputs = {
  realName: string;
  userName: string;
  password: string;
};

export default function UpdatePasswordForm(): JSX.Element {
  const router = useRouter();
  const toast = useToast();

  const schema = yup.object().shape({});

  const { register, handleSubmit, errors } = useForm<UpdateAccountInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  // const [signup, { loading: signupLoading }] = useSignUpMutation();

  const submitUpdateAccount = (): void => {
    console.log('x');
  };

  const signupLoading = false;

  // const submitUpdateAccount = async (formData: UpdateAccountInputs): Promise<void> => {
  //   try {
  //     const res = await signup({
  //       variables: {
  //         password: formData.password,
  //         name: formData.realName,
  //         userName: formData.userName,
  //       },
  //     });
  //     if (res.data?.createUser?.id) {
  //       toast({
  //         title: 'Account created',
  //         description: 'Go ahead and log in',
  //         status: 'success',
  //         duration: 5000,
  //         isClosable: true,
  //       });
  //       reset();
  //       router.push('/login');
  //     }
  //   } catch (e) {
  //     toast({
  //       title: 'Error',
  //       description: 'Something went wrong creating your account. Refresh and try again.',
  //       status: 'success',
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   }
  // };

  return (
    <Stack
      bg={'gray.50'}
      rounded={'xl'}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}
      width={'100%'}
      marginTop={8}
    >
      <Stack spacing={4}>
        <Heading
          color={'gray.800'}
          lineHeight={1.1}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        >
          Change Password
        </Heading>
      </Stack>
      <Box as={'form'} mt={10}>
        <Stack spacing={4}>
          <FormControl id="email">
            <PasswordInput
              register={register}
              isInvalid={!!errors?.password?.message}
              errorText={errors?.password?.message}
              disabled={signupLoading}
              isUpdatePassword
            />
          </FormControl>
        </Stack>
        <Button
          variant="red-gradient"
          mt={8}
          w={'full'}
          onClick={handleSubmit(submitUpdateAccount)}
          disabled={!!errors.password || !!errors.realName || !!errors.userName}
          isLoading={signupLoading}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
}
