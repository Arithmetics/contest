import { Flex } from '@chakra-ui/react';
import ResetPasswordForm from '../components/auth/ResetPasswordForm';

export default function ResetPasswordPage(): JSX.Element {
  return (
    <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <ResetPasswordForm />
    </Flex>
  );
}
