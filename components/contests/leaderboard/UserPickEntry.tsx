import { Avatar, Badge, HStack } from '@chakra-ui/react';
import { Bet, Choice, Line } from '../../../generated/graphql-types';

type UserPickEntryProps = {
  line: Line;
  choice: Choice;
  bet: Bet;
};

export default function UserPickEntry({ bet, choice, line }: UserPickEntryProps): JSX.Element {
  return (
    <HStack key={bet.id}>
      <Avatar
        size="sm"
        bg="gray.500"
        name={line?.title || ''}
        src={line?.image?.image?.publicUrlTransformed || ''}
      />
      <div>
        {line.title} - {line.benchmark}
      </div>
      <Badge colorScheme={choice.selection === 'OVER' ? 'green' : 'red'}>{choice.selection}</Badge>
      {bet.isSuper && <Badge colorScheme="purple">Super</Badge>}
    </HStack>
  );
}
