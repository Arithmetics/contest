import { Box, Stat, StatLabel, StatNumber, Avatar, HStack, Spinner } from '@chakra-ui/react';
import { BsLightning } from 'react-icons/bs';
import { RiCoinLine } from 'react-icons/ri';
import { AiOutlineOrderedList } from 'react-icons/ai';
import {
  Bet,
  Contest,
  User,
  RuleSet,
  useLeaderboardQuery,
  useContestBetsQuery,
} from '../../generated/graphql-types';

import { sortLeaderboard } from './leaderboard/LeaderboardTab';

export function betsRemaining(userBets?: Bet[] | null, ruleSet?: RuleSet | null): number {
  const maxBets = ruleSet?.maxBets || 0;
  const usersSuperBetCount = userBets?.length || 0;
  return maxBets - usersSuperBetCount;
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

  const { data: contestBetsData, loading: contestBetsLoading } = useContestBetsQuery({
    variables: { contestId: contest?.id || '' },
  });

  const usersBets = contestBetsData?.bets?.filter((bet) => bet?.user?.id === user?.id);

  const betsLeft = betsRemaining(usersBets || [], contest?.ruleSet).toString();
  const superBetsLeft = superBetsRemaining(usersBets || [], contest?.ruleSet).toString();

  const sortedLeaderboard = sortLeaderboard(leaderboardData?.registrations || []);
  const position =
    sortedLeaderboard.findIndex((registration) => registration?.user?.id === user?.id) + 1;

  return (
    <Box overflow="hidden" m={6}>
      <HStack justifyContent="center" flexWrap={'wrap'}>
        {/* bug fix span */}
        <span></span>
        {contestBetsLoading ? (
          <StatusCard icon={<Spinner />} statLabel="Bets Left" statNumber="--" />
        ) : (
          <StatusCard
            icon={<RiCoinLine fontSize="1.5rem" />}
            statLabel="Bets Left"
            statNumber={betsLeft}
          />
        )}
        {contestBetsLoading ? (
          <StatusCard icon={<Spinner />} statLabel="Super Bets Left" statNumber="--" />
        ) : (
          <StatusCard
            icon={<BsLightning fontSize="1.5rem" />}
            statLabel="Super Bets Left"
            statNumber={superBetsLeft}
          />
        )}
        {leaderboardLoading ? (
          <StatusCard icon={<Spinner />} statLabel="Current Position" statNumber="--" />
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
    <HStack
      margin={3}
      marginTop={3}
      maxW={'300px'}
      width={'full'}
      bg={'gray.600'}
      rounded={'md'}
      p={3}
    >
      <Stat>
        <StatLabel>{statLabel}</StatLabel>
        <StatNumber>{statNumber}</StatNumber>
      </Stat>
      <Avatar icon={icon} />
    </HStack>
  );
}
