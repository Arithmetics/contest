import {
  Badge,
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Stat,
  StatArrow,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  useRadioGroup,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsLightning } from 'react-icons/bs';
import {
  ChoiceSelectionType,
  ContestContestTypeType,
  Line,
  RuleSet,
  useContestBetsQuery,
  useDeleteBetMutation,
  useMakeBetMutation,
} from '../../../generated/graphql-types';

import { betsRemaining, superBetsRemaining } from '../bets/NflAtsBetsStatusLine';
import { LineCardContainer } from './LineCardContainer';
import { LineCardFooterTicketCutouts } from './LineCardFooterTicketCutouts';
import NbaPlayoffLineHeader from './NbaPlayoffLineHeader';
import RadioImage from './RadioImage';
import SuperBetTag from './SuperBetTag';
import { formatNbaPoints, hasLineClosed, lineHasWinner } from './lineCardUtils';

type NflPlayoffsLineCardProps = {
  line: Line;
  userId?: string;
  contestId?: string;
  userHasEntered?: boolean;
  ruleSet?: RuleSet;
  contestType?: ContestContestTypeType | null;
};

export default function NflPlayoffsLineCard({
  line,
  userId,
  contestId,
  userHasEntered,
  ruleSet,
}: NflPlayoffsLineCardProps): JSX.Element {
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
  const [superBetSelected, setSuperBetSelected] = useState<boolean>(usersBet?.isSuper || false);

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

  useEffect(() => {
    if (!usersBet) {
      setSuperBetSelected(false);
    }
  }, [usersBet]);

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
  const superPickAvailable = !contestBetsLoading && superBetsRemaining(usersBets, ruleSet) > 0;

  const formDisabled = lineClosed || !!selectedChoice || !userHasEntered || !pickAvailable;

  const overBetVolume = line.choices
    ?.filter((c) => c.selection === ChoiceSelectionType.Over)
    .reduce((acc, c) => {
      const overCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
      return acc + (overCount || 0);
    }, 0);

  const underBetVolume = line.choices
    ?.filter((c) => c.selection === ChoiceSelectionType.Under)
    .reduce((acc, c) => {
      const underCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
      return acc + (underCount || 0);
    }, 0);

  //   const awayBetVolume = line.choices
  //     ?.filter((c) => c.selection === ChoiceSelectionType.Away)
  //     .reduce((acc, c) => {
  //       const awayCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
  //       return acc + (awayCount || 0);
  //     }, 0);

  //   const homeBetVolume = line.choices
  //     ?.filter((c) => c.selection === ChoiceSelectionType.Home)
  //     .reduce((acc, c) => {
  //       const homeCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
  //       return acc + (homeCount || 0);
  //     }, 0);

  const onClickMakeBet = async (): Promise<void> => {
    try {
      await makeBet({
        variables: {
          userId: userId || '',
          choiceId: formSelectedChoiceId.toString(),
          isSuper: superBetSelected,
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
      setSuperBetSelected(false);
    } catch (e) {
      console.log('no bet', e);
    }
  };

  const radioGroup = (): JSX.Element => {
    const awayChoice = line.choices?.find((c) => c.selection === 'AWAY');
    const homeChoice = line.choices?.find((c) => c.selection === 'HOME');
    const underChoice = line.choices?.find((c) => c.selection === 'UNDER');
    const overChoice = line.choices?.find((c) => c.selection === 'OVER');
    const customChoices = line.choices?.filter((c) => c.selection === 'CUSTOM');

    if (customChoices?.length) {
      return (
        <HStack justifyContent="center" spacing={6}>
          <RadioGroup colorScheme="teal" isDisabled={formDisabled}>
            <VStack alignItems="start">
              {customChoices
                .sort((a, b) => (a?.points ?? 0) - (b?.points ?? 0))
                .map((choice) => {
                  return (
                    <Radio
                      key={choice.id}
                      value={choice.id}
                      onChange={() => setFormSelectedChoiceId(choice.id)}
                    >
                      <Flex gap="2" alignItems="center" width="100%" justifyContent="space-between">
                        {choice.title}
                        <Badge variant="solid">{formatNbaPoints(choice?.points)}</Badge>
                      </Flex>
                    </Radio>
                  );
                })}
            </VStack>
          </RadioGroup>
        </HStack>
      );
    }

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
          {homeAwayChoices.map((choice) => {
            const radio = getRadioProps({ value: choice.id });

            return (
              <RadioImage
                key={choice.id}
                altText={choice.image?.altText}
                imageUrl={choice.image?.image?.publicUrlTransformed}
                hasSelection={formSelectedChoiceId !== '0'}
                isDisabled={formDisabled}
                spread={line.benchmark}
                display={formatNbaPoints(choice.points)}
                {...radio}
              />
            );
          })}

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
                display={formatNbaPoints(choice.points)}
                {...radio}
              />
            );
          })}
        </HStack>
        {userId && !formDisabled && (
          <Center>
            <Checkbox
              onChange={() => setSuperBetSelected(!superBetSelected)}
              isChecked={superBetSelected}
              marginTop={4}
              isDisabled={formDisabled || !superPickAvailable}
              colorScheme="teal"
              size="lg"
            >
              <HStack>
                <Text>Super Bet</Text> <BsLightning />
              </HStack>
            </Checkbox>
          </Center>
        )}
        {userId && superBetSelected && formDisabled && (
          <HStack justifyContent="center">
            <SuperBetTag />
          </HStack>
        )}
      </Stack>
    );
  };

  if (lineClosed) {
    return (
      <LineCardContainer userHasBet={!!usersBet} userIsLoggedIn={!!userId}>
        {/* Header */}
        <NbaPlayoffLineHeader line={line} />
        {/* Body */}
        {userId && (
          <Stack spacing={0} align={'left'} paddingTop={3}>
            <Center>
              {!usersBet && <Text color={'whiteAlpha.500'}>Unselected</Text>}

              {usersBet && (
                <VStack>
                  <Box as="label" position="relative">
                    <Image
                      _checked={{ filter: 'none', border: '1px', borderColor: 'teal.500' }}
                      htmlHeight="100px"
                      maxHeight="100px"
                      htmlWidth="200px"
                      objectFit="cover"
                      bg={'gray.600'}
                      borderRadius="md"
                      alt={selectedChoice?.image?.altText || 'unknown'}
                      src={selectedChoice?.image?.image?.publicUrlTransformed || ''}
                      transitionProperty="transform"
                      transitionDuration="0.3s"
                      transitionTimingFunction="ease-in-out"
                    />
                    <Badge position="absolute" variant="solid" left="6px" top="6px">
                      {formatNbaPoints(selectedChoice?.points)}
                    </Badge>
                  </Box>
                  {superBetSelected && <SuperBetTag />}
                </VStack>
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
        {/* Footer  */}
        {userId && <Divider orientation="horizontal" paddingTop={3} borderStyle="dashed" />}
        <Stack spacing={0} align={'left'}>
          {!winningChoice && (
            <HStack justifyContent="space-evenly" paddingTop={3}>
              <Stat textAlign="center">
                <StatLabel>Over Bet Volume</StatLabel>
                <StatNumber>{overBetVolume}</StatNumber>
              </Stat>
              <Stat textAlign="center">
                <StatLabel>Under Bet Volume</StatLabel>
                <StatNumber>{underBetVolume}</StatNumber>
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
      <NbaPlayoffLineHeader line={line} />
      {/* Body */}
      <Stack spacing={0} align={'left'} paddingTop={3}>
        {radioGroup()}
      </Stack>
      {/* Footer  */}
      {userId && <Divider orientation="horizontal" paddingTop={3} borderStyle="dashed" />}
      <Stack spacing={0} align={'left'}>
        {userHasEntered && (
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
                bg="teal.500"
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
        )}
      </Stack>
    </LineCardContainer>
  );
}
