import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  realName: yup.string().required('Your real name is required'),
  userName: yup
    .string()
    .min(2, 'Must be at least 2 characters')
    .required('Display name is required'),
  password: yup.string().min(8, 'Must be at least 8 characters').required('Password is required'),
});

type LoginFormInputs = {
  email: string;
  realName: string;
  userName: string;
  password: string;
};

export default function SignupForm(): JSX.Element {
  const { register, handleSubmit, errors } = useForm<LoginFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const submitCreateAcccount = (): void => {
    console.log('submit');
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
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
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
            />
            <FormErrorMessage>{errors?.userName?.message}</FormErrorMessage>
          </FormControl>

          <PasswordInput
            register={register}
            isInvalid={!!errors?.password?.message}
            errorText={errors?.password?.message}
          />
        </Stack>
        <Button
          fontFamily={'heading'}
          mt={8}
          w={'full'}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={'white'}
          _hover={{
            bgGradient: 'linear(to-r, red.400,pink.400)',
            boxShadow: 'xl',
          }}
          onClick={handleSubmit(submitCreateAcccount)}
          disabled={!!errors.email || !!errors.password || !!errors.realName || !!errors.userName}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
}

type PasswordInputProps = {
  isInvalid: boolean;
  errorText: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
};

function PasswordInput({ isInvalid, errorText, register }: PasswordInputProps): JSX.Element {
  const [show, setShow] = useState(false);
  const handleClick = (): void => setShow(!show);

  return (
    <FormControl id="name" isRequired isInvalid={isInvalid} errortext={errorText}>
      <FormLabel color={'gray.500'}>Password</FormLabel>
      <InputGroup size="md">
        <Input
          name="password"
          ref={register}
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            bg={'gray.500'}
            onClick={handleClick}
            _hover={{ bg: 'gray.300', color: 'gray.500' }}
          >
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  );
}
