import {
  Box,
  Button,
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
  StatArrow,
  Badge,
  Image,
  useRadio,
  UseRadioProps,
  useRadioGroup,
  Tooltip,
  Tag,
  TagLabel,
  TagRightIcon,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsLightning } from 'react-icons/bs';
import {
  ChoiceSelectionType,
  Line,
  RuleSet,
  ContestContestTypeType,
  useMakeBetMutation,
  useDeleteBetMutation,
  useContestBetsQuery,
} from '../../generated/graphql-types';

import { betsRemaining, superBetsRemaining } from './BetsStatusLine';
import LineCardHeader, { formatATS } from './LineCardHeader';
import { LineCardFooterTicketCutouts } from './LineCardFooterTicketCutouts';

type RadioImageProps = {
  hasSelection: boolean;
  imageUrl?: string | null;
  altText?: string | null;
  spread?: number | null;
  isHome: boolean;
};

function RadioImage(props: RadioImageProps & UseRadioProps): JSX.Element {
  const { altText, imageUrl, hasSelection, spread, isHome, isDisabled } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" position="relative">
      <input {...input} />
      <Image
        {...checkbox}
        _checked={{ filter: 'none', border: '1px', borderColor: 'teal.500' }}
        filter={hasSelection ? 'grayscale(100%)' : 'none'}
        htmlHeight="100px"
        maxHeight="100px"
        htmlWidth="200px"
        objectFit="cover"
        bg={'gray.600'}
        borderRadius="md"
        cursor={isDisabled ? 'default' : 'pointer'}
        alt={altText || 'unknown'}
        src={imageUrl || ''}
        transitionProperty="transform"
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
        _hover={{ transform: isDisabled ? 'scale(1.0)' : 'scale(1.02)' }}
      />
      <Badge position="absolute" variant="solid" left="6px" top="6px">
        {formatATS(isHome, spread)}
      </Badge>
    </Box>
  );
}

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

type LineCardProps = {
  line: Line;
  userId?: string;
  contestId?: string;
  userHasEntered?: boolean;
  ruleSet?: RuleSet;
  contestType?: ContestContestTypeType | null;
};

export default function LineCard({
  line,
  userId,
  contestId,
  userHasEntered,
  ruleSet,
  contestType,
}: LineCardProps): JSX.Element {
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

  const radioGroup = (contestType?: ContestContestTypeType | null): JSX.Element => {
    if (contestType === ContestContestTypeType.NflAts) {
      const awayChoice = line.choices?.find((c) => c.selection === 'AWAY');
      const homeChoice = line.choices?.find((c) => c.selection === 'HOME');
      const choices = [];
      if (awayChoice) {
        choices.push(awayChoice);
      }
      if (homeChoice) {
        choices.push(homeChoice);
      }
      return (
        <>
          <HStack justifyContent="center" spacing={6} {...group}>
            {choices.map((choice) => {
              const radio = getRadioProps({ value: choice.id });
              return (
                <RadioImage
                  key={choice.id}
                  altText={choice.image?.altText}
                  imageUrl={choice.image?.image?.publicUrlTransformed}
                  hasSelection={formSelectedChoiceId !== '0'}
                  isDisabled={formDisabled}
                  spread={line.benchmark}
                  isHome={choice.selection === 'HOME'}
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
              <Tag size="md" colorScheme="purple" marginTop={4} width="110px">
                <TagLabel>Super Bet</TagLabel>
                <TagRightIcon as={BsLightning} />
              </Tag>
            </HStack>
          )}
        </>
      );
    }
    return (
      <RadioGroup onChange={setFormSelectedChoiceId} value={`${formSelectedChoiceId}`}>
        <HStack justifyContent="center" spacing={6} {...group}>
          {line.choices?.map((choice) => {
            return (
              <Radio
                key={choice.id}
                value={choice.id}
                isDisabled={formDisabled}
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
            Super Bet
          </Checkbox>
        </Center>
      </RadioGroup>
    );
  };

  const cardWidth = contestType === ContestContestTypeType.NflAts ? '440px' : '350px';

  return (
    <Tooltip label={!userId && 'Log in to bet'}>
      <Box
        maxW={cardWidth}
        width={'full'}
        bg={'gray.600'}
        border={usersBet ? '1px' : ''}
        borderColor={usersBet ? 'teal.500' : ''}
        boxShadow={usersBet ? 'dark-lg' : 'lg'}
        rounded={'md'}
        position={'relative'}
        margin={3}
        marginTop={6}
        padding={3}
      >
        <LineCardHeader line={line} contestType={contestType} />
        {/* middle form */}
        {(userId || !lineClosed) && (
          <Stack spacing={0} align={'left'} paddingTop={3}>
            {/* Form starts here */}
            {!lineClosed && radioGroup(contestType)}
            {lineClosed && (
              <>
                <Center>
                  {!usersBet && <Text color={'whiteAlpha.500'}>Unselected</Text>}
                  {usersBet && (
                    <HStack>
                      <Text color={'whiteAlpha.600'}>Your selection:</Text>{' '}
                      <Text fontSize="xl">{selectedChoice?.selection}</Text>
                      {superBetSelected && (
                        <Tag size="md" colorScheme="purple">
                          <TagLabel>Super Bet</TagLabel>
                          <TagRightIcon as={BsLightning} />
                        </Tag>
                      )}
                    </HStack>
                  )}
                </Center>

                {lineHasWinner(line) && (
                  <>
                    {usersBet && (
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
                  </>
                )}
              </>
            )}
          </Stack>
        )}
        {/* Footer starts here */}
        {userId && <Divider orientation="horizontal" paddingTop={3} borderStyle="dashed" />}
        <Stack spacing={0} align={'left'}>
          {userHasEntered && !lineClosed && (
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
            </>
          )}
          {lineClosed && !winningChoice && (
            <>
              <HStack justifyContent="space-evenly" paddingTop={3}>
                <Stat textAlign="center">
                  <StatLabel>
                    {contestType === ContestContestTypeType.NflAts ? 'Away' : 'Over'} Bet Volume
                  </StatLabel>
                  <StatNumber>
                    {contestType === ContestContestTypeType.NflAts ? awayBetVolume : overBetVolume}
                  </StatNumber>
                </Stat>
                <Stat textAlign="center">
                  <StatLabel>
                    {contestType === ContestContestTypeType.NflAts ? 'Home' : 'Under'} Bet Volume
                  </StatLabel>
                  <StatNumber>
                    {contestType === ContestContestTypeType.NflAts ? homeBetVolume : underBetVolume}
                  </StatNumber>
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
    </Tooltip>
  );
}
