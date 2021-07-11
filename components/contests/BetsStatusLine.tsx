import { Box, Stat, StatLabel, StatNumber, Avatar, HStack } from '@chakra-ui/react';
import { BsLightning } from 'react-icons/bs';
import { RiCoinLine } from 'react-icons/ri';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { Contest, User } from '../../generated/graphql-types';

type BetStatusLineProps = {
  contest?: Contest;
  user?: User;
};

export default function BetStatusLine({ contest, user }: BetStatusLineProps): JSX.Element {
  console.log(contest, user);
  const betsLeft = (contest?.ruleSet?.maxBets || 0) - (user?.betsCount || 0);
  return (
    <Box overflow="hidden" m={6}>
      <HStack alignItems="center" justifyContent="center">
        <StatusCard
          icon={<RiCoinLine fontSize="1.5rem" />}
          statLabel="Bets Left"
          statNumber={betsLeft.toString()}
        />
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
