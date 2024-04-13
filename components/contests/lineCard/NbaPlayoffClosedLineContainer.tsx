import { Box, Tooltip } from '@chakra-ui/react';

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
  return (
    <Tooltip label={!userIsLoggedIn && 'Log in to bet'}>
      <Box
        // maxW="440px"
        // width="full"
        bg={'gray.600'}
        border={userHasBet ? '1px' : ''}
        borderColor={userHasBet ? 'teal.500' : ''}
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
