import { Center, Flex, Stack, StackDivider, Icon, Text, Spinner } from '@chakra-ui/react';
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

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: JSX.Element;
}

const Rule = ({ text, icon, iconBg }: FeatureProps): JSX.Element => {
  return (
    <Stack direction={'row'} alignItems={'center'} marginTop={2}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
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
      icon={<Icon as={FaDiceOne} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Pick 10 over / under bets'}
    />
    <Rule
      icon={<Icon as={FaDiceTwo} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'You get 5 super bets and 5 regular bets'}
    />
    <Rule
      icon={<Icon as={FaDiceThree} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Regular bets are worth 1 and super bets are worth 2'}
    />
    <Rule
      icon={<Icon as={FaDiceFour} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={
        'Tie breaker is the sum of the differentials of your bets to the result. (Ex: you take over 8.5 and the team finishes with 10, your get +1.5. User with highest total score wins)'
      }
    />
    <Rule
      icon={<Icon as={FaDiceFive} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={
        'If games are canceled, the win % of the final regular season record will be used to determine a win or loss grade'
      }
    />
    <Rule
      icon={<Icon as={FaDiceSix} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Winner take all'}
    />
  </>
);

const atsRules = (
  <>
    <Rule
      icon={<Icon as={FaDiceOne} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Pick all 13 NFL Playoff games against the spread.'}
    />
    <Rule
      icon={<Icon as={FaDiceTwo} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={' Picks lock in at game time.'}
    />
    <Rule
      icon={<Icon as={FaDiceThree} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={
        'You get 5 super bets and 8 regular bets. Regular bets are worth 1 and super bets are worth 2'
      }
    />
    <Rule
      icon={<Icon as={FaDiceFour} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Tie breaker one will be picking the Superbowl Total'}
    />
    <Rule
      icon={<Icon as={FaDiceFive} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={
        'Tie breaker two is a custom Superbowl Prop Sheet I will send out to all eligble. Most props hit wins.'
      }
    />
    <Rule
      icon={<Icon as={FaDiceSix} color={'teal.500'} w={5} h={5} />}
      iconBg={'gray.700'}
      text={'Winner take all'}
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
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  return (
    <Center p={3}>
      <Stack spacing={4} divider={<StackDivider borderColor={'gray.700'} />}>
        {contest?.contestType === ContestContestTypeType.NflAts ? atsRules : overUnderRules}
      </Stack>
    </Center>
  );
}
