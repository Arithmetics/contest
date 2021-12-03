import { Image, HStack, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';
import { Line, ContestContestTypeType } from '../../generated/graphql-types';

function formatLineDate(line: Line): string {
  if (!line.closingTime) {
    return 'No closing time set';
  }
  return new Date(line.closingTime).toLocaleString();
}

type LineCardHeaderProps = {
  line: Line;
  contestType?: ContestContestTypeType | null;
};

export default function LineCardHeader({ line, contestType }: LineCardHeaderProps): JSX.Element {
  if (contestType === ContestContestTypeType.NflAts) {
    return (
      <HStack>
        <Stat>
          <StatNumber>{line.title}</StatNumber>
          <StatHelpText>Closes: {formatLineDate(line)}</StatHelpText>
        </Stat>
      </HStack>
    );
  }

  return (
    <HStack>
      <Stat>
        <StatLabel>{line.title}</StatLabel>
        <StatNumber>{line.benchmark} Wins</StatNumber>
        <StatHelpText>Closes: {formatLineDate(line)}</StatHelpText>
      </Stat>
      <Image
        boxSize="75px"
        fit="scale-down"
        bg={'gray.600'}
        alt={line.image?.altText || 'unknown'}
        src={line.image?.image?.publicUrlTransformed || ''}
      />
    </HStack>
  );
}
