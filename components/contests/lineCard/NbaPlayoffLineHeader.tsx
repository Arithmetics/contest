import { Text, useBreakpointValue } from '@chakra-ui/react';
import { Line } from '../../../generated/graphql-types';

type NbaPlayoffLineCardHeaderProps = {
  line: Line;
};

export default function NbaPlayoffLineCardHeader({
  line,
}: NbaPlayoffLineCardHeaderProps): JSX.Element {
  const lineFontSize = useBreakpointValue({ base: 'md', md: 'xl' });

  const awayChoice = line?.choices?.find((c) => c.selection === 'AWAY');
  const homeChoice = line?.choices?.find((c) => c.selection === 'HOME');
  const underChoice = line?.choices?.find((c) => c.selection === 'UNDER');
  const overChoice = line?.choices?.find((c) => c.selection === 'OVER');
  const customChoices = line?.choices?.filter((c) => c.selection === 'CUSTOM');

  if (customChoices && customChoices.length > 0) {
    return <Text fontSize={lineFontSize}>{line.title}</Text>;
  }

  if (awayChoice || homeChoice) {
    return <Text fontSize={lineFontSize}>{line.title}</Text>;
  }

  if (overChoice || underChoice) {
    return (
      <Text fontSize={lineFontSize}>
        {line.title} - {line.benchmark} Games
      </Text>
    );
  }
  return <></>;
}
