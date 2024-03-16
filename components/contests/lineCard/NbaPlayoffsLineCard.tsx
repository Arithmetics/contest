import {
  Badge,
  Button,
  Center,
  Checkbox,
  Divider,
  Grid,
  GridItem,
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
  useBreakpointValue,
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

type PickFooterLabel = {
  leftVolume: number;
  rightVolume: number;
  leftLabel: string;
  rightLabel: string;
};

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
  const columns = useBreakpointValue({ base: 1, md: 2 }, 'md');

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

  const pickVolumes = (): PickFooterLabel => {
    const overBetVolume =
      line.choices
        ?.filter((c) => c.selection === ChoiceSelectionType.Over)
        .reduce((acc, c) => {
          const overCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
          return acc + (overCount || 0);
        }, 0) ?? 0;

    const underBetVolume =
      line.choices
        ?.filter((c) => c.selection === ChoiceSelectionType.Under)
        .reduce((acc, c) => {
          const underCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
          return acc + (underCount || 0);
        }, 0) ?? 0;

    const awayBetVolume =
      line.choices
        ?.filter((c) => c.selection === ChoiceSelectionType.Away)
        .reduce((acc, c) => {
          const awayCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
          return acc + (awayCount || 0);
        }, 0) ?? 0;

    const homeBetVolume =
      line.choices
        ?.filter((c) => c.selection === ChoiceSelectionType.Home)
        .reduce((acc, c) => {
          const homeCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
          return acc + (homeCount || 0);
        }, 0) ?? 0;

    const customMatchVolume =
      line.choices
        ?.filter((c) => c.selection === selectedChoice?.selection)
        .reduce((acc, c) => {
          const homeCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
          return acc + (homeCount || 0);
        }, 0) ?? 0;

    const customFadeVolume =
      line.choices
        ?.filter((c) => c.selection !== selectedChoice?.selection)
        .reduce((acc, c) => {
          const homeCount = contestBetsData?.bets?.filter((b) => b?.choice?.id === c.id).length;
          return acc + (homeCount || 0);
        }, 0) ?? 0;

    if (awayBetVolume > 0 || homeBetVolume > 0) {
      return {
        leftVolume: awayBetVolume,
        rightVolume: homeBetVolume,
        leftLabel: 'Away Volume',
        rightLabel: 'Home Volume',
      };
    }

    if (overBetVolume > 0 || underBetVolume > 0) {
      return {
        leftVolume: overBetVolume,
        rightVolume: underBetVolume,
        leftLabel: 'Over Volume',
        rightLabel: 'Under Volume',
      };
    }

    return {
      leftVolume: customMatchVolume,
      rightVolume: customFadeVolume,
      leftLabel: 'Matching Volume',
      rightLabel: 'Opposing Volume',
    };
  };

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
        <HStack justifyContent="center" spacing={6} width="100%" padding={1}>
          <RadioGroup
            colorScheme="teal"
            isDisabled={formDisabled}
            width="100%"
            onChange={setFormSelectedChoiceId}
            value={formSelectedChoiceId.toString()}
          >
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={2}>
              {customChoices
                .sort((a, b) => (a?.points ?? 0) - (b?.points ?? 0))
                .map((choice) => {
                  return (
                    <GridItem w="100%" key={choice.id}>
                      <Radio value={choice.id} onChange={() => setFormSelectedChoiceId(choice.id)}>
                        <HStack gap="4px">
                          <VStack alignItems="start" gap="2px">
                            <Text>{choice.title}</Text>

                            <Badge variant="solid">{formatNbaPoints(choice?.points)}</Badge>
                          </VStack>
                          {(!formDisabled || formSelectedChoiceId === choice.id) && (
                            <Image
                              boxSize="35px"
                              fit="scale-down"
                              alt={choice?.image?.altText || 'unknown'}
                              src={choice?.image?.image?.publicUrlTransformed || ''}
                            />
                          )}
                        </HStack>
                      </Radio>
                    </GridItem>
                  );
                })}
            </Grid>
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

  const { leftVolume, rightVolume, leftLabel, rightLabel } = pickVolumes();

  if (lineClosed) {
    return (
      <LineCardContainer userHasBet={!!usersBet} userIsLoggedIn={!!userId}>
        {/* Header */}
        <NbaPlayoffLineHeader line={line} />
        {/* Body */}
        {userId && (
          <Stack spacing={0} align={'left'} paddingY={3}>
            <Center>
              {!usersBet && <Text color={'whiteAlpha.500'}>Unselected</Text>}

              {usersBet && (
                <HStack>
                  <Text color={'whiteAlpha.600'}>Your selection:</Text>{' '}
                  {usersBet.choice?.selection !== ChoiceSelectionType.Over &&
                    usersBet.choice?.selection !== ChoiceSelectionType.Under && (
                      <Image
                        boxSize="40px"
                        fit="scale-down"
                        bg={'gray.600'}
                        alt={selectedChoice?.secondaryImage?.altText || 'unknown'}
                        src={selectedChoice?.secondaryImage?.image?.publicUrlTransformed || ''}
                      />
                    )}
                  {usersBet.choice?.selection == ChoiceSelectionType.Over && <Text>Over</Text>}
                  {usersBet.choice?.selection == ChoiceSelectionType.Under && <Text>Under</Text>}
                  <Badge>{formatNbaPoints(selectedChoice?.points)}</Badge>
                  {superBetSelected && <SuperBetTag />}
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
                  {/* <Badge>{formatNbaPoints(selectedChoice?.points)}</Badge> */}
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
                <StatLabel>{leftLabel}</StatLabel>
                <StatNumber>{leftVolume}</StatNumber>
              </Stat>
              <Stat textAlign="center">
                <StatLabel>{rightLabel}</StatLabel>
                <StatNumber>{rightVolume}</StatNumber>
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
