import { Avatar, AvatarBadge, Box, Center, Divider, Flex, Tooltip, Text } from '@chakra-ui/react';
import {
  Bet,
  ChoiceSelectionType,
  Line,
  useAtsTrackerStatusQuery,
} from '../../../generated/graphql-types';

import { useContestBetsQuery } from '../../../generated/graphql-types';
import NflAtsLineCardHeader from '../lineCard/NflAtsLineCardHeader';
import TrackerBarGraph, { BarData } from './TrackerBarGraph';
import Spinner from '../BTBetsLoading';

function prepLineData(line: Line): BarData[] {
  const homeBets = line.choices
    ?.filter((c) => c.selection === ChoiceSelectionType.Home)
    .reduce((acc, cur) => {
      cur?.bets?.forEach((b) => acc.push(b));
      return acc;
    }, [] as Bet[]);

  const awayBets = line.choices
    ?.filter((c) => c.selection === ChoiceSelectionType.Away)
    .reduce((acc, cur) => {
      cur?.bets?.forEach((b) => acc.push(b));
      return acc;
    }, [] as Bet[]);

  const data = [
    {
      choiceType: ChoiceSelectionType.Away,
      Regular: awayBets?.filter((b) => !b.isSuper).length ?? 0,
      Super: awayBets?.filter((b) => b.isSuper).length ?? 0,
    },
    {
      choiceType: ChoiceSelectionType.Home,
      Regular: homeBets?.filter((b) => !b.isSuper).length ?? 0,
      Super: homeBets?.filter((b) => b.isSuper).length ?? 0,
    },
  ];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return data;
}

type TrackerNbaProps = {
  contestId?: string;
};

export default function TrackerNbaPlayoffs({ contestId }: TrackerNbaProps): JSX.Element {
  const { data, loading } = useAtsTrackerStatusQuery({ variables: { contestId: contestId || '' } });

  return <Text fontSize="2xl">Coming soon!</Text>;

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
          return (
            <NbaPlayoffTrackerBarGraphCard
              key={line?.id}
              line={line as Line}
              contestId={contestId}
            />
          );
        })}
      </Box>
    </Center>
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

type GenericLineProps = {
  contestId?: string;
  line: Line;
};

function NbaPlayoffTrackerBarGraphCard({ line, contestId }: GenericLineProps): JSX.Element {
  const homeWin =
    line.choices?.some((c) => c.selection === ChoiceSelectionType.Home && c.isWin) || false;

  const awayWin =
    line.choices?.some((c) => c.selection === ChoiceSelectionType.Away && c.isWin) || false;

  return (
    <Box
      width={'min(680px, 100%)'}
      bg={'gray.600'}
      border={'1px'}
      borderColor={'btbets.500'}
      boxShadow={'dark-lg'}
      rounded={'md'}
      position={'relative'}
      margin={4}
      marginTop={6}
      p={4}
    >
      <NflAtsLineCardHeader line={line} />
      <Divider orientation="horizontal" paddingTop={3} />
      <Box height={'400px'} width={'650px'} maxW={'80vw'}>
        <TrackerBarGraph data={prepLineData(line)} homeWin={homeWin} awayWin={awayWin} />
      </Box>
      <Divider orientation="horizontal" paddingY={2} />
      <Flex justifyContent={'center'} marginTop={2}>
        {line.choices?.map((choice) => {
          return (
            <UserBetGroup
              key={choice.id}
              line={line}
              choiceType={ChoiceSelectionType.Away}
              contestId={contestId}
            />
          );
        })}
      </Flex>
    </Box>
  );
}
