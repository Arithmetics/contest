import { Box, Stat, StatLabel, StatNumber, Avatar, HStack, Spinner } from '@chakra-ui/react';
import { BsLightning } from 'react-icons/bs';
import { RiCoinLine } from 'react-icons/ri';
import { AiOutlineOrderedList } from 'react-icons/ai';
import {
  Contest,
  User,
  useLeaderboardQuery,
  useUsersContestBetsQuery,
} from '../../generated/graphql-types';

import { sortLeaderboard } from './LeaderboardTab';

type BetStatusLineProps = {
  contest?: Contest;
  user?: User;
};

export default function BetStatusLine({ contest, user }: BetStatusLineProps): JSX.Element {
  const { data: leaderboardData, loading: leaderboardLoading } = useLeaderboardQuery({
    variables: { contestId: contest?.id || '' },
  });

  const { data: usersBetsData, loading: usersBetsLoading } = useUsersContestBetsQuery({
    variables: { contestId: contest?.id || '', userId: user?.id || '' },
  });

  //  maxSuperBets, superBetPointCount
  const maxBets = contest?.ruleSet?.maxBets || 0;
  const usersBetCount = usersBetsData?.allBets?.length || 0;
  const betsLeft = (maxBets - usersBetCount).toString();

  const sortedLeaderboard = sortLeaderboard(leaderboardData?.allRegistrations || []);
  const position =
    sortedLeaderboard.findIndex((registration) => registration?.user?.id === user?.id) + 1;

  return (
    <Box overflow="hidden" m={6}>
      <HStack alignItems="center" justifyContent="center">
        {usersBetsLoading ? (
          <Spinner />
        ) : (
          <StatusCard
            icon={<RiCoinLine fontSize="1.5rem" />}
            statLabel="Bets Left"
            statNumber={betsLeft}
          />
        )}
        {usersBetsLoading ? (
          <Spinner />
        ) : (
          <StatusCard
            icon={<BsLightning fontSize="1.5rem" />}
            statLabel="Super Bets Left"
            statNumber="5"
          />
        )}
        {leaderboardLoading ? (
          <Spinner />
        ) : (
          <StatusCard
            icon={<AiOutlineOrderedList fontSize="1.5rem" />}
            statLabel="Current Position"
            statNumber={`${position} / ${sortedLeaderboard.length}`}
          />
        )}
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
