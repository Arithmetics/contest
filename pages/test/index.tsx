import { Flex, Stack } from '@chakra-ui/react';
import { useCurrentUserQuery } from '../../generated/graphql-types';

export default function TestPage(): JSX.Element {
  const { data } = useCurrentUserQuery({
    fetchPolicy: 'network-only',
  });

  console.log({ 'network user data': data });

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        working
      </Flex>
    </Stack>
  );
}
