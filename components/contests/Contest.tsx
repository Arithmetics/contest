import {
  Button,
  Collapse,
  Box,
  Flex,
  Heading,
  Text,
  Spinner,
  Center,
  useDisclosure,
} from '@chakra-ui/react';

import ContestNav from '../../components/nav/ContestNav';
import LineCard, { hasLineClosed, lineHasWinner } from './LineCard';

import {
  useContestByIdQuery,
  Line,
  Contest,
  useCurrentUserQuery,
} from '../../generated/graphql-types';

type ContestProps = {
  id?: string;
};

export default function ContestUI({ id }: ContestProps): JSX.Element {
  const { isOpen: isAvailableOpen, onToggle: onAvailableToggle } = useDisclosure({
    defaultIsOpen: true,
  });
  const { isOpen: isPendingOpen, onToggle: onPendingToggle } = useDisclosure({
    defaultIsOpen: true,
  });
  const { isOpen: isSettledOpen, onToggle: onSettledToggle } = useDisclosure({
    defaultIsOpen: true,
  });

  const { data: userData, loading: getUserLoading } = useCurrentUserQuery();
  const { data, loading } = useContestByIdQuery({
    variables: {
      id: id || '',
    },
  });

  if (!data?.Contest) {
    return (
      <Center marginTop={'30vh'}>
        <Text fontSize="2xl">No contest found</Text>
      </Center>
    );
  }

  if (loading || getUserLoading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  const lines = data?.Contest?.lines;

  if (!lines || lines.length === 0) {
    return (
      <>
        <ContestNav contest={data.Contest as Contest} />
        <Center marginTop={'30vh'}>
          <Text fontSize="2xl">No lines set for this contest.</Text>
        </Center>
      </>
    );
  }

  const availableLines = lines.filter((l) => !hasLineClosed(l as Line));
  const pendingLines = lines.filter((l) => hasLineClosed(l as Line) && !lineHasWinner(l as Line));
  const settledLines = lines.filter((l) => lineHasWinner(l as Line));
  const userId = userData?.authenticatedItem?.id;
  const userHasEntered = data?.Contest?.registrations.some((r) => r.user?.id === userId);
  return (
    <>
      <ContestNav contest={data.Contest as Contest} />

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
                    userHasEntered={userHasEntered}
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
                    userHasEntered={userHasEntered}
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
                    userHasEntered={userHasEntered}
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
