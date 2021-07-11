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
  Avatar,
  Text,
  Flex,
  Tooltip,
  AvatarBadge,
} from '@chakra-ui/react';
import {
  Contest,
  ChoiceSelectionType,
  Line,
  useTrackerStatusQuery,
} from '../../generated/graphql-types';
import TrackerGraph, { prepareLineStandingsForGraph } from './TrackerGraph';

function winsForOver(line?: Line): number {
  const standings = line?.standings;
  const benchmark = line?.benchmark;
  if (!standings || standings.length === 0) {
    return -1;
  }

  const { gamesPlayed, wins, totalGames } = standings[standings.length - 1];

  const winsNeeded = Math.ceil((benchmark || 0) - (wins || 0));
  const gamesRemaining = (totalGames || 0) - (gamesPlayed || 0);
  if (gamesRemaining < winsNeeded) {
    return -1;
  }
  return Math.max(winsNeeded, 0);
}

function lossesForUnder(line?: Line): number {
  const standings = line?.standings;
  const benchmark = line?.benchmark;
  if (!standings || standings.length === 0) {
    return -1;
  }

  const { gamesPlayed, wins, totalGames } = standings[standings.length - 1];
  const lossBenchmark = Math.ceil((totalGames || 0) - (benchmark || 0));

  const losses = (gamesPlayed || 0) - (wins || 0);
  const gamesRemaining = (totalGames || 0) - (gamesPlayed || 0);

  const lossesNeeded = lossBenchmark - losses;
  if (gamesRemaining < lossesNeeded) {
    return -1;
  }
  return Math.max(lossesNeeded, 0);
}

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
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'stretch'}>
        {data?.allLines?.map((line) => {
          return <TrackerGraphCard key={line?.id} line={line as Line} />;
        })}
      </Box>
    </Center>
  );
}

type GenericLineProps = {
  line?: Line;
};

function TrackerGraphCard({ line }: GenericLineProps): JSX.Element {
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
        <Image
          boxSize="75px"
          bg={'gray.600'}
          src="https://i.ibb.co/XZp4L8W/pngjoy-com-jacksonville-jaguars-jacksonville-jaguars-old-logo-png-png-6702266.png"
        />
        <Stat marginLeft={4}>
          <StatLabel>{line?.title}</StatLabel>
          <StatNumber>{line?.benchmark} Wins</StatNumber>
        </Stat>
        <WinsLossesLeftSection line={line} />
      </HStack>
      <Divider orientation="horizontal" paddingTop={3} />
      <Box height={'300px'} width={'100%'}>
        <TrackerGraph data={prepareLineStandingsForGraph(line as Line)} />
      </Box>
      <Flex justifyContent={'center'}>
        {line?.choices
          ?.filter((c) => c.selection === ChoiceSelectionType.Over)
          .map((choice) => {
            return (
              <Box key={choice.id} flexGrow={1} marginX={2} padding={2}>
                <Text paddingBottom={1}>{ChoiceSelectionType.Over} Bets</Text>
                <Box display={'flex'} flexWrap={'wrap'}>
                  {choice.bets?.map((bet) => {
                    return (
                      <Box key={bet.user?.id}>
                        <Tooltip label={bet.user?.userName}>
                          <Avatar
                            size="sm"
                            name={bet.user?.userName || ''}
                            src={bet.user?.avatarImage?.image?.publicUrlTransformed || ''}
                          >
                            {/* for super bets */}
                            <AvatarBadge borderColor="papayawhip" bg="tomato" boxSize="1.25em" />
                          </Avatar>
                        </Tooltip>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        {line?.choices
          ?.filter((c) => c.selection === ChoiceSelectionType.Under)
          .map((choice) => {
            return (
              <Box key={choice.id} flexGrow={1} marginX={2} padding={2}>
                <Text paddingBottom={1}>{ChoiceSelectionType.Under} Bets</Text>
                <Box display={'flex'} flexWrap={'wrap'}>
                  {choice.bets?.map((bet) => {
                    return (
                      <Box key={bet.user?.id}>
                        <Tooltip label={bet.user?.userName}>
                          <Avatar
                            size="sm"
                            name={bet.user?.userName || ''}
                            src={bet.user?.avatarImage?.image?.publicUrlTransformed || ''}
                          >
                            {/* for super bets */}
                            <AvatarBadge bg={'teal.500'} boxSize="1.25em" />
                          </Avatar>
                        </Tooltip>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
      </Flex>
    </Box>
  );
}

function WinsLossesLeftSection({ line }: GenericLineProps): JSX.Element {
  const winsNeeded = winsForOver(line);
  const lossesNeeded = lossesForUnder(line);

  if (winsNeeded < 0) {
    return (
      <Box>
        <Text>UNDER Locked</Text>
      </Box>
    );
  }
  if (lossesNeeded < 0) {
    return (
      <Box>
        <Text>OVER Locked</Text>
      </Box>
    );
  }
  return (
    <Box>
      <Text>{winsNeeded} wins to lock OVER</Text>
      <Text>{lossesNeeded} more losses to lock UNDER</Text>
    </Box>
  );
}
