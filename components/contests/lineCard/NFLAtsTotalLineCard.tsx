import {
  Badge,
  Button,
  Center,
  Divider,
  HStack,
  Stack,
  Stat,
  StatArrow,
  StatLabel,
  StatNumber,
  Text,
  useRadioGroup,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  ChoiceSelectionType,
  Line,
  RuleSet,
  useContestBetsQuery,
  useDeleteBetMutation,
  useMakeBetMutation,
} from '../../../generated/graphql-types';
import { betsRemaining } from '../bets/NflAtsBetsStatusLine';
import { LineCardContainer } from './LineCardContainer';
import { LineCardFooterTicketCutouts } from './LineCardFooterTicketCutouts';
import NflAtsTotalLineCardHeader from './NflAtsTotalLineCardHeader';
import RadioImage from './RadioImage';
import { hasLineClosed, lineHasWinner } from './lineCardUtils';

type NflAtsTotalLineCardProps = {
  line: Line;
  userId?: string;
  contestId?: string;
  userHasEntered?: boolean;
  ruleSet?: RuleSet;
};

export default function NflAtsTotalLineCard({
  line,
  userId,
  contestId,
  userHasEntered,
  ruleSet,
}: NflAtsTotalLineCardProps): JSX.Element {
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
  const [deleteBet, { loading: deleteBetLoading }] = useDeleteBetMutation({
    update: (cache, payload) => {
      return cache.evict({
        id:
          cache.identify({
            __typename: payload.data?.deleteBet?.__typename || '',
            id: payload.data?.deleteBet?.id || '',
          }) || '',
      });
    },
  });

  const usersBets = contestBetsData?.bets?.filter((bet) => bet?.user?.id === userId);

  const selectedChoice = line.choices?.find((choice) =>
    usersBets?.some((bet) => bet.choice?.id === choice.id)
  );

  const usersBet = usersBets?.find((bet) => bet.choice?.id === selectedChoice?.id);

  const [formSelectedChoiceId, setFormSelectedChoiceId] = useState<string | number>(
    selectedChoice?.id || '0'
  );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'test',
    defaultValue: `${formSelectedChoiceId}`,
    onChange: setFormSelectedChoiceId,
  });

  const group = getRootProps();

  useEffect(() => {
    if (!selectedChoice) {
      setFormSelectedChoiceId('0');
    }
  }, [selectedChoice]);

  const lineClosed = hasLineClosed(line);
  const winningChoice = line.choices?.find((c) => c.isWin);
  const losingChoice = line.choices?.find((c) => !c.isWin);

  const winningBetCount = contestBetsData?.bets?.filter(
    (b) => b?.choice?.id === winningChoice?.id
  ).length;

  const losingBetCount = contestBetsData?.bets?.filter(
    (b) => b?.choice?.id === losingChoice?.id
  ).length;

  const pickAvailable = !contestBetsLoading && betsRemaining(usersBets, ruleSet) > 0;

  const formDisabled = lineClosed || !!selectedChoice || !userHasEntered || !pickAvailable;

  const awayBetVolume = line.choices
    ?.filter((c) => c.selection === ChoiceSelectionType.Away)
    .reduce((acc, c) => {
      const awayCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
      return acc + (awayCount || 0);
    }, 0);

  const homeBetVolume = line.choices
    ?.filter((c) => c.selection === ChoiceSelectionType.Home)
    .reduce((acc, c) => {
      const homeCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
      return acc + (homeCount || 0);
    }, 0);

  const onClickMakeBet = async (): Promise<void> => {
    try {
      await makeBet({
        variables: {
          userId: userId || '',
          choiceId: formSelectedChoiceId.toString(),
          isSuper: false,
        },
      });
    } catch (e) {
      console.log('no bet', e);
    }
  };

  const onClickDeleteBet = async (): Promise<void> => {
    try {
      await deleteBet({
        variables: { betId: usersBet?.id || '' },
      });
      setFormSelectedChoiceId('0');
    } catch (e) {
      console.log('no bet', e);
    }
  };

  const radioGroup = (): JSX.Element => {
    const awayChoice = line.choices?.find((c) => c.selection === 'AWAY');
    const homeChoice = line.choices?.find((c) => c.selection === 'HOME');
    const underChoice = line.choices?.find((c) => c.selection === 'UNDER');
    const overChoice = line.choices?.find((c) => c.selection === 'OVER');

    const homeAwayChoices = [];
    if (awayChoice) {
      homeAwayChoices.push(awayChoice);
    }
    if (homeChoice) {
      homeAwayChoices.push(homeChoice);
    }

    const overUnderChoices = [];
    if (underChoice) {
      overUnderChoices.push(underChoice);
    }
    if (overChoice) {
      overUnderChoices.push(overChoice);
    }
    return (
      <Stack spacing={0} align={'left'} paddingTop={3}>
        <HStack justifyContent="center" spacing={6} {...group}>
          {overUnderChoices.map((choice) => {
            const radio = getRadioProps({ value: choice.id });

            return (
              <RadioImage
                key={choice.id}
                altText={choice.image?.altText}
                imageUrl={choice.image?.image?.publicUrlTransformed}
                hasSelection={formSelectedChoiceId !== '0'}
                isDisabled={formDisabled}
                spread={line.benchmark}
                display={''}
                {...radio}
              />
            );
          })}
        </HStack>
      </Stack>
    );
  };

  if (lineClosed) {
    return (
      <LineCardContainer userHasBet={!!usersBet} userIsLoggedIn={!!userId}>
        {/* Header */}
        <NflAtsTotalLineCardHeader line={line} />
        {/* middle form */}
        {userId && (
          <Stack spacing={0} align={'left'} paddingY={3}>
            <Center>
              {!usersBet && <Text color={'whiteAlpha.500'}>Unselected</Text>}

              {usersBet && (
                <HStack>
                  <Text color={'whiteAlpha.600'}>Your selection: {selectedChoice?.selection}</Text>
                </HStack>
              )}
            </Center>

            {lineHasWinner(line) && usersBet && (
              <Center>
                <HStack alignItems={'baseline'}>
                  <Text color={'whiteAlpha.600'}>Your result:</Text>
                  {selectedChoice?.isWin ? (
                    <Badge marginLeft={2} colorScheme="green">
                      Win
                    </Badge>
                  ) : (
                    <Badge marginLeft={2} colorScheme="red">
                      Loss
                    </Badge>
                  )}
                </HStack>
              </Center>
            )}
          </Stack>
        )}
        {/* Footer */}
        {userId && <Divider orientation="horizontal" borderStyle="dashed" />}
        <Stack spacing={0} align={'left'}>
          {!winningChoice && (
            <HStack justifyContent="space-evenly" paddingTop={3}>
              <Stat textAlign="center">
                <StatLabel>Away Bet Volume</StatLabel>
                <StatNumber>{awayBetVolume}</StatNumber>
              </Stat>
              <Stat textAlign="center">
                <StatLabel>Home Bet Volume</StatLabel>
                <StatNumber>{homeBetVolume}</StatNumber>
              </Stat>
            </HStack>
          )}
          {winningChoice && (
            <HStack justifyContent="space-evenly" paddingTop={3}>
              <Stat textAlign="center">
                <StatLabel>Correct Bet Volume</StatLabel>
                <StatNumber>
                  <StatArrow type="increase" />
                  {winningBetCount}
                </StatNumber>
              </Stat>
              <Stat textAlign="center">
                <StatLabel>Incorrect Bet Volume</StatLabel>
                <StatNumber>
                  <StatArrow type="decrease" />
                  {losingBetCount}
                </StatNumber>
              </Stat>
            </HStack>
          )}
        </Stack>
      </LineCardContainer>
    );
  }

  // line is open
  return (
    <LineCardContainer userHasBet={!!usersBet} userIsLoggedIn={!!userId}>
      {/* Header */}
      <NflAtsTotalLineCardHeader line={line} />
      {/* Body */}
      {radioGroup()}
      {/* Footer */}
      {userId && <Divider orientation="horizontal" borderStyle="dashed" />}
      <Stack spacing={0} align={'left'}>
        {userHasEntered && (
          <>
            <HStack
              position="relative"
              display="flex"
              spacing={3}
              paddingTop={3}
              justifyContent="center"
            >
              <LineCardFooterTicketCutouts useBorder={!!usersBet} />
              {!selectedChoice ? (
                <Button
                  onClick={onClickMakeBet}
                  isDisabled={!pickAvailable || makeBetLoading || formSelectedChoiceId === '0'}
                  isLoading={makeBetLoading}
                  flexGrow={1}
                  variant="outline"
                  bg="btbets.500"
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                    boxShadow: 'lg',
                  }}
                >
                  Make Bet
                </Button>
              ) : (
                <Button
                  onClick={onClickDeleteBet}
                  isDisabled={deleteBetLoading}
                  isLoading={deleteBetLoading}
                  variant="outline"
                  colorScheme="red"
                  rounded={'md'}
                  _hover={{
                    boxShadow: 'lg',
                  }}
                >
                  Remove Bet
                </Button>
              )}
            </HStack>
          </>
        )}
      </Stack>
    </LineCardContainer>
  );
}
