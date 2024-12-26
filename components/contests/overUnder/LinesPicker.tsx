import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Spinner,
  Stat,
  StatNumber,
  VStack,
} from '@chakra-ui/react';
import {
  Line,
  Contest,
  Bet,
  useContestByIdQuery,
  useContestBetsQuery,
  ChoiceSelectionType,
  useMakeBetMutation,
  useUpdateBetMutation,
} from '../../../generated/graphql-types';

type LinesPickerProps = {
  userId?: string;
  contestId?: string;
  pickingSuper: boolean;
  closeModal: () => void;
  updatingBet: Bet | undefined;
};

export const LinesPicker = ({
  contestId,
  pickingSuper,
  userId,
  closeModal,
  updatingBet,
}: LinesPickerProps): JSX.Element => {
  const { data: contestData, loading: getContestLoading } = useContestByIdQuery({
    variables: {
      id: contestId || '',
    },
  });

  const {
    data: contestBetsData,
    loading: contestBetsLoading,
    refetch,
  } = useContestBetsQuery({
    variables: { contestId: contestId || '' },
  });

  const [makeBet, { loading: makeBetLoading }] = useMakeBetMutation({
    update: () => {
      refetch();
    },
  });

  const [updateBet, { loading: updateBetLoading }] = useUpdateBetMutation({
    update: () => {
      refetch();
    },
  });

  const contest = contestData?.contest as Contest | undefined;
  const lines = contest?.lines as Line[] | undefined;

  const submitBet = (line: Line, selection: ChoiceSelectionType) => async () => {
    const choice = line.choices?.find((choice) => choice.selection === selection);

    if (!updatingBet) {
      // new bet
      try {
        await makeBet({
          variables: {
            userId: userId || '',
            choiceId: choice?.id || '',
            isSuper: pickingSuper,
          },
        });
        closeModal();
      } catch (e) {
        console.log('bet error', e);
      }
      return;
    }
    // update bet
    await updateBet({
      variables: {
        userId: userId || '',
        betId: updatingBet.id,
        choiceId: choice?.id || '',
      },
    });
    closeModal();
  };

  if (getContestLoading || contestBetsLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <Flex wrap="wrap" gap="24px" paddingBottom="12px" justifyContent="center">
      {lines?.map((line) => {
        const usersBet = contestBetsData?.bets?.find(
          (bet) => bet.user?.id === userId && bet?.choice?.line?.id === line.id
        );

        const switchingSameBet = updatingBet?.id === usersBet?.id;

        const aleadyHaveOverSelected = usersBet?.choice?.selection === 'OVER';
        const alreadyHaveUnderSelected = usersBet?.choice?.selection === 'UNDER';

        const userHasBet = Boolean(usersBet);

        const overDisabled = userHasBet && (!switchingSameBet || aleadyHaveOverSelected);
        const underDisabled = userHasBet && (!switchingSameBet || alreadyHaveUnderSelected);

        return (
          <VStack
            key={line.id}
            bg={'gray.600'}
            boxShadow={'lg'}
            rounded={'md'}
            position={'relative'}
            justifyContent={'space-between'}
            padding={3}
            width="140px"
          >
            <Button
              isDisabled={overDisabled || makeBetLoading || updateBetLoading}
              rightIcon={<ArrowUpIcon />}
              colorScheme="btbets"
              variant="outline"
              width="100%"
              onClick={submitBet(line, ChoiceSelectionType.Over)}
            >
              Over
            </Button>
            <HStack>
              <Image
                boxSize="50px"
                fit="scale-down"
                bg={'gray.600'}
                justifyContent={'center'}
                alt={line.image?.altText || 'unknown'}
                src={line.image?.image?.publicUrlTransformed || ''}
              />
              <Stat>
                <StatNumber>{line.benchmark}</StatNumber>
              </Stat>
            </HStack>
            <Button
              isDisabled={underDisabled || makeBetLoading || updateBetLoading}
              rightIcon={<ArrowDownIcon />}
              colorScheme="btbets"
              variant="outline"
              width="100%"
              onClick={submitBet(line, ChoiceSelectionType.Under)}
            >
              Under
            </Button>
          </VStack>
        );
      })}
    </Flex>
  );
};
