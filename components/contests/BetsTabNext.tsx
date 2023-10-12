import {
  Badge,
  Center,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  VStack,
  Box,
  useBreakpointValue,
  useDisclosure,
  useToast,
  Progress,
  Flex,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  Contest,
  Line,
  User,
  Bet,
  useContestBetsQuery,
  useContestByIdQuery,
  useCurrentUserQuery,
} from '../../generated/graphql-types';
import PayToast from './PayToast';
import { AddBetButton } from './overUnder/AddBetButton';
import { LinesPicker } from './overUnder/LinesPicker';
import { BetCard } from './overUnder/BetCard';

function soryById(a: Bet, b: Bet): number {
  if (a.id && b.id) {
    return a.id.localeCompare(b.id);
  }
  return 0;
}

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

export default function BetsTabNext({ contestId }: BetsTabProps): JSX.Element {
  const toast = useToast();

  const barWidth = useBreakpointValue({ base: '450%', md: '300px' });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pickingSuper, setPickingSuper] = useState(false);
  const [updatingBet, setUpdatingBet] = useState<Bet | undefined>(undefined);
  // const [superBetPositions, setSuperBetPositions] = useState<string[]>(['', '', '', '', '']);
  // const [regularBetPositions, setRegularBetPositions] = useState<string[]>(['', '', '', '', '']);

  const { data: contestData, loading: getContestLoading } = useContestByIdQuery({
    variables: {
      id: contestId || '',
    },
  });

  const { data: userData, loading: getUserLoading } = useCurrentUserQuery();

  const { data: contestBetsData, loading: contestBetsLoading } = useContestBetsQuery({
    variables: { contestId: contestId || '' },
  });

  const contest = contestData?.contest as Contest | undefined;
  const lines = contest?.lines as Line[] | undefined;
  const user = userData?.authenticatedItem as User | undefined;

  const usersRegistration = contest?.registrations?.find(
    (r) => r.user?.id === userData?.authenticatedItem?.id
  );

  const userId = user?.id;
  const userHasEntered = contest?.registrations?.some((r) => r.user?.id === userId);

  const usersBets = contestBetsData?.bets?.filter((bet) => bet?.user?.id === userId);

  const regularBets = usersBets?.filter((bet) => !bet?.isSuper);
  const superBets = usersBets?.filter((bet) => bet?.isSuper);

  const superBetPlaceholders = [1, 2, 3, 4, 5].slice(0, 5 - (superBets?.length || 0));
  const regularBetPlaceholders = [1, 2, 3, 4, 5].slice(0, 5 - (regularBets?.length || 0));

  const onBetButtonClick = (bet: Bet | undefined, isSuper: boolean) => (): void => {
    setUpdatingBet(bet);
    setPickingSuper(isSuper);
    onOpen();
  };

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

  return (
    <>
      <VStack>
        <Flex flexDirection="column" gap="12px">
          <HStack>
            <Box alignSelf={'start'} padding="12px" borderRadius="5px" width={'100%'}>
              <Text fontSize="2xl" marginBottom={'4px'}>
                {userHasEntered ? 'Your Entry:' : 'Register to enter picks:'}
              </Text>
              <Flex gap="24px" flexWrap={'wrap'}>
                <Box width={barWidth}>
                  <Text fontSize="sm">Super Bets ({superBets?.length}/5)</Text>
                  <Progress
                    width={'100%'}
                    colorScheme={superBets?.length === 5 ? 'purple' : 'red'}
                    size="sm"
                    value={(100 * (superBets?.length || 0)) / 5}
                  />
                </Box>
                <Box width={barWidth}>
                  <Text fontSize="sm">Regular Bets ({regularBets?.length}/5)</Text>
                  <Progress
                    width={'100%'}
                    colorScheme={regularBets?.length === 5 ? 'teal' : 'red'}
                    size="sm"
                    value={(100 * (regularBets?.length || 0)) / 5}
                  />
                </Box>
              </Flex>
            </Box>
          </HStack>
          <HStack flex={1} wrap={'wrap'} gap="12px" alignItems={'center'} justifyContent={'center'}>
            {superBets?.sort(soryById).map((bet) => {
              return (
                <BetCard
                  key={bet.id}
                  line={lines.find((line) => line.id === bet.choice?.line?.id)}
                  bet={bet}
                  onClick={onBetButtonClick(bet, true)}
                  isSuper
                />
              );
            })}
            {superBetPlaceholders.map((i) => {
              return (
                <AddBetButton
                  key={i}
                  isSuper
                  isDisabled={!userHasEntered}
                  onClick={onBetButtonClick(undefined, true)}
                />
              );
            })}
          </HStack>
          <HStack flex={1} wrap={'wrap'} gap="12px" alignItems={'center'} justifyContent={'center'}>
            {regularBets?.sort(soryById).map((bet) => {
              const line = lines.find((line) => line.id === bet.choice?.line?.id);
              return (
                <BetCard
                  key={bet.id}
                  line={line}
                  bet={bet}
                  onClick={onBetButtonClick(bet, false)}
                />
              );
            })}
            {regularBetPlaceholders.map((i) => {
              return (
                <AddBetButton
                  key={i}
                  isSuper={false}
                  isDisabled={!userHasEntered}
                  onClick={onBetButtonClick(undefined, false)}
                />
              );
            })}
          </HStack>
        </Flex>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="1040px">
          <ModalHeader>
            Available Lines {pickingSuper && <Badge colorScheme="purple">Super</Badge>}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LinesPicker
              contestId={contestId}
              pickingSuper={pickingSuper}
              userId={userId}
              closeModal={onClose}
              updatingBet={updatingBet}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
