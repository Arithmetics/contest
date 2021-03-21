import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function SignupForm(): JSX.Element {
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
          <FormControl id="email" isRequired>
            <FormLabel color={'gray.500'}>Email</FormLabel>
            <Input
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              type="email"
              _placeholder={{ color: 'gray.500' }}
              placeholder="For login and contact"
            />
          </FormControl>

          <FormControl id="name" isRequired>
            <FormLabel color={'gray.500'}>Real Name</FormLabel>
            <Input
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{ color: 'gray.500' }}
              placeholder="I need this for payment"
            />
          </FormControl>

          <FormControl id="username" isRequired>
            <FormLabel color={'gray.500'}>Display Name</FormLabel>
            <Input
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{ color: 'gray.500' }}
              placeholder="Everyone else will see this"
            />
          </FormControl>

          <PasswordInput />
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
          onClick={submitCreateAcccount}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
}

function PasswordInput(): JSX.Element {
  const [show, setShow] = useState(false);
  const handleClick = (): void => setShow(!show);

  return (
    <FormControl id="name" isRequired>
      <FormLabel color={'gray.500'}>Password</FormLabel>
      <InputGroup size="md">
        <Input
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
    </FormControl>
  );
}
