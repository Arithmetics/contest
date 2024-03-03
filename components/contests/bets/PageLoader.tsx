import { Center, Spinner } from '@chakra-ui/react';

export default function PageLoader(): JSX.Element {
  return (
    <Center marginTop={'30vh'}>
      <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
    </Center>
  );
}
