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

export default function NflAtsTotalLineCardHeader({
  line,
}: NflAtsLineCardHeaderProps): JSX.Element {
  const lineFontSize = useBreakpointValue({ base: 'md', md: 'xl' });

  //   const awayChoice = line?.choices?.find((c) => c.selection === 'AWAY');
  //   const homeChoice = line?.choices?.find((c) => c.selection === 'HOME');
  const underChoice = line?.choices?.find((c) => c.selection === 'UNDER');
  const overChoice = line?.choices?.find((c) => c.selection === 'OVER');

  return (
    <HStack>
      <Stat>
        <StatNumber>
          <HStack>
            {underChoice && (
              <Image
                boxSize="40px"
                fit="scale-down"
                // bg={'gray.600'}
                alt={underChoice.secondaryImage?.altText || 'unknown'}
                src={
                  underChoice.secondaryImage?.image?.publicUrlTransformed ||
                  'https://placehold.jp/120x120.png'
                }
              />
            )}
            <Text fontSize={lineFontSize}>@</Text>
            {overChoice && (
              <Image
                boxSize="40px"
                fit="scale-down"
                // bg={'gray.600'}
                alt={overChoice.secondaryImage?.altText || 'unknown'}
                src={
                  overChoice.secondaryImage?.image?.publicUrlTransformed ||
                  'https://placehold.jp/120x120.png'
                }
              />
            )}
            <Text fontSize={lineFontSize}>Total Points: {line.benchmark}</Text>
          </HStack>
        </StatNumber>
        <StatHelpText>Closes: {formatLineDate(line)}</StatHelpText>
      </Stat>
    </HStack>
  );
}
