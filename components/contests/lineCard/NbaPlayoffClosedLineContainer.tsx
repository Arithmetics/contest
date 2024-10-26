import { Box, Tooltip, useBreakpointValue } from '@chakra-ui/react';

type NbaPlayoffClosedLineContainerProps = {
  userHasBet: boolean;
  userIsLoggedIn: boolean;
  children: React.ReactNode;
};

export function NbaPlayoffClosedLineContainer({
  userHasBet,
  userIsLoggedIn,
  children,
}: NbaPlayoffClosedLineContainerProps): JSX.Element {
  const maxW = useBreakpointValue({ base: '100%', md: '200px' });
  const width = useBreakpointValue({ base: '80%', md: 'auto' });

  return (
    <Tooltip label={!userIsLoggedIn && 'Log in to bet'}>
      <Box
        maxW={maxW}
        width={width}
        bg={'gray.600'}
        border={userHasBet ? '1px' : ''}
        borderColor={userHasBet ? 'btbets.500' : ''}
        boxShadow={userHasBet ? 'dark-lg' : 'lg'}
        rounded={'md'}
        position={'relative'}
        padding={3}
      >
        {children}
      </Box>
    </Tooltip>
  );
}
