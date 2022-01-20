import { useBreakpointValue } from '@chakra-ui/react';
import { ResponsiveBar } from '@nivo/bar';
import { LegendAnchor } from '@nivo/legends';
import { ChoiceSelectionType } from '../../../generated/graphql-types';
import theme from '../../../theme';

export type BarData = {
  choiceType: ChoiceSelectionType;
  Regular: number;
  Super: 0;
};

type TrackerBarGraph = {
  data: BarData[];
  homeWin: boolean;
  awayWin: boolean;
};

//   const data = [
//     {
//       choiceType: 'HOME',
//       Regular: 3,
//       Super: 4,
//     },
//     {
//       choiceType: 'AWAY',
//       Regular: 9,
//       Super: 2,
//     },
//   ];

export default function TrackerBarGraph({ data, homeWin, awayWin }: TrackerBarGraph): JSX.Element {
  const marginRight = useBreakpointValue({ base: 20, md: 120 });
  const marginBottom = useBreakpointValue({ base: 130, md: 60 });
  const translateX = useBreakpointValue({ base: 0, md: 120 });
  const translateY = useBreakpointValue({ base: 120, md: 0 });
  const anchor = useBreakpointValue<LegendAnchor>({ base: 'bottom-left', md: 'bottom-right' });

  let colors = [theme.colors.gray['500'], theme.colors.gray['500']];

  if (homeWin) {
    colors = [theme.colors.red['400'], theme.colors.green['400']];
  }
  if (awayWin) {
    colors = [theme.colors.green['400'], theme.colors.red['400']];
  }

  const max = data.reduce((acc, cur) => {
    const total = cur.Regular + cur.Super;

    if (total > acc) {
      acc = total;
    }
    return acc;
  }, 0);

  return (
    <ResponsiveBar
      data={data}
      keys={['Regular', 'Super']}
      indexBy={'choiceType'}
      theme={{
        fontSize: 10,
        textColor: '#fff',
      }}
      colorBy="indexValue"
      colors={colors}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#fff',
          size: 1,
          padding: 1,
          stagger: true,
        },
      ]}
      fill={[
        {
          match: {
            id: 'Super',
          },
          id: 'dots',
        },
      ]}
      margin={{ top: 50, right: marginRight, bottom: marginBottom, left: 60 }}
      axisTop={undefined}
      axisRight={undefined}
      axisBottom={{
        tickSize: 1,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Game #',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickValues: max < 10 ? max : 10,
        tickSize: 1,
        tickPadding: 2,
        tickRotation: 0,
        legend: 'Picks / Super Picks',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      legends={[
        {
          dataFrom: 'indexes',
          anchor: anchor as LegendAnchor,
          direction: 'column',
          justify: false,
          translateX: translateX,
          translateY: translateY,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 85,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [],
        },
      ]}
      tooltip={function (): JSX.Element {
        return <></>;
      }}
    />
  );
}
