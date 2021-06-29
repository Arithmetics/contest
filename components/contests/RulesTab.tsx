import { Center, OrderedList, ListItem } from '@chakra-ui/react';

export default function Rules(): JSX.Element {
  return (
    <Center>
      <OrderedList>
        <ListItem paddingTop={3}>Pick 10 over / under bets</ListItem>
        <ListItem paddingTop={3}>
          You get 5 &apos;super bets&apos; and 5 &apos;regular bets&apos;
        </ListItem>
        <ListItem paddingTop={3}>Regular bets are worth 1, super bets are worth 2</ListItem>
        <ListItem paddingTop={3}>Tie breaker one is:</ListItem>
        <ListItem paddingTop={3}>Tie breaker two is:</ListItem>
        <ListItem paddingTop={3}>Tie breaker three is:</ListItem>
        <ListItem paddingTop={3}>Winner takes 100% of the pot</ListItem>
      </OrderedList>
    </Center>
  );
}
