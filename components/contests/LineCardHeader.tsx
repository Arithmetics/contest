import {
  Image,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Line, ContestContestTypeType } from '../../generated/graphql-types';

export function formatATS(home: boolean, benchmark?: number | null): string {
  if (!benchmark) {
    return '(???)';
  }

  const xBenchmark = home ? benchmark * -1 : benchmark;

  if (xBenchmark < 0) {
    return `(${String(xBenchmark)})`;
  }
  return `(+${xBenchmark})`;
}

function formatLineDate(line: Line): string {
  if (!line.closingTime) {
    return 'No closing time set';
  }
  return new Date(line.closingTime).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  });
}

type LineCardHeaderProps = {
  line: Line;
  contestType?: ContestContestTypeType | null;
};

export default function LineCardHeader({ line, contestType }: LineCardHeaderProps): JSX.Element {
  const lineFontSize = useBreakpointValue({ base: 'md', md: 'xl' });

  if (contestType === ContestContestTypeType.NflAts) {
    const awayChoice = line?.choices?.find((c) => c.selection === 'AWAY');
    const homeChoice = line?.choices?.find((c) => c.selection === 'HOME');
    return (
      <HStack>
        <Stat>
          <StatNumber>
            <HStack>
              <Text fontSize={lineFontSize}>{formatATS(false, line.benchmark)}</Text>
              {awayChoice && (
                <Image
                  boxSize="40px"
                  fit="scale-down"
                  bg={'gray.600'}
                  alt={awayChoice.secondaryImage?.altText || 'unknown'}
                  src={awayChoice.secondaryImage?.image?.publicUrlTransformed || ''}
                />
              )}
              <Text fontSize={lineFontSize}>@</Text>
              {homeChoice && (
                <Image
                  boxSize="40px"
                  fit="scale-down"
                  bg={'gray.600'}
                  alt={homeChoice.secondaryImage?.altText || 'unknown'}
                  src={homeChoice.secondaryImage?.image?.publicUrlTransformed || ''}
                />
              )}
              <Text fontSize={lineFontSize}>{formatATS(true, line.benchmark)}</Text>
            </HStack>
          </StatNumber>
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
