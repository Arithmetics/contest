import { Center, Flex, Stack, StackDivider, Icon, Text } from '@chakra-ui/react';
import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from 'react-icons/fa';
import {
  Contest,
  ContestContestTypeType,
  useContestByIdQuery,
} from '../../generated/graphql-types';
import Spinner from './BTBetsLoading';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: JSX.Element;
}

const Rule = ({ text, icon }: FeatureProps): JSX.Element => {
  return (
    <Stack direction={'row'} alignItems={'center'} marginTop={2}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'}>
        {icon}
      </Flex>
      <Text fontWeight={600} maxWidth={700}>
        {text}
      </Text>
    </Stack>
  );
};

const overUnderRules = (
  <>
    <Rule
      icon={<Icon as={FaDiceOne} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Pick 10 over / under bets'}
    />
    <Rule
      icon={<Icon as={FaDiceTwo} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'You get 5 super bets and 5 regular bets'}
    />
    <Rule
      icon={<Icon as={FaDiceThree} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Regular bets are worth 1 and super bets are worth 2'}
    />
    <Rule
      icon={<Icon as={FaDiceFour} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={
        'Tie breaker is the sum of the differentials of your bets to the result. (Ex: you take over 8.5 and the team finishes with 10, your get +1.5. User with highest total score wins)'
      }
    />
    <Rule
      icon={<Icon as={FaDiceFive} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={
        'If games are canceled, the win % of the final regular season record will be used to determine a win or loss grade'
      }
    />
    <Rule
      icon={<Icon as={FaDiceSix} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Winner take all'}
    />
  </>
);

const atsRules = (
  <>
    <Rule
      icon={<Icon as={FaDiceOne} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Pick all 13 NFL Playoff games against the spread.'}
    />
    <Rule
      icon={<Icon as={FaDiceTwo} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={' Picks lock in at game time.'}
    />
    <Rule
      icon={<Icon as={FaDiceThree} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={
        'You get 5 super bets and 8 regular bets. Regular bets are worth 1 and super bets are worth 2'
      }
    />
    <Rule
      icon={<Icon as={FaDiceFour} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Tie breaker one will be picking the Superbowl Total'}
    />
    <Rule
      icon={<Icon as={FaDiceFive} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={
        'Tie breaker two is picking Superbowl final scores. Differential of each score will be used (Prediction: SEA 27 - PIT 12, Result: PIT 20 - SEA 19, Final: (20-8 + 27-19 = 16)'
      }
    />
    <Rule
      icon={<Icon as={FaDiceSix} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Winner take all'}
    />
  </>
);

const nbaPlayoffRules = (
  <>
    <Rule
      icon={<Icon as={FaDiceOne} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={
        'Pick all series winners and game totals as well as Finals / Conference future winners.'
      }
    />
    <Rule
      icon={<Icon as={FaDiceTwo} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'You get 5 super picks which double the point value of your pick.'}
    />
    <Rule
      icon={<Icon as={FaDiceThree} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={
        'Top 50% of players (rounded down) will split the pot as a ratio of their total points scored.'
      }
    />
    <Rule
      icon={<Icon as={FaDiceFour} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Winner of the contest will receive a X entry bonus.'}
    />
    <Rule
      icon={<Icon as={FaDiceFive} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={
        'Any missing picks will be entered as the largest underdog or the under on the game total. (Ex: If you miss a game total, it will be entered as the under).'
      }
    />
    <Rule
      icon={<Icon as={FaDiceSix} color={'btbets.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Have fun.'}
    />
  </>
);

type RulesProps = {
  contestId?: string;
};

export default function Rules({ contestId }: RulesProps): JSX.Element {
  const { data, loading } = useContestByIdQuery({
    variables: {
      id: contestId || '',
    },
  });

  const contest = data?.contest as Contest | undefined;

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner />
      </Center>
    );
  }

  return (
    <Center p={3}>
      <Stack spacing={4} divider={<StackDivider borderColor={'gray.700'} />}>
        {contest?.contestType === ContestContestTypeType.NbaPlayoffs && nbaPlayoffRules}
        {contest?.contestType === ContestContestTypeType.NflAts && atsRules}
        {contest?.contestType === ContestContestTypeType.NbaOverUnder && overUnderRules}
        {contest?.contestType === ContestContestTypeType.NflOverUnder && overUnderRules}
      </Stack>
    </Center>
  );
}
