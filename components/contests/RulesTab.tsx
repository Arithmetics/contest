import { Center, Flex, Stack, StackDivider, Icon, Text } from '@chakra-ui/react';
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive } from 'react-icons/fa';
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: JSX.Element;
}

const Rule = ({ text, icon, iconBg }: FeatureProps): JSX.Element => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600} maxWidth={700}>
        {text}
      </Text>
    </Stack>
  );
};

export default function Rules(): JSX.Element {
  return (
    <Center>
      <Stack spacing={4} divider={<StackDivider borderColor={'gray.700'} />}>
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
          text={'Winner take all'}
        />
      </Stack>
    </Center>
  );
}
