import { Image, HStack, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';
import { Line } from '../../generated/graphql-types';

function formatLineDate(line: Line): string {
  if (!line.closingTime) {
    return 'No closing time set';
  }
  return new Date(line.closingTime).toLocaleString();
}

type LineCardHeaderProps = {
  line: Line;
};

export default function LineCardHeader({ line }: LineCardHeaderProps): JSX.Element {
  return (
    <HStack>
      <Stat>
        <StatLabel>{line.title}</StatLabel>
        <StatNumber>{line.benchmark} Wins</StatNumber>
        <StatHelpText>Closes: {formatLineDate(line)}</StatHelpText>
      </Stat>
      <Image
        boxSize="75px"
        bg={'gray.600'}
        alt={line.image?.altText || 'unknown'}
        src={line.image?.image?.publicUrlTransformed || ''}
      />
    </HStack>
  );
}
