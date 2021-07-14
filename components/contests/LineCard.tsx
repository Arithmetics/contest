import {
  Box,
  Button,
  Image,
  Stack,
  Center,
  HStack,
  Checkbox,
  RadioGroup,
  Radio,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  ColorProps,
  StatHelpText,
  StatArrow,
  Badge,
} from '@chakra-ui/react';
import { useState } from 'react';

import {
  ChoiceSelectionType,
  Line,
  RuleSet,
  useMakeBetMutation,
  useDeleteBetMutation,
  useUsersContestBetsQuery,
} from '../../generated/graphql-types';
import { LEADERBOARD_QUERY, USERS_BETS_QUERY } from '../queries';

import { betsRemaining, superBetsRemaining } from './BetsStatusLine';

export function hasLineClosed(line: Line): boolean {
  if (!line.closingTime) {
    return false;
  }
  const lineClosed = Date.parse(line.closingTime);
  const now = Date.now();
  return lineClosed - now < 0 ? true : false;
}

export function lineHasWinner(line: Line): boolean {
  if (!line.choices || line.choices.length === 0) {
    return false;
  }

  return line.choices.some((c) => c.isWin);
}

function formatLineDate(line: Line): string {
  if (!line.closingTime) {
    return 'No closing time set';
  }
  return new Date(line.closingTime).toLocaleString();
}

type LineCardProps = {
  line: Line;
  userId?: string;
  contestId?: string;
  userHasEntered?: boolean;
  ruleSet?: RuleSet;
};

