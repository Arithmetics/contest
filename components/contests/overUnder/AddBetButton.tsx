import { AddIcon } from '@chakra-ui/icons';
import { Button, Box, useBreakpointValue } from '@chakra-ui/react';

type AddBetButtonProps = {
  onClick: () => void;
  isDisabled: boolean;
  isSuper: boolean;
};

export const AddBetButton = ({ onClick, isDisabled, isSuper }: AddBetButtonProps): JSX.Element => {
  const height = useBreakpointValue({
    base: '120px',
    md: '140px',
    lg: '110px',
  });

  const width = useBreakpointValue({
    base: '60px',
    sm: '90px',
    lg: '180px',
  });

  const fontSize = useBreakpointValue({
    base: '12px',
    lg: '1rem',
  });

  return (
    <Button
      onClick={onClick}
      isDisabled={isDisabled}
      width={width}
      height={height}
      borderWidth="4px"
      borderColor="gray.600"
      variant="outline"
      color="gray.600"
      aria-label="Make Bet"
      rightIcon={<AddIcon color={'gray.600'} />}
      fontSize={fontSize}
    >
      {isSuper ? 'SUPER' : 'BET'}
    </Button>
  );
};

export const ClosedBet = ({ isSuper }: AddBetButtonProps): JSX.Element => {
  const height = useBreakpointValue({
    base: '140px',
    lg: '110px',
  });

  const width = useBreakpointValue({
    base: '60px',
    sm: '90px',
    lg: '180px',
  });

  const fontSize = useBreakpointValue({
    base: '12px',
    lg: '1rem',
  });

  return (
    <Box
      width={width}
      height={height}
      borderWidth="4px"
      borderColor="gray.600"
      color="gray.600"
      aria-label="Make Bet"
      fontSize={fontSize}
    >
      {isSuper ? 'SUPER' : 'BET'}
    </Box>
  );
};
