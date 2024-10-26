import { Center } from '@chakra-ui/react';
import Spinner from '../BTBetsLoading';

export default function PageLoader(): JSX.Element {
  return (
    <Center marginTop={'30vh'}>
      <Spinner />
    </Center>
  );
}
