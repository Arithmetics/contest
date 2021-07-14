import { Box, Stat, StatLabel, StatNumber, Avatar, HStack, Spinner } from '@chakra-ui/react';
import { BsLightning } from 'react-icons/bs';
import { RiCoinLine } from 'react-icons/ri';
import { AiOutlineOrderedList } from 'react-icons/ai';
import {
  Bet,
  Contest,
  User,
  useLeaderboardQuery,
  useUsersContestBetsQuery,
  RuleSet,
} from '../../generated/graphql-types';

import { sortLeaderboard } from './LeaderboardTab';

export function betsRemaining(userBets?: Bet[] | null, ruleSet?: RuleSet | null): number {
  const maxSuperBets = ruleSet?.maxSuperBets || 0;
  const usersSuperBetCount = userBets?.length || 0;
  return maxSuperBets - usersSuperBetCount;
}

export function superBetsRemaining(userBets?: Bet[] | null, ruleSet?: RuleSet | null): number {
  const maxSuperBets = ruleSet?.maxSuperBets || 0;
  const usersSuperBetCount = userBets?.filter((b) => b.isSuper).length || 0;
  return maxSuperBets - usersSuperBetCount;
}

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

  const betsLeft = betsRemaining(usersBetsData?.allBets || [], contest?.ruleSet).toString();
  const superBetsLeft = superBetsRemaining(
    usersBetsData?.allBets || [],
    contest?.ruleSet
  ).toString();

  const sortedLeaderboard = sortLeaderboard(leaderboardData?.allRegistrations || []);
  const position =
    sortedLeaderboard.findIndex((registration) => registration?.user?.id === user?.id) + 1;

  return (
    <Box overflow="hidden" m={6}>
      <HStack alignItems="center" justifyContent="center">
        {usersBetsLoading ? (
          <StatusCard icon={<Spinner />} statLabel="Bets Left" statNumber="--" />
        ) : (
          <StatusCard
            icon={<RiCoinLine fontSize="1.5rem" />}
            statLabel="Bets Left"
            statNumber={betsLeft}
          />
        )}
        {usersBetsLoading ? (
          <StatusCard icon={<Spinner />} statLabel="Super Bets Left" statNumber="--" />
        ) : (
          <StatusCard
            icon={<BsLightning fontSize="1.5rem" />}
            statLabel="Super Bets Left"
            statNumber={superBetsLeft}
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
