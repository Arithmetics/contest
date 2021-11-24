import {
  Button,
  Collapse,
  Box,
  Flex,
  Heading,
  Text,
  Center,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import LineCard, { hasLineClosed, lineHasWinner } from './LineCard';
import BetsStatusLine from './BetsStatusLine';
import {
  Line,
  Contest,
  User,
  useContestByIdQuery,
  useCurrentUserQuery,
  useContestBetsQuery,
} from '../../generated/graphql-types';

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
  const { isOpen: isAvailableOpen, onToggle: onAvailableToggle } = useDisclosure({
    defaultIsOpen: true,
  });
  const { isOpen: isPendingOpen, onToggle: onPendingToggle } = useDisclosure({
    defaultIsOpen: true,
  });
  const { isOpen: isSettledOpen, onToggle: onSettledToggle } = useDisclosure({
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
      {userHasEntered ? <BetsStatusLine contest={contest} user={user} /> : undefined}
      {availableLines.length !== 0 ? (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6} m={6}>
          <Heading as="h3" size="lg">
            Available Lines
          </Heading>
          <Button marginTop={2} onClick={onAvailableToggle}>
            {isAvailableOpen ? 'Hide' : 'Reveal'}
          </Button>
          <Collapse in={isAvailableOpen} animateOpacity>
            <Flex justifyContent="center" flexWrap="wrap">
              {availableLines.map((line) => {
                return (
                  <LineCard
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
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6} m={6}>
          <Heading as="h3" size="lg">
            Pending Lines
          </Heading>
          <Button marginTop={2} onClick={onPendingToggle}>
            {isPendingOpen ? 'Hide' : 'Reveal'}
          </Button>
          <Collapse in={isPendingOpen} animateOpacity>
            <Flex justifyContent="center" flexWrap="wrap">
              {pendingLines.map((line) => {
                return (
                  <LineCard
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
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6} m={6}>
          <Heading as="h3" size="lg">
            Settled Lines
          </Heading>
          <Button marginTop={2} onClick={onSettledToggle}>
            {isSettledOpen ? 'Hide' : 'Reveal'}
          </Button>
          <Collapse in={isSettledOpen} animateOpacity>
            <Flex justifyContent="center" flexWrap="wrap">
              {settledLines.map((line) => {
                return (
                  <LineCard
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
