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
  VStack,
} from '@chakra-ui/react';
import { ResponsiveLine, Serie } from '@nivo/line';
import { Contest, Line, useTrackerStatusQuery } from '../../generated/graphql-types';

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
  console.log(data);
  return (
    <Center>
      <VStack>
        {data?.allLines?.map((line) => {
          return <TrackerGraphCard key={line?.id} line={line as Line} />;
        })}
      </VStack>
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
  console.log(data);
  return (
    <ResponsiveLine
      data={data}
      theme={{
        fontSize: 1,
        textColor: '#fff',
      }}
      margin={{ top: 50, right: 50, bottom: 60, left: 60 }}
      xScale={{ type: 'linear', min: 0, max: 17 }}
      yScale={{ type: 'linear', min: 0, max: 17, reverse: false }}
      // yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 1,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'week',
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
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      // legends={[
      //   {
      //     anchor: 'bottom-right',
      //     direction: 'column',
      //     justify: false,
      //     translateX: 100,
      //     translateY: 0,
      //     itemsSpacing: 0,
      //     itemDirection: 'left-to-right',
      //     itemWidth: 80,
      //     itemHeight: 20,
      //     itemOpacity: 0.75,
      //     symbolSize: 12,
      //     symbolShape: 'circle',
      //     symbolBorderColor: 'rgba(0, 0, 0, .5)',
      //     effects: [],
      //   },
      // ]}
    />
  );
}

function prepareLineStandingsForGraph(line: Line): Serie[] {
  const standings = line?.standings;
  if (!standings || standings.length === 0) {
    return [];
  }
  const serieResults: Serie = {
    id: 'standing',
    data: [],
  };

  const serieBenchmark: Serie = {
    id: 'benchmark',
    data: [],
  };

  standings?.forEach((standing) => {
    serieResults.data.push({ x: standing.gamesPlayed, y: standing.wins });
    serieBenchmark.data.push({ x: standing.gamesPlayed, y: line.benchmark });
  });

  return [serieResults, serieBenchmark];
}
