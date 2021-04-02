import { Box } from '@chakra-ui/react';
// import Nav from './nav/Nav';
import NewNav from './nav/NewNav';

interface PageProps {
  children?: React.ReactNode;
}

export default function Page({ children }: PageProps): JSX.Element {
  return (
    <div>
      <NewNav />
      <Box>{children}</Box>
    </div>
  );
}
