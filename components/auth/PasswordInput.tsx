import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';

type PasswordInputProps = {
  isUpdatePassword?: boolean;
  isInvalid?: boolean;
  errorText?: string | undefined;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
};

export default function PasswordInput({
  isInvalid,
  errorText,
  register,
  disabled,
  isUpdatePassword,
}: PasswordInputProps): JSX.Element {
  const [show, setShow] = useState(false);
  const handleClick = (): void => setShow(!show);

  return (
    <FormControl id="name" isRequired isInvalid={isInvalid} errortext={errorText}>
      <FormLabel color={'gray.500'}>{isUpdatePassword ? 'New Password' : 'Password'}</FormLabel>
      <InputGroup size="md">
        <Input
          name="password"
          ref={register}
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
          disabled={disabled}
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
