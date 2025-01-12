import {
  Avatar,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Center,
  Tooltip,
  Box,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BsLightning } from 'react-icons/bs';
import { firstBy } from 'thenby';
import {
  useAtsLeaderboardQuery,
  Registration,
  RuleSet,
  AtsLeaderboardQuery,
  ChoiceSelectionType,
} from '../../../generated/graphql-types';
import Spinner from '../BTBetsLoading';

type AtsDataLinesType = NonNullable<AtsLeaderboardQuery['contest']>['lines'];
type AtsDataLineType = NonNullable<AtsDataLinesType>[number];

function scoreAllRegistrations(
  registrations: Registration[],
  lines: AtsDataLinesType,
  ruleSet?: RuleSet | null
): Record<string, number> {
  const scores: Record<string, number> = {};
  const lockPoints = ruleSet?.superBetPointCount || 2;

  registrations.forEach((reg) => {
    const userId = reg?.user?.id;
    if (userId) {
      scores[userId] = 0;
    }
  });

  lines?.forEach((line) => {
    line.choices?.forEach((choice) => {
      if (choice.isWin) {
        choice.bets?.forEach((bet) => {
          if (bet.user?.id) {
            const points =
              choice.selection === 'OVER' || choice.selection === 'UNDER'
                ? 0.01
                : bet.isSuper
                ? lockPoints
                : 1;

            const usersCurrentScore = scores[bet.user?.id];
            scores[bet.user?.id] = usersCurrentScore + points;
          }
        });
      }
    });
  });
  return scores;
}

function getRemainingLocks(
  registrations: Registration[],
  lines: AtsDataLinesType,
  ruleSet?: RuleSet | null
): Record<string, number> {
  const remainingLocks: Record<string, number> = {};
  const startingLocks = ruleSet?.maxSuperBets || 5;

  registrations.forEach((reg) => {
    const userId = reg?.user?.id;
    if (userId) {
      remainingLocks[userId] = startingLocks;
    }
  });

  lines?.forEach((line) => {
    line?.choices?.forEach((choice) => {
      choice.bets?.forEach((bet) => {
        if (bet.user?.id) {
          const counts = bet.isSuper ? 1 : 0;
          const usersCurrentLocks = remainingLocks[bet.user?.id];
          remainingLocks[bet.user?.id] = usersCurrentLocks - counts;
        }
      });
    });
  });
  return remainingLocks;
}

export function sortATSLeaderboard(
  registrations: Registration[],
  lines: AtsDataLinesType,
  ruleSet?: RuleSet | null
): Registration[] {
  const totalScores = scoreAllRegistrations(registrations || [], lines || [], ruleSet);
  const remainingLocks = getRemainingLocks(registrations || [], lines || [], ruleSet);

  return registrations
    ? [...registrations]?.sort(
        firstBy<Registration>((a, b) => {
          const aScore = totalScores[a.user?.id || ''] || 0;
          const bScore = totalScores[b.user?.id || ''] || 0;
          return bScore - aScore;
        })
          .thenBy<Registration>((a, b) => {
            return remainingLocks[b.user?.id || ''] - remainingLocks[a.user?.id || ''];
          })
          .thenBy<Registration>((a, b) => {
            return (a.user?.email || '').localeCompare(b.user?.email || '');
          })
      )
    : [];
}

type LeaderboardTabProps = {
  contestId?: string;
};

