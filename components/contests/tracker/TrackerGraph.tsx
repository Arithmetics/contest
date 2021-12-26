import { Box, useBreakpointValue } from '@chakra-ui/react';
import { ResponsiveLine, Serie, PointTooltipProps } from '@nivo/line';
import { LegendAnchor } from '@nivo/legends';
import { Line } from '../../../generated/graphql-types';
import theme from '../../../theme';

type ResponsiveLineProps = {
  data: Serie[];
};

export default function TrackerGraph({ data }: ResponsiveLineProps): JSX.Element {
  const marginRight = useBreakpointValue({ base: 20, md: 120 });
  const marginBottom = useBreakpointValue({ base: 130, md: 60 });
  const translateX = useBreakpointValue({ base: 0, md: 120 });
  const translateY = useBreakpointValue({ base: 120, md: 0 });
  const anchor = useBreakpointValue<LegendAnchor>({ base: 'bottom-left', md: 'bottom-right' });

  const maxX = data.reduce((acc, cur) => {
    const maxData = cur.data.reduce((acc2, cur2) => {
      const xVal = cur2?.x || 0;
      if (xVal > acc2 && typeof xVal === 'number') {
        acc2 = xVal;
      }
      return acc2;
    }, 0);

    if (maxData > acc) {
      acc = maxData;
    }
    return acc;
  }, 0);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        fontSize: 10,
        textColor: '#fff',
      }}
      colors={[
        theme.colors.red['400'],
        theme.colors.green['400'],
        theme.colors.yellow['400'],
        theme.colors.blue['200'],
        theme.colors.cyan['400'],
      ]}
      margin={{ top: 50, right: marginRight, bottom: marginBottom, left: 60 }}
      xScale={{ type: 'linear', min: 1, max: maxX }}
      yScale={{ type: 'linear', min: 0, max: 1, reverse: false }}
      yFormat=" >-.2f"
      xFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickValues: maxX,
        tickSize: 1,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Game #',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 1,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'win %',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointBorderWidth={2}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
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
      tooltip={function ({ point }: PointTooltipProps): JSX.Element {
        return (
          <Box
            padding={1}
            border={1}
            bg={'gray.700'}
            borderColor={'teal.500'}
            boxShadow={'dark-lg'}
            rounded={'md'}
          >
            {point.serieId} game {point.data.x} - {point.data.y}
          </Box>
        );
      }}
    />
  );
}

function formatDivide(x?: number | null, y?: number | null): string {
  return ((x || 0) / (y || 1)).toFixed(3);
}

export function prepareLineStandingsForGraph(line: Line): Serie[] {
  const standings = line?.standings;
  if (!standings || standings.length === 0) {
    return [];
  }
  const serieResults: Serie = {
    id: 'Result',
    data: [],
  };

  const serieBenchmark: Serie = {
    id: 'Benchmark',
    data: [],
  };

  const bestPossible: Serie = {
    id: 'Best possible',
    data: [],
  };

  const worstPossible: Serie = {
    id: 'Worst possible',
    data: [],
  };

  standings?.forEach((standing, i) => {
    const { gamesPlayed, wins, totalGames } = standing;
    const winPerResults = formatDivide(wins, gamesPlayed);
    const winPerBenchmark = formatDivide(line.benchmark, totalGames);
    // normal data
    serieResults.data.push({ x: gamesPlayed, y: winPerResults });
    // if first standing in list
    if (i === 0) {
      serieBenchmark.data.push({ x: gamesPlayed, y: winPerBenchmark });
    }
    // if last standing in list
    if (i === standings.length - 1) {
      const gamesRemaining = (totalGames || 1) - (gamesPlayed || 1);
      const potentialWins = gamesRemaining + (wins || 0);
      const potentialWinPer = formatDivide(potentialWins, totalGames);
      const potentialLossPer = formatDivide(wins, totalGames);
      bestPossible.data.push({ x: totalGames, y: potentialWinPer });
      worstPossible.data.push({ x: totalGames, y: potentialLossPer });

      serieBenchmark.data.push({ x: totalGames, y: winPerBenchmark });
    }
  });

  return [worstPossible, bestPossible, serieBenchmark, serieResults];
}
