import { Box, HStack, Spinner, useBreakpointValue } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { BsLightning } from 'react-icons/bs';
import { RiCoinLine } from 'react-icons/ri';
import { Bet, Contest, RuleSet, User, useContestBetsQuery } from '../../../generated/graphql-types';
import ATSLeadboardStatusCard from '../ATSLeaderboardStatusCard';
import StatusCard from '../StatusCard';

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

function BetStatusLine(
  { contest, user, floatMode }: BetStatusLineProps,
  ref: unknown
): JSX.Element {
  const { data: contestBetsData, loading: contestBetsLoading } = useContestBetsQuery({
    variables: { contestId: contest?.id || '' },
  });

  const usersBets = contestBetsData?.bets?.filter((bet) => bet?.user?.id === user?.id);

  const betsLeft = betsRemaining(usersBets || [], contest?.ruleSet).toString();
  const superBetsLeft = superBetsRemaining(usersBets || [], contest?.ruleSet).toString();

  const margin = useBreakpointValue({ base: 1, md: 6 }, 'md');

  return (
    <Box
      overflow="hidden"
      m={margin}
      marginTop={3}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
    >
      <HStack justifyContent="center" flexWrap={'wrap'} gridGap={1} marginRight={2}>
        {/* bug fix span */}
        <span></span>
        <StatusCard
          icon={contestBetsLoading ? <Spinner /> : <RiCoinLine fontSize="1.5rem" />}
          statLabel="Bets Left"
          statNumber={contestBetsLoading ? '--' : betsLeft}
          floatMode={floatMode}
        />
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
        <ATSLeadboardStatusCard contest={contest} user={user} floatMode={floatMode} />
      </HStack>
    </Box>
  );
}

export default forwardRef(BetStatusLine);
