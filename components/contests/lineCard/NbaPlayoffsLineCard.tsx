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
  Text,
  VStack,
  useBreakpointValue,
  useRadioGroup,
  StatHelpText,
  Stat,
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

import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { betsRemaining, superBetsRemaining } from '../bets/NflAtsBetsStatusLine';
import { LineCardContainer } from './LineCardContainer';
import { LineCardFooterTicketCutouts } from './LineCardFooterTicketCutouts';
import { NbaPlayoffClosedLineContainer } from './NbaPlayoffClosedLineContainer';
import NbaPlayoffLineHeader from './NbaPlayoffLineHeader';
import RadioImage from './RadioImage';
import SuperBetTag from './SuperBetTag';
import { formatLineDate, formatNbaPoints, hasLineClosed, lineHasWinner } from './lineCardUtils';

type NflPlayoffsLineCardProps = {
  line: Line;
  userId?: string;
  contestId?: string;
  userHasEntered?: boolean;
  ruleSet?: RuleSet;
  contestType?: ContestContestTypeType | null;
};

export default function NbaPlayoffsLineCard({
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

  const pickAvailable = !contestBetsLoading && betsRemaining(usersBets, ruleSet) > 0;
  const superPickAvailable = !contestBetsLoading && superBetsRemaining(usersBets, ruleSet) > 0;

  const formDisabled = lineClosed || !!selectedChoice || !userHasEntered || !pickAvailable;

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
            colorScheme="btbets"
            isDisabled={formDisabled}
            width="100%"
            onChange={setFormSelectedChoiceId}
            value={formSelectedChoiceId.toString()}
          >
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={2} w="100%">
              {customChoices
                .sort((a, b) => (a?.points ?? 0) - (b?.points ?? 0))
                .map((choice) => {
                  return (
                    <GridItem w="100%" key={choice.id}>
                      <Radio value={choice.id} onChange={() => setFormSelectedChoiceId(choice.id)}>
                        <HStack gap="12px">
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
        <HStack justifyContent="center" spacing={6} {...group} paddingTop={3}>
          {homeAwayChoices.map((choice) => {
            const radio = getRadioProps({ value: choice.id });

            return (
              <RadioImage
                key={choice.id}
                altText={choice.image?.altText}
                imageUrl={choice.image?.image?.publicUrlTransformed}
                logoImageUrl={choice.secondaryImage?.image?.publicUrlTransformed}
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
              colorScheme="btbets"
              size="lg"
            >
              <HStack>
                <Text>Super Bet</Text> <BsLightning />
              </HStack>
            </Checkbox>
          </Center>
        )}
        {userId && superBetSelected && formDisabled ? (
          <HStack justifyContent="center" marginTop={3}>
            <SuperBetTag />
          </HStack>
        ) : (
          <HStack justifyContent="center" marginTop={3}>
            xxx
          </HStack>
        )}
      </Stack>
    );
  };

  if (lineClosed) {
    return (
      <NbaPlayoffClosedLineContainer userHasBet={!!usersBet} userIsLoggedIn={!!userId}>
        <VStack gap={4}>
          {/* points */}
          {lineHasWinner(line) && selectedChoice?.isWin && (
            <Badge variant="solid" colorScheme="btbets">
              {formatNbaPoints(selectedChoice?.points)}
              <ArrowUpIcon mb={'2px'} ml={'8px'} />
            </Badge>
          )}
          {lineHasWinner(line) && !selectedChoice?.isWin && (
            <Badge variant="solid" colorScheme="red">
              {formatNbaPoints(selectedChoice?.points)}
              <ArrowDownIcon mb={'2px'} ml={'8px'} />
            </Badge>
          )}
          {!lineHasWinner(line) && (
            <Badge px="20px" variant="solid">
              {formatNbaPoints(selectedChoice?.points)}
            </Badge>
          )}

          {/* logo */}
          {(usersBet?.choice?.selection === ChoiceSelectionType.Away ||
            usersBet?.choice?.selection === ChoiceSelectionType.Home) && (
            <HStack>
              <Image
                boxSize="50px"
                fit="scale-down"
                bg={'gray.600'}
                opacity={usersBet?.choice?.selection === ChoiceSelectionType.Away ? 1 : 0.4}
                alt={
                  line.choices?.find((c) => c.selection === ChoiceSelectionType.Away)
                    ?.secondaryImage?.altText || 'unknown'
                }
                src={
                  line?.choices?.find((c) => c.selection === ChoiceSelectionType.Away)
                    ?.secondaryImage?.image?.publicUrlTransformed ?? ''
                }
              />
              <Text>@</Text>
              <Image
                boxSize="50px"
                fit="scale-down"
                bg={'gray.600'}
                opacity={usersBet?.choice?.selection === ChoiceSelectionType.Home ? 1 : 0.4}
                alt={
                  line.choices?.find((c) => c.selection === ChoiceSelectionType.Home)
                    ?.secondaryImage?.altText || 'unknown'
                }
                src={
                  line?.choices?.find((c) => c.selection === ChoiceSelectionType.Home)
                    ?.secondaryImage?.image?.publicUrlTransformed ?? ''
                }
              />
            </HStack>
          )}
          {usersBet?.choice?.selection === ChoiceSelectionType.Custom && (
            <>
              <Image
                boxSize="100px"
                fit="scale-down"
                bg={'gray.600'}
                alt={selectedChoice?.image?.altText || 'unknown'}
                src={selectedChoice?.image?.image?.publicUrlTransformed || ''}
              />
              <Text fontSize="2xl" as="b" textAlign="center">
                {line?.title}
              </Text>
            </>
          )}
          {(usersBet?.choice?.selection === ChoiceSelectionType.Away ||
            usersBet?.choice?.selection === ChoiceSelectionType.Home) && (
            <Text fontSize="2xl" as="b" textAlign="center">
              {/* {line?.title} */}
              Series Winner
            </Text>
          )}
          {(usersBet?.choice?.selection === ChoiceSelectionType.Over ||
            usersBet?.choice?.selection === ChoiceSelectionType.Under) && (
            <HStack>
              <Image
                boxSize="50px"
                fit="scale-down"
                bg={'gray.600'}
                alt={
                  line.choices?.find((c) => c.selection === ChoiceSelectionType.Over)
                    ?.secondaryImage?.altText || 'unknown'
                }
                src={
                  line?.choices?.find((c) => c.selection === ChoiceSelectionType.Over)
                    ?.secondaryImage?.image?.publicUrlTransformed ?? ''
                }
              />
              <Text>@</Text>
              <Image
                boxSize="50px"
                fit="scale-down"
                bg={'gray.600'}
                alt={
                  line.choices?.find((c) => c.selection === ChoiceSelectionType.Under)
                    ?.secondaryImage?.altText || 'unknown'
                }
                src={
                  line?.choices?.find((c) => c.selection === ChoiceSelectionType.Under)
                    ?.secondaryImage?.image?.publicUrlTransformed ?? ''
                }
              />
            </HStack>
          )}
          {/* text */}

          {usersBet?.choice?.selection === ChoiceSelectionType.Over && (
            <VStack gap={1}>
              <Text fontSize="2xl" as="b" m={0}>
                Over {line.benchmark}
              </Text>
              <Text fontSize="md" as="b" mt={-2}>
                Games
              </Text>
            </VStack>
          )}
          {usersBet?.choice?.selection === ChoiceSelectionType.Under && (
            <VStack gap={1}>
              <Text fontSize="2xl" as="b" m={0}>
                Under {line.benchmark}
              </Text>
              <Text fontSize="md" as="b" mt={-2}>
                Games
              </Text>
            </VStack>
          )}
          {/* super */}
          {superBetSelected && (
            <HStack minHeight={3}>
              <SuperBetTag />
            </HStack>
          )}
        </VStack>
      </NbaPlayoffClosedLineContainer>
    );
  }

  // line is open
  return (
    <LineCardContainer userHasBet={!!usersBet} userIsLoggedIn={!!userId}>
      {/* Header */}
      <NbaPlayoffLineHeader line={line} />
      <Stat>
        <StatHelpText>Closes: {formatLineDate(line)}</StatHelpText>
      </Stat>
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
        )}
      </Stack>
    </LineCardContainer>
  );
}