export default function LineCard({
  line,
  userId,
  contestId,
  userHasEntered,
  ruleSet,
}: LineCardProps): JSX.Element {
  const { data: usersBetsData, loading: usersBetsLoading } = useUsersContestBetsQuery({
    variables: { contestId: contestId || '', userId: userId || '' },
  });

  const [makeBet, { loading: makeBetLoading }] = useMakeBetMutation({
    refetchQueries: [
      { query: LEADERBOARD_QUERY, variables: { contestId: contestId || '' } },
      { query: USERS_BETS_QUERY, variables: { contestId: contestId || '', userId: userId || '' } },
    ],
  });
  const [deleteBet, { loading: deleteBetLoading }] = useDeleteBetMutation({
    update: (cache, payload) => {
      return cache.evict({
        id:
          cache.identify({
            __typename: 'Bet',
            id: payload.data?.deleteBet?.id || '',
          }) || '',
      });
    },
  });

  const selectedChoice = line.choices?.find((c) => c.bets?.some((b) => b.user?.id === userId));
  const usersBet = selectedChoice?.bets?.find((b) => b.user?.id === userId);

  const [formSelectedChoiceId, setFormSelectedChoiceId] = useState<string | number>(
    selectedChoice?.id || '0'
  );

  const [superBetSelected, setSuperBetSelected] = useState<boolean>(usersBet?.isSuper || false);

  const lineClosed = hasLineClosed(line);
  const winningChoice = line.choices?.find((c) => c.isWin);
  const losingChoice = line.choices?.find((c) => !c.isWin);

  const winningBetCount = winningChoice?.bets?.length || 0;
  const losingBetCount = losingChoice?.bets?.length || 0;

  const pickAvailable = !usersBetsLoading && betsRemaining(usersBetsData?.allBets, ruleSet) > 0;
  const superPickAvailable =
    !usersBetsLoading && superBetsRemaining(usersBetsData?.allBets, ruleSet) > 0;

  const formDisabled = lineClosed || !!selectedChoice || !userHasEntered || !pickAvailable;

  const overBetVolume = line.choices
    ?.filter((c) => c.selection === ChoiceSelectionType.Over)
    .reduce((acc, c) => {
      const overCount = c.bets?.length;
      return acc + (overCount || 0);
    }, 0);

  const underBetVolume = line.choices
    ?.filter((c) => c.selection === ChoiceSelectionType.Under)
    .reduce((acc, c) => {
      const overCount = c.bets?.length;
      return acc + (overCount || 0);
    }, 0);

  const radioTextColor = (choiceId: string): ColorProps => {
    if ((!lineClosed && !userHasEntered) || formDisabled) {
      return {
        color: 'whiteAlpha.500',
      };
    }
    if (!lineClosed) {
      return {};
    }
    if (!winningChoice?.id) {
      return {
        color: 'whiteAlpha.500',
      };
    }
    return {
      color: winningChoice?.id === choiceId ? 'green.400' : 'red.400',
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

  return (
    <Box
      maxW={'500px'}
      width={'full'}
      bg={'gray.600'}
      border={usersBet ? '1px' : ''}
      borderColor={usersBet ? 'teal.500' : ''}
      boxShadow={usersBet ? 'dark-lg' : 'lg'}
      rounded={'md'}
      position={'relative'}
      margin={4}
      marginTop={6}
      p={4}
    >
      <HStack>
        <Stat>
          <StatLabel>{line.title}</StatLabel>
          <StatNumber>{line.benchmark} Wins</StatNumber>
          <StatHelpText>Closes: {formatLineDate(line)}</StatHelpText>
        </Stat>
        <Image
          boxSize="75px"
          bg={'gray.600'}
          src="https://i.ibb.co/XZp4L8W/pngjoy-com-jacksonville-jaguars-jacksonville-jaguars-old-logo-png-png-6702266.png"
        />
      </HStack>
      <Divider orientation="horizontal" paddingTop={3} />
      <Stack spacing={0} align={'left'} paddingTop={3}>
        {/* Form starts here */}
        {!lineClosed && (
          <RadioGroup onChange={setFormSelectedChoiceId} value={formSelectedChoiceId}>
            <HStack justifyContent="center" spacing={6}>
              {line.choices?.map((choice) => {
                return (
                  <Radio
                    key={choice.id}
                    value={choice.id}
                    disabled={formDisabled}
                    colorScheme="teal"
                    size="lg"
                  >
                    <Text {...radioTextColor(choice.id)}>{choice.selection}</Text>
                  </Radio>
                );
              })}
            </HStack>
            <Center>
              <Checkbox
                onChange={() => setSuperBetSelected(!superBetSelected)}
                isChecked={superBetSelected}
                marginTop={4}
                isDisabled={formDisabled || !superPickAvailable}
                colorScheme="teal"
                size="lg"
              >
                Super Pick
              </Checkbox>
            </Center>
          </RadioGroup>
        )}
        {lineClosed && (
          <>
            <Center>
              {!usersBet && <Text color={'whiteAlpha.500'}>Unselected</Text>}
              {usersBet && (
                <HStack>
                  <Text color={'whiteAlpha.600'}>Your selection:</Text>{' '}
                  <Text fontSize="2xl">{selectedChoice?.selection}</Text>
                </HStack>
              )}
              {superBetSelected && (
                <Badge marginLeft={2} colorScheme="purple">
                  Super Bet
                </Badge>
              )}
            </Center>

            {lineHasWinner(line) && (
              <>
                {usersBet && (
                  <Center>
                    <HStack>
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
              </>
            )}
          </>
        )}
        {/* Footer starts here */}
        <Divider orientation="horizontal" paddingTop={3} />
        {userHasEntered && !lineClosed && (
          <>
            <HStack display="flex" spacing={3} paddingTop={3} justifyContent="center">
              {!selectedChoice ? (
                <Button
                  onClick={onClickMakeBet}
                  disabled={!pickAvailable || makeBetLoading || formSelectedChoiceId === '0'}
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
                  disabled={deleteBetLoading}
                  isLoading={deleteBetLoading}
                  // flexGrow
                  variant="outline"
                  bg="red.500"
                  color={'white'}
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
        {lineClosed && !winningChoice && (
          <>
            <HStack justifyContent="space-evenly" paddingTop={3}>
              <Stat textAlign="center">
                <StatLabel>Bet Volume</StatLabel>
                <StatNumber>{overBetVolume}</StatNumber>
              </Stat>
              <Stat textAlign="center">
                <StatLabel>Bet Volume</StatLabel>
                <StatNumber>{underBetVolume}</StatNumber>
              </Stat>
            </HStack>
          </>
        )}
        {lineClosed && winningChoice && (
          <>
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
          </>
        )}
      </Stack>
    </Box>
  );
}
