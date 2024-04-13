import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Registration } from '../../../generated/graphql-types';
import PayToast from '../PayToast';

export function useHavePaidToast(registration?: Registration): void {
  const toast = useToast();

  useEffect(() => {
    if (registration && !registration.hasPaid) {
      toast({
        title: 'Have you paid yet?',
        description: <PayToast />,
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registration?.id]);
}
