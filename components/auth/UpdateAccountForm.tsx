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
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  useUpdateUserMutation,
  useCheckIfUsernameAvailableQuery,
} from '../../generated/graphql-types';
import { useUser } from '../User';

type UpdateAccountInputs = {
  realName: string;
  userName: string;
};

export default function UpdateAccountForm(): JSX.Element {
  const toast = useToast();
  const user = useUser();

  const [userNameLoading, setUserNameLoading] = useState(false);

  const userNameAvailQuery = useCheckIfUsernameAvailableQuery({
    skip: true,
  });

  const testUserName = async (userName?: string): Promise<boolean> => {
    setUserNameLoading(true);
    const res = await userNameAvailQuery.refetch({ userName });
    setUserNameLoading(false);
    const count = res?.data?.usersCount;
    return count === 0 || userName === user?.userName;
  };

  const schema = yup.object().shape({
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateAccountInputs>({
    mode: 'onBlur',
    defaultValues: {
      userName: user?.userName ?? '',
      realName: user?.name ?? '',
    },
    resolver: yupResolver(schema),
  });

  const [updateUser, { loading: updateUserLoading }] = useUpdateUserMutation();

  const submitUpdateAccount = async (formData: UpdateAccountInputs): Promise<void> => {
    if (!user?.id) {
      throw new Error('No user logged in');
    }
    try {
      const res = await updateUser({
        variables: {
          id: user.id,
          name: formData.realName,
          userName: formData.userName,
        },
      });
      if (res.data?.updateUser?.id) {
        toast({
          title: 'Account information updated',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: 'Error',
        description: 'Something went wrong updating your account. Refresh and try again.',
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
      padding={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}
      width={'100%'}
      marginTop={8}
    >
      <Stack spacing={4}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
          Basic Account Settings
        </Heading>
      </Stack>
      <Box as={'form'} mt={10}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel color={'gray.500'}>Email</FormLabel>
            <Input
              name="email"
              bg={'white'}
              borderColor={'gray.300'}
              color={'gray.900'}
              type="email"
              _placeholder={{ color: 'gray.500' }}
              placeholder={user?.email ?? ''}
              disabled
            />
          </FormControl>

          <FormControl id="realName" isRequired isInvalid={!!errors?.realName?.message}>
            <FormLabel color={'gray.500'}>Real Name</FormLabel>
            <Input
              {...register('realName')}
              name="realName"
              bg={'white'}
              borderColor={'gray.300'}
              color={'gray.900'}
              _placeholder={{ color: 'gray.500' }}
              placeholder="I need this for payment"
              disabled={updateUserLoading}
            />
            <FormErrorMessage>{errors?.realName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="userName" isRequired isInvalid={!!errors?.userName?.message}>
            <FormLabel color={'gray.500'}>Display Name</FormLabel>
            <Input
              {...register('userName')}
              name="userName"
              bg={'white'}
              borderColor={'gray.300'}
              color={'gray.900'}
              _placeholder={{ color: 'gray.500' }}
              placeholder="Everyone else will see this"
              disabled={updateUserLoading}
            />
            {userNameLoading && (
              <Spinner position="absolute" right={5} top={10} color="blue.500" zIndex={300} />
            )}
            <FormErrorMessage>
              {errors?.userName?.message || userNameAvailQuery.error?.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Button
          colorScheme="btbets"
          mt={8}
          w={'full'}
          onClick={handleSubmit(submitUpdateAccount)}
          isDisabled={!!errors.realName || !!errors.userName}
          isLoading={updateUserLoading}
          size="lg"
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
}
