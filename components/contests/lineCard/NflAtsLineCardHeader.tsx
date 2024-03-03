import {
  Image,
  HStack,
  Stat,
  StatNumber,
  StatHelpText,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Line } from '../../../generated/graphql-types';
import { formatLineDate } from './lineCardUtils';

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

export function formatNbaPoints(home: boolean, benchmark?: number | null): string {
  if (!benchmark) {
    return '(???)';
  }

  return `${benchmark ?? 0} Points`;
}

type NflAtsLineCardHeaderProps = {
  line: Line;
};

export default function NflAtsLineCardHeader({ line }: NflAtsLineCardHeaderProps): JSX.Element {
  const lineFontSize = useBreakpointValue({ base: 'md', md: 'xl' });

  const awayChoice = line?.choices?.find((c) => c.selection === 'AWAY');
  const homeChoice = line?.choices?.find((c) => c.selection === 'HOME');
  // const underChoice = line?.choices?.find((c) => c.selection === 'UNDER');
  // const overChoice = line?.choices?.find((c) => c.selection === 'OVER');

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
