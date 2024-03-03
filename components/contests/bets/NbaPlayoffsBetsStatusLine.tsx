import { Box, HStack, Spinner, useBreakpointValue } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { BsLightning } from 'react-icons/bs';
import { Contest, User, useContestBetsQuery } from '../../../generated/graphql-types';
import OULeadboardStatusCard from '../OULeaderboardStatusCard';
import StatusCard from '../StatusCard';
import { superBetsRemaining } from './NflAtsBetsStatusLine';

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
        <OULeadboardStatusCard contest={contest} user={user} floatMode={floatMode} />
      </HStack>
    </Box>
  );
}

export default forwardRef(BetStatusLine);
