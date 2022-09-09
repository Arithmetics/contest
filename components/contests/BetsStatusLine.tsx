import { forwardRef } from 'react';
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  Avatar,
  HStack,
  Spinner,
  useBreakpointValue,
} from '@chakra-ui/react';
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
  floatMode: boolean;
};

function BetStatusLine({ contest, user, floatMode }: BetStatusLineProps, ref: any): JSX.Element {
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

  const margin = useBreakpointValue({ base: 1, md: 6 }, 'md');

  return (
    <Box overflow="hidden" m={margin} marginTop={3} ref={ref}>
      <HStack justifyContent="center" flexWrap={'wrap'} gridGap={1} marginRight={2}>
        {/* bug fix span */}
        <span></span>
        {contestBetsLoading ? (
          <StatusCard
            icon={<Spinner />}
            statLabel="Bets Left"
            statNumber="--"
            floatMode={floatMode}
          />
        ) : (
          <StatusCard
            icon={<RiCoinLine fontSize="1.5rem" />}
            statLabel="Bets Left"
            statNumber={betsLeft}
            floatMode={floatMode}
          />
        )}
        {contestBetsLoading ? (
          <StatusCard
            icon={<Spinner />}
            statLabel="Super Bets Left"
            statNumber="--"
            floatMode={floatMode}
          />
        ) : (
          <StatusCard
            icon={<BsLightning fontSize="1.5rem" />}
            statLabel="Super Bets Left"
            statNumber={superBetsLeft}
            floatMode={floatMode}
          />
        )}
        {leaderboardLoading ? (
          <StatusCard
            icon={<Spinner />}
            statLabel="Current Position"
            statNumber="--"
            floatMode={floatMode}
          />
        ) : (
          <StatusCard
            icon={<AiOutlineOrderedList fontSize="1.5rem" />}
            statLabel="Current Position"
            statNumber={`${position} / ${sortedLeaderboard.length}`}
            floatMode={floatMode}
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
  floatMode: boolean;
};

function StatusCard({ icon, statLabel, statNumber, floatMode }: StatusCardProps): JSX.Element {
  const maxWidth = useBreakpointValue(
    { base: '30%', md: floatMode ? '150px' : '200px', lg: floatMode ? '150px' : '300px' },
    'md'
  );
  const showIcon = useBreakpointValue({ base: false, md: true }, 'md');
  const minHeight = useBreakpointValue({ base: '103px', md: '0px' }, 'md');

  return (
    <Box
      maxW={maxWidth}
      width={'full'}
      bg={floatMode ? 'gray.900' : 'gray.600'}
      rounded={'md'}
      p={3}
      border="1px solid"
      borderColor={floatMode ? 'cyan.500' : ''}
      minHeight={minHeight}
    >
      <HStack>
        <Stat>
          <StatLabel>{statLabel}</StatLabel>
          <StatNumber>{statNumber}</StatNumber>
        </Stat>
        {!floatMode && showIcon && <Avatar icon={icon} />}
      </HStack>
    </Box>
  );
}

export default forwardRef(BetStatusLine);
