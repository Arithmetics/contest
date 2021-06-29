import { Box, Stat, StatLabel, StatNumber, Avatar, HStack } from '@chakra-ui/react';
import { BsLightning } from 'react-icons/bs';
import { RiCoinLine } from 'react-icons/ri';
import { AiOutlineOrderedList } from 'react-icons/ai';

export default function BetStatusLine(): JSX.Element {
  return (
    <Box overflow="hidden" m={6}>
      <HStack alignItems="center" justifyContent="center">
        <StatusCard icon={<RiCoinLine fontSize="1.5rem" />} statLabel="Bets Left" statNumber="3" />
        <StatusCard
          icon={<BsLightning fontSize="1.5rem" />}
          statLabel="Super Bets Left"
          statNumber="5"
        />
        <StatusCard
          icon={<AiOutlineOrderedList fontSize="1.5rem" />}
          statLabel="Current Position"
          statNumber="4 / 34"
        />
      </HStack>
    </Box>
  );
}

type StatusCardProps = {
  icon: JSX.Element;
  statLabel: string;
  statNumber: string;
};

function StatusCard({ icon, statLabel, statNumber }: StatusCardProps): JSX.Element {
  return (
    <HStack maxW={'200px'} width={'full'} bg={'gray.600'} rounded={'md'} p={4} marginX={4}>
      <Stat>
        <StatLabel>{statLabel}</StatLabel>
        <StatNumber>{statNumber}</StatNumber>
      </Stat>
      <Avatar icon={icon} />
    </HStack>
  );
}
