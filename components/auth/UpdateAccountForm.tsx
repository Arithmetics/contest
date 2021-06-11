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

import { useCheckIfUsernameAvailableQuery } from '../../generated/graphql-types';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type UpdateAccountInputs = {
  realName: string;
  userName: string;
  password: string;
};

export default function UpdateAccountForm(): JSX.Element {
  const router = useRouter();
  const toast = useToast();

  const [userNameLoading, setUserNameLoading] = useState(false);

  const userNameAvailQuery = useCheckIfUsernameAvailableQuery({
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
      padding={{ base: 4, sm: 6, md: 8 }}
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
          Basic Account Settings
        </Heading>
      </Stack>
      <Box as={'form'} mt={10}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel color={'gray.500'}>Email</FormLabel>
            <Input
              name="email"
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              type="email"
              _placeholder={{ color: 'gray.500' }}
              placeholder="theUsersEmail@www.com"
              disabled
            />
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
