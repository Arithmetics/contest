import { useEffect } from 'react';
import {
  Collapse,
  Box,
  Flex,
  Heading,
  Text,
  Center,
  Spinner,
  useDisclosure,
  useToast,
  useBreakpointValue,
  Fade,
} from '@chakra-ui/react';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import LineCard, { hasLineClosed, lineHasWinner } from './lineCard/LineCard';
import BetsStatusLine from './BetsStatusLine';
import {
  Line,
  Contest,
  User,
  useContestByIdQuery,
  useCurrentUserQuery,
  useContestBetsQuery,
} from '../../generated/graphql-types';
import PayToast from './PayToast';

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

export default function BetsTab({ contestId }: BetsTabProps): JSX.Element {
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

  const { data: userData, loading: getUserLoading } = useCurrentUserQuery();

  const { loading: contestBetsLoading } = useContestBetsQuery({
    variables: { contestId: contestId || '' },
  });

  const contest = contestData?.contest as Contest | undefined;
  const lines = contest?.lines as Line[] | undefined;
  const user = userData?.authenticatedItem as User | undefined;

  const usersRegistration = contest?.registrations?.find(
    (r) => r.user?.id === userData?.authenticatedItem?.id
  );

  const toast = useToast();

  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const margin = useBreakpointValue({ base: 2, md: 6 }, 'md');

  useEffect(() => {
    if (usersRegistration && !usersRegistration.hasPaid) {
      toast({
        title: 'Have you paid yet?',
        description: <PayToast />,
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersRegistration?.id]);

  if (getContestLoading || getUserLoading || contestBetsLoading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  if (!lines || lines.length === 0) {
    return (
      <>
        <Center marginTop={'30vh'}>
          <Text fontSize="2xl">No lines set for this contest.</Text>
        </Center>
      </>
    );
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
                return (
                  <LineCard
                    key={line.id}
                    line={line as Line}
                    userId={userId}
                    contestId={contest?.id}
                    userHasEntered={userHasEntered}
                    ruleSet={contest?.ruleSet || undefined}
                    contestType={contest?.contestType}
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
                return (
                  <LineCard
                    key={line.id}
                    line={line as Line}
                    userId={userId}
                    contestId={contest?.id}
                    userHasEntered={userHasEntered}
                    ruleSet={contest?.ruleSet || undefined}
                    contestType={contest?.contestType}
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
                return (
                  <LineCard
                    key={line.id}
                    line={line as Line}
                    userId={userId}
                    contestId={contest?.id}
                    userHasEntered={userHasEntered}
                    ruleSet={contest?.ruleSet || undefined}
                    contestType={contest?.contestType}
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