export default function LeaderboardTabATS({ contestId }: LeaderboardTabProps): JSX.Element {
  const { data, loading } = useAtsLeaderboardQuery({ variables: { contestId: contestId || '' } });

  const registrations = data?.contest?.registrations;
  const lines = data?.contest?.lines ?? [];

  const sortedLines = [...lines].sort(
    firstBy<AtsDataLineType>((a, b) => {
      const aTime = a.closingTime || 0;
      const bTime = b.closingTime || 0;
      return bTime - aTime;
    })
  );
  const ruleSet = data?.contest?.ruleSet;

  const totalScores = scoreAllRegistrations(registrations || [], lines || [], ruleSet);
  const remainingLocks = getRemainingLocks(registrations || [], lines || [], ruleSet);

  const sortedRegistrations = sortATSLeaderboard(registrations || [], lines || [], ruleSet);

  const marginBox = useBreakpointValue({ base: 1, sm: 2, md: 6 });

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner />
      </Center>
    );
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" padding={marginBox} m={marginBox} overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Game</Th>
            {sortedRegistrations?.map((reg) => {
              const user = reg.user;
              const avatarUrl = user?.avatarImage?.image?.publicUrlTransformed;
              return (
                <Th
                  key={reg.id}
                  style={{
                    padding: '15px',
                  }}
                >
                  <Tooltip label={user?.userName}>
                    <div
                      style={{
                        position: 'relative',
                      }}
                    >
                      <Avatar size="md" name={user?.userName || ''} src={avatarUrl || ''} />
                      {reg.isPremium && (
                        <span
                          role="img"
                          aria-label="dog"
                          style={{ fontSize: '20px', position: 'absolute', right: 0, top: '-25%' }}
                        >
                          🐶
                        </span>
                      )}
                    </div>
                  </Tooltip>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {sortedLines.map((line) => {
            const winningChoice = line?.choices?.find((c) => c.isWin);

            const paddingY = line?.choices?.some((c) => c.selection === ChoiceSelectionType.Under)
              ? '5px'
              : '15px';

            return (
              <Tr key={line?.id}>
                <Td paddingY={paddingY}>{line?.title}</Td>

                {sortedRegistrations.map((reg) => {
                  const usersChoice = line?.choices?.find((c) =>
                    c.bets?.some((b) => b?.user?.id === reg?.user?.id)
                  );

                  const isSuper = usersChoice?.bets?.some(
                    (bet) => bet?.user?.id === reg?.user?.id && bet.isSuper
                  );

                  let bgc = 'grey.700';
                  if (winningChoice && winningChoice.id === usersChoice?.id) {
                    bgc = 'green.600';
                  }
                  if (winningChoice && winningChoice.id !== usersChoice?.id) {
                    bgc = 'red.800';
                  }
                  return (
                    <Td key={reg.id} bg={bgc} position="relative" paddingY={paddingY}>
                      {usersChoice ? (
                        <>
                          {usersChoice?.selection === ChoiceSelectionType.Under ||
                          usersChoice?.selection === ChoiceSelectionType.Over ? (
                            <>
                              <Text fontSize={'12px'}>
                                {usersChoice.selection === 'UNDER' ? '⬇️' : '⬆️'} {line.benchmark}
                              </Text>
                            </>
                          ) : (
                            <Image
                              boxSize="30px"
                              fit="scale-down"
                              alt={usersChoice?.secondaryImage?.altText || 'unknown'}
                              src={usersChoice?.secondaryImage?.image?.publicUrlTransformed || ''}
                            />
                          )}

                          {isSuper ? (
                            <Box position="absolute" top="15%" left="45%">
                              <Tooltip label="Super Bet">
                                <Avatar icon={<BsLightning />} size="xs" bg="btbets.500" />
                              </Tooltip>
                            </Box>
                          ) : undefined}
                        </>
                      ) : (
                        '?'
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
          <Tr bg={'gray.700'}>
            <Td>Super Bets Remaining</Td>
            {sortedRegistrations?.map((reg) => {
              const userId = reg?.user?.id || '';
              return <Td key={reg.id}>{remainingLocks[userId]}</Td>;
            })}
          </Tr>
          <Tr bg={'gray.600'}>
            <Td>Points</Td>
            {sortedRegistrations?.map((reg) => {
              const userId = reg?.user?.id || '';
              return <Td key={reg.id}>{Math.round(totalScores[userId] * 100) / 100}</Td>;
            })}
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
