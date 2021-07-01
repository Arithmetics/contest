import {
  Center,
  Spinner,
  Box,
  HStack,
  Stat,
  Image,
  Divider,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { ResponsiveLine, Serie, PointTooltipProps } from '@nivo/line';
import { Contest, Line, useTrackerStatusQuery } from '../../generated/graphql-types';
import theme from '../../theme';

type TrackerTabProps = {
  contest?: Contest;
};

export default function TrackerTab({ contest }: TrackerTabProps): JSX.Element {
  const { data, loading } = useTrackerStatusQuery({ variables: { contestId: contest?.id || '' } });

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  return (
    <Center>
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
        {data?.allLines?.map((line) => {
          return <TrackerGraphCard key={line?.id} line={line as Line} />;
        })}
      </Box>
    </Center>
  );
}

type TrackerGraphCardProps = {
  line?: Line;
};

function TrackerGraphCard({ line }: TrackerGraphCardProps): JSX.Element {
  return (
    <Box
      maxW={'100%'}
      width={'700px'}
      bg={'gray.600'}
      border={'1px'}
      borderColor={'teal.500'}
      boxShadow={'dark-lg'}
      rounded={'md'}
      position={'relative'}
      margin={4}
      marginTop={6}
      p={4}
    >
      <HStack>
        <Stat>
          <StatLabel>{line?.title}</StatLabel>
          <StatNumber>{line?.benchmark} Wins</StatNumber>
        </Stat>
        <Image
          boxSize="75px"
          bg={'gray.600'}
          src="https://i.ibb.co/XZp4L8W/pngjoy-com-jacksonville-jaguars-jacksonville-jaguars-old-logo-png-png-6702266.png"
        />
      </HStack>
      <Divider orientation="horizontal" paddingTop={3} />
      <Box height={'300px'} width={'100%'}>
        <MyResponsiveLine data={prepareLineStandingsForGraph(line as Line)} />
      </Box>
    </Box>
  );
}

type XX = {
  data: Serie[];
};

function MyResponsiveLine({ data }: XX): JSX.Element {
  return (
    <ResponsiveLine
      data={data}
      theme={{
        fontSize: 10,
        textColor: '#fff',
      }}
      colors={[
        theme.colors.red['400'],
        theme.colors.blue['500'],
        theme.colors.green['400'],
        theme.colors.yellow['400'],
        theme.colors.cyan['400'],
      ]}
      margin={{ top: 50, right: 110, bottom: 60, left: 60 }}
      xScale={{ type: 'linear', min: 1, max: 17 }}
      yScale={{ type: 'linear', min: 0, max: 1, reverse: false }}
      yFormat=" >-.2f"
      xFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickValues: 17,
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
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
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

function prepareLineStandingsForGraph(line: Line): Serie[] {
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
    serieBenchmark.data.push({ x: gamesPlayed, y: winPerBenchmark });
    // if last standing in list
    if (i === standings.length - 1) {
      const gamesRemaining = (totalGames || 1) - (gamesPlayed || 1);
      const potentialWins = gamesRemaining + (wins || 0);
      const potentialWinPer = formatDivide(potentialWins, totalGames);
      const potentialLossPer = formatDivide(wins, totalGames);
      bestPossible.data.push({ x: totalGames, y: potentialWinPer });
      worstPossible.data.push({ x: totalGames, y: potentialLossPer });
    }
  });

  return [worstPossible, bestPossible, serieBenchmark, serieResults];
}
