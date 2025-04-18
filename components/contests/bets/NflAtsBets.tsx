import {
  Box,
  Collapse,
  Fade,
  Flex,
  Heading,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import {
  Contest,
  Line,
  User,
  useContestBetsQuery,
  useContestByIdQuery,
  useCurrentUserQuery,
} from '../../../generated/graphql-types';
import BetsStatusLine from './NflAtsBetsStatusLine';
import { hasLineClosed, lineHasWinner } from '../lineCard/lineCardUtils';
import NflAtsLineCard from '../lineCard/NflAtsLineCard';
import NflAtsTotalLineCard from '../lineCard/NFLAtsTotalLineCard';
import NoLinesForContest from './NoLinesForContest';
import PageLoader from './PageLoader';
import { useHavePaidToast } from './useHavePaidToast';

export enum ContestTabs {
  BETS = 'bets',
  LEADERBOARD = 'leaderboard',
  RULES = 'rules',
  TRACKER = 'tracker',
  HISTORY = 'history',
}

type BetsTabProps = {
  contestId?: string;
};

export default function NflAtsBets({ contestId }: BetsTabProps): JSX.Element {
  const { isOpen: isAvailableOpen } = useDisclosure({
    defaultIsOpen: true,
  });
  const { isOpen: isPendingOpen } = useDisclosure({
    defaultIsOpen: true,
  });
  const { isOpen: isSettledOpen } = useDisclosure({
    defaultIsOpen: true,
  });

  const { data: contestData, loading: getContestLoading } = useContestByIdQuery({
    variables: {
      id: contestId || '',
    },
  });

  const { data: userData, loading: getUserLoading } = useCurrentUserQuery({
    fetchPolicy: 'network-only',
  });

  const { loading: contestBetsLoading } = useContestBetsQuery({
    variables: { contestId: contestId || '' },
  });

  const contest = contestData?.contest as Contest | undefined;
  const lines = contest?.lines as Line[] | undefined;
  const user = userData?.authenticatedItem as User | undefined;

  const usersRegistration = contest?.registrations?.find(
    (r) => r.user?.id === userData?.authenticatedItem?.id
  );

  useHavePaidToast(usersRegistration);

  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const margin = useBreakpointValue({ base: 2, md: 6 }, 'md');

  if (getContestLoading || getUserLoading || contestBetsLoading) {
    return <PageLoader />;
  }

  if (!lines || lines.length === 0) {
    return <NoLinesForContest />;
  }

  const availableLines = lines.filter((l) => !hasLineClosed(l as Line));
  const pendingLines = lines.filter((l) => hasLineClosed(l as Line) && !lineHasWinner(l as Line));
  const settledLines = lines.filter((l) => lineHasWinner(l as Line));
  const userId = user?.id;
  const userHasEntered = contest?.registrations?.some((r) => r.user?.id === userId);

  return (
    <>
      {/* top thing */}
      {userHasEntered ? (
        <BetsStatusLine ref={ref} contest={contest} user={user} floatMode={false} />
      ) : undefined}
      {/* absolute stuff */}
      {userHasEntered && !isVisible ? (
        <Fade in={true} style={{ zIndex: 1 }}>
          <div
            style={{
              position: 'fixed',
              top: '0px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100vw',
              zIndex: 1,
            }}
          >
            <BetsStatusLine contest={contest} user={user} floatMode={true} />
          </div>
        </Fade>
      ) : undefined}
      {availableLines.length !== 0 ? (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding={margin} m={margin}>
          <Heading as="h3" size="lg">
            Available Lines
          </Heading>
          <Collapse in={isAvailableOpen} animateOpacity>
            <Flex justifyContent="center" flexWrap="wrap" gap={3} paddingY={3}>
              {availableLines.map((line) => {
                // if its a total line
                if (line.choices?.some((c) => c.selection === 'UNDER' || c.selection === 'OVER')) {
                  return (
                    <NflAtsTotalLineCard
                      key={line.id}
                      line={line as Line}
                      userId={userId}
                      contestId={contest?.id}
                      userHasEntered={userHasEntered}
                      ruleSet={contest?.ruleSet || undefined}
                    />
                  );
                }
                return (
                  <NflAtsLineCard
                    key={line.id}
                    line={line as Line}
                    userId={userId}
                    contestId={contest?.id}
                    userHasEntered={userHasEntered}
                    ruleSet={contest?.ruleSet || undefined}
                  />
                );
              })}
            </Flex>
          </Collapse>
        </Box>
      ) : undefined}
      {pendingLines.length !== 0 ? (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding={margin} m={margin}>
          <Heading as="h3" size="lg">
            Pending Lines
          </Heading>
          <Collapse in={isPendingOpen} animateOpacity>
            <Flex justifyContent="center" flexWrap="wrap" gap={3} paddingY={3}>
              {pendingLines.map((line) => {
                // if its a total line
                if (line.choices?.some((c) => c.selection === 'UNDER' || c.selection === 'OVER')) {
                  return (
                    <NflAtsTotalLineCard
                      key={line.id}
                      line={line as Line}
                      userId={userId}
                      contestId={contest?.id}
                      userHasEntered={userHasEntered}
                      ruleSet={contest?.ruleSet || undefined}
                    />
                  );
                }
                return (
                  <NflAtsLineCard
                    key={line.id}
                    line={line as Line}
                    userId={userId}
                    contestId={contest?.id}
                    userHasEntered={userHasEntered}
                    ruleSet={contest?.ruleSet || undefined}
                  />
                );
              })}
            </Flex>
          </Collapse>
        </Box>
      ) : undefined}
      {settledLines.length !== 0 ? (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding={margin} m={margin}>
          <Heading as="h3" size="lg">
            Settled Lines
          </Heading>
          <Collapse in={isSettledOpen} animateOpacity>
            <Flex justifyContent="center" flexWrap="wrap" gap={3} paddingY={3}>
              {settledLines.map((line) => {
                // if its a total line
                if (line.choices?.some((c) => c.selection === 'UNDER' || c.selection === 'OVER')) {
                  return (
                    <NflAtsTotalLineCard
                      key={line.id}
                      line={line as Line}
                      userId={userId}
                      contestId={contest?.id}
                      userHasEntered={userHasEntered}
                      ruleSet={contest?.ruleSet || undefined}
                    />
                  );
                }
                return (
                  <NflAtsLineCard
                    key={line.id}
                    line={line as Line}
                    userId={userId}
                    contestId={contest?.id}
                    userHasEntered={userHasEntered}
                    ruleSet={contest?.ruleSet || undefined}
                  />
                );
              })}
            </Flex>
          </Collapse>
        </Box>
      ) : undefined}
    </>
  );
}
