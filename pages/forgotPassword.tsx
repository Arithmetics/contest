import { Flex } from '@chakra-ui/react';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage(): JSX.Element {
  return (
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <ForgotPasswordForm />
    </Flex>
  );
}
