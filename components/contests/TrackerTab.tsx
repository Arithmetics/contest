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
      <Divider orientation="horizontal" paddingY={2} />
      <Flex justifyContent={'center'} marginTop={2}>
        <UserBetGroup line={line} choiceType={ChoiceSelectionType.Over} />
        <UserBetGroup line={line} choiceType={ChoiceSelectionType.Under} />
      </Flex>
    </Box>
  );
}

function WinsLossesLeftSection({ line }: GenericLineProps): JSX.Element {
  if (!line?.standings || line.standings.length === 0) {
    return (
      <Box>
        <Text>Not Started</Text>
      </Box>
    );
  }
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
      <Text>
        {winsNeeded} {winsNeeded === 1 ? 'win' : 'wins'} from OVER
      </Text>
      <Text>
        {lossesNeeded} more {lossesNeeded === 1 ? 'loss' : 'losses'} from UNDER
      </Text>
    </Box>
  );
}

type UserBetGroupProps = {
  line?: Line;
  choiceType: ChoiceSelectionType;
};

function UserBetGroup({ line, choiceType }: UserBetGroupProps): JSX.Element {
  return (
    <>
      {line?.choices
        ?.filter((c) => c.selection === choiceType)
        .map((choice) => {
          return (
            <Box key={choice.id} flexGrow={1} marginX={2} padding={2}>
              <Text paddingBottom={1}>{choiceType} Bets</Text>
              <Box display={'flex'} flexWrap={'wrap'}>
                {!choice.bets || choice.bets?.length === 0 ? <Text>---</Text> : undefined}
                {choice.bets?.map((bet) => {
                  return (
                    <Box key={bet.user?.id} marginX={1}>
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
        })}{' '}
    </>
  );
}
