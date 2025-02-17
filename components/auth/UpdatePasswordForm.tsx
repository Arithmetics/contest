import { Box, Button, FormControl, Heading, Stack, useToast } from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useUpdatePasswordMutation } from '../../generated/graphql-types';
import { useUser } from '../User';

import PasswordInput from './PasswordInput';

type UpdatePasswordInputs = {
  password: string;
};

export default function UpdatePasswordForm(): JSX.Element {
  const toast = useToast();
  const user = useUser();

  const schema = yup.object().shape({
    password: yup.string().min(8, 'Must be at least 8 characters').required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdatePasswordInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [updatePassword, { loading: updatePasswordLoading }] = useUpdatePasswordMutation();

  const submitUpdatePassword = async (formData: UpdatePasswordInputs): Promise<void> => {
    if (!user?.id) {
      throw new Error('No user logged in');
    }
    try {
      const res = await updatePassword({
        variables: {
          id: user?.id,
          password: formData.password,
        },
      });
      if (res.data?.updateUser?.id) {
        toast({
          title: 'Password updated',
          description: 'You will use your new password next time you log in',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        reset();
      }
    } catch (e) {
      console.error(e);
      toast({
        title: 'Error',
        description: 'Something went wrong updating your password. Refresh and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      rounded={'xl'}
      boxShadow={'lg'}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}
      width={'100%'}
      marginTop={8}
    >
      <Stack spacing={4}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
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
              isDisabled={updatePasswordLoading}
              isUpdatePassword
            />
          </FormControl>
        </Stack>
        <Button
          colorScheme="btbets"
          mt={8}
          w={'full'}
          onClick={handleSubmit(submitUpdatePassword)}
          isDisabled={!!errors.password}
          isLoading={updatePasswordLoading}
          size="lg"
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
}
