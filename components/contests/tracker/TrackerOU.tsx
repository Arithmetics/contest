import {
  Center,
  Box,
  HStack,
  Stat,
  Divider,
  StatLabel,
  StatNumber,
  Avatar,
  Text,
  Flex,
  Tooltip,
  AvatarBadge,
  Badge,
} from '@chakra-ui/react';
import {
  ChoiceSelectionType,
  Line,
  useTrackerStatusQuery,
  useContestBetsQuery,
} from '../../../generated/graphql-types';
import TrackerGraph, { prepareLineStandingsForGraph } from './TrackerGraph';
import Spinner from '../BTBetsLoading';
import OptimizedImage from '../../OptimizedImage';

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

type TrackerOUProps = {
  contestId?: string;
};

export default function TrackerOU({ contestId }: TrackerOUProps): JSX.Element {
  const { data, loading } = useTrackerStatusQuery({ variables: { contestId: contestId || '' } });

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner />
      </Center>
    );
  }

  return (
    <Center>
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'stretch'}>
        {data?.lines?.map((line) => {
          return <TrackerGraphCard key={line?.id} line={line as Line} contestId={contestId} />;
        })}
      </Box>
    </Center>
  );
}

type GenericLineProps = {
  contestId?: string;
  line?: Line;
};

function TrackerGraphCard({ contestId, line }: GenericLineProps): JSX.Element {
  return (
    <Box
      maxW={'95vw'}
      width={'700px'}
      border={'1px'}
      borderColor={'btbets.500'}
      boxShadow={'dark-lg'}
      rounded={'md'}
      position={'relative'}
      margin={4}
      marginTop={6}
      p={4}
    >
      <HStack maxW={'100%'}>
        <OptimizedImage
          boxSize="75px"
          fit="scale-down"
          alt={line?.image?.altText || 'unknown'}
          src={line?.image?.image?.publicUrlTransformed || ''}
        />
        <Stat marginLeft={4}>
          <StatLabel>{line?.title}</StatLabel>
          <StatNumber>{line?.benchmark} Wins</StatNumber>
        </Stat>
        <WinsLossesLeftSection line={line} />
      </HStack>
      <Divider orientation="horizontal" paddingTop={3} />
      <Box height={'400px'} width={'650px'} maxW={'80vw'}>
        <TrackerGraph data={prepareLineStandingsForGraph(line as Line)} />
      </Box>
      <Divider orientation="horizontal" paddingY={2} />
      <Flex justifyContent={'center'} marginTop={2}>
        <UserBetGroup line={line} choiceType={ChoiceSelectionType.Over} contestId={contestId} />
        <UserBetGroup line={line} choiceType={ChoiceSelectionType.Under} contestId={contestId} />
      </Flex>
    </Box>
  );
}

function WinsLossesLeftSection({ line }: GenericLineProps): JSX.Element {
  if (!line?.standings || line.standings.length === 0) {
    return (
      <Box>
        <Badge marginLeft={2} colorScheme="grey">
          Not Started
        </Badge>
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
        {lossesNeeded} {lossesNeeded === 1 ? 'loss' : 'losses'} from UNDER
      </Text>
    </Box>
  );
}

type UserBetGroupProps = {
  contestId?: string;
  line?: Line;
  choiceType: ChoiceSelectionType;
};

export function UserBetGroup({ contestId, line, choiceType }: UserBetGroupProps): JSX.Element {
  const { data: contestBetsData, loading: contestBetsLoading } = useContestBetsQuery({
    variables: { contestId: contestId || '' },
  });

  const allBets = contestBetsData?.bets || [];

  const choice = line?.choices?.find((c) => c.selection === choiceType);

  const choiceBets = allBets.filter((b) => b.choice?.id === choice?.id);

  return (
    <>
      {line?.choices
        ?.filter((c) => c.selection === choiceType)
        .map((choice) => {
          return (
            <Box key={choice.id} flexGrow={1} marginX={2} padding={2} maxWidth={'50%'}>
              <Text paddingBottom={1}>{choiceType} Bets</Text>
              <Box
                display={'flex'}
                flexWrap={'wrap'}
                style={{
                  gap: '3px',
                }}
              >
                {!choiceBets || choiceBets.length === 0 || contestBetsLoading ? (
                  <Text>---</Text>
                ) : undefined}
                {choiceBets.map((bet) => {
                  return (
                    <Box key={bet.user?.id}>
                      <Tooltip label={bet.user?.userName}>
                        <Avatar
                          size="sm"
                          name={bet.user?.userName || ''}
                          src={bet.user?.avatarImage?.image?.publicUrlTransformed || ''}
                        >
                          {bet.isSuper && (
                            <Tooltip label="Super Bet">
                              <AvatarBadge
                                borderColor={'btbets.200'}
                                bg={'blue.400'}
                                boxSize="1.25em"
                              />
                            </Tooltip>
                          )}
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
