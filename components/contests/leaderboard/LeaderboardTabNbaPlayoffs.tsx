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
  useBreakpointValue,
  Spinner,
  Text,
  Badge,
  VStack,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { firstBy } from 'thenby';
import {
  useAtsLeaderboardQuery,
  Registration,
  RuleSet,
  AtsLeaderboardQuery,
  ChoiceSelectionType,
} from '../../../generated/graphql-types';

const ENTRY_BONUS = 4;

export type AtsDataLinesType = NonNullable<AtsLeaderboardQuery['contest']>['lines'];
export type AtsDataLineType = NonNullable<AtsDataLinesType>[number];

export function scoreAllNbaPlayoffRegistrations(
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
            const choicePoints = choice.points ?? 1;
            const points = bet.isSuper ? lockPoints * choicePoints : choicePoints;
            const usersCurrentScore = scores[bet.user?.id];
            scores[bet.user?.id] = usersCurrentScore + points;
          }
        });
      }
    });
  });
  return scores;
}

export function getProjectedWinnings(
  pointMap: Record<string, number>,
  entryFee: number
): Record<string, number> {
  const keys = Object.keys(pointMap);
  keys.sort((a, b) => pointMap[b] - pointMap[a]);

  const totalPot = entryFee * keys.length;

  const winnersBonus = entryFee * ENTRY_BONUS;

  const availablePot = totalPot - winnersBonus;

  const top50cutoffIndex = Math.floor(keys.length / 2);

  const totalPointsAmongTop50 = keys.reduce((acc, userId, index) => {
    if (index < top50cutoffIndex) {
      return acc + pointMap[userId];
    }
    return acc;
  }, 0);

  const projectedWinnings: Record<string, number> = {};
  keys.forEach((userId, index) => {
    let award = 0;
    if (index === 0) {
      award += winnersBonus;
    }
    if (index < top50cutoffIndex) {
      award += (pointMap[userId] / totalPointsAmongTop50) * availablePot;
    }
    projectedWinnings[userId] = Math.round(award);
  });
  return projectedWinnings;
}

export function getRemainingLocks(
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

export function sortNbaLeaderboard(
  registrations: Registration[],
  lines: AtsDataLinesType,
  ruleSet: RuleSet | null,
  entryFee: number
): Registration[] {
  const totalScores = scoreAllNbaPlayoffRegistrations(registrations || [], lines || [], ruleSet);
  const remainingLocks = getRemainingLocks(registrations || [], lines || [], ruleSet);
  const projectedWinnings = getProjectedWinnings(totalScores, entryFee);

  return registrations
    ? [...registrations]?.sort(
        firstBy<Registration>((a, b) => {
          const aScore = projectedWinnings[a.user?.id || ''] || 0;
          const bScore = projectedWinnings[b.user?.id || ''] || 0;
          return bScore - aScore;
        })
          .thenBy<Registration>((a, b) => {
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

export default function LeaderboardTabNbaPlayoffs({ contestId }: LeaderboardTabProps): JSX.Element {
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

  const totalScores = scoreAllNbaPlayoffRegistrations(registrations || [], lines || [], ruleSet);
  const remainingLocks = getRemainingLocks(registrations || [], lines || [], ruleSet);

  const sortedRegistrations = sortNbaLeaderboard(
    registrations || [],
    lines || [],
    ruleSet ?? null,
    data?.contest?.entryFee ?? 0
  );

  const projectedWinnings = getProjectedWinnings(totalScores, data?.contest?.entryFee ?? 0);

  const marginBox = useBreakpointValue({ base: 1, sm: 2, md: 6 });

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" padding={marginBox} m={marginBox} overflowX="auto">
      <Table variant="simple" height="1px">
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
                  <Flex alignItems="center" justifyContent="center">
                    <Tooltip label={user?.userName}>
                      <div
                        style={{
                          position: 'relative',
                        }}
                      >
                        <Avatar size="lg" name={user?.userName || ''} src={avatarUrl || ''} />
                        {reg.isPremium && (
                          <span
                            role="img"
                            aria-label="dog"
                            style={{
                              fontSize: '20px',
                              position: 'absolute',
                              right: 0,
                              top: '-25%',
                            }}
                          >
                            🐶
                          </span>
                        )}
                      </div>
                    </Tooltip>
                  </Flex>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {sortedLines.map((line) => {
            const winningChoice = line?.choices?.find((c) => c.isWin);

            return (
              <Tr key={line?.id}>
                <Td>
                  <VStack alignItems="center" justifyContent="center">
                    {line.choices?.some((c) => c.selection === 'CUSTOM') && (
                      <Image
                        boxSize="35px"
                        fit="scale-down"
                        alt={line?.image?.altText || 'unknown'}
                        src={line?.image?.image?.publicUrlTransformed || ''}
                      />
                    )}
                    {!line.choices?.some((c) => c.selection === 'CUSTOM') && (
                      <HStack>
                        <Image
                          boxSize="25px"
                          fit="scale-down"
                          alt={
                            (
                              line.choices?.find((c) => c.selection === ChoiceSelectionType.Over) ||
                              line.choices?.find((c) => c.selection === ChoiceSelectionType.Away)
                            )?.secondaryImage?.altText || 'unknown'
                          }
                          src={
                            (
                              line?.choices?.find(
                                (c) => c.selection === ChoiceSelectionType.Over
                              ) ||
                              line.choices?.find((c) => c.selection === ChoiceSelectionType.Away)
                            )?.secondaryImage?.image?.publicUrlTransformed ?? ''
                          }
                        />
                        <Text>@</Text>
                        <Image
                          boxSize="20px"
                          fit="scale-down"
                          alt={
                            (
                              line.choices?.find(
                                (c) => c.selection === ChoiceSelectionType.Under
                              ) ||
                              line.choices?.find((c) => c.selection === ChoiceSelectionType.Home)
                            )?.secondaryImage?.altText || 'unknown'
                          }
                          src={
                            (
                              line?.choices?.find(
                                (c) => c.selection === ChoiceSelectionType.Under
                              ) ||
                              line.choices?.find((c) => c.selection === ChoiceSelectionType.Home)
                            )?.secondaryImage?.image?.publicUrlTransformed ?? ''
                          }
                        />
                      </HStack>
                    )}
                    <Text textAlign="center">{line?.title}</Text>
                  </VStack>
                </Td>

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
                    <Td key={reg.id} bg={bgc} position="relative">
                      <VStack height="100%">
                        {usersChoice ? (
                          <>
                            {usersChoice.selection === 'HOME' ||
                            usersChoice.selection === 'AWAY' ? (
                              <Image
                                boxSize="35px"
                                fit="scale-down"
                                alt={usersChoice?.secondaryImage?.altText || 'unknown'}
                                src={usersChoice?.secondaryImage?.image?.publicUrlTransformed || ''}
                              />
                            ) : null}
                            {usersChoice.selection === 'OVER' && (
                              <VStack>
                                <HStack>
                                  <Image
                                    boxSize="25px"
                                    fit="scale-down"
                                    alt={
                                      line.choices?.find(
                                        (c) => c.selection === ChoiceSelectionType.Over
                                      )?.secondaryImage?.altText || 'unknown'
                                    }
                                    src={
                                      line?.choices?.find(
                                        (c) => c.selection === ChoiceSelectionType.Over
                                      )?.secondaryImage?.image?.publicUrlTransformed ?? ''
                                    }
                                  />
                                  <Text>@</Text>
                                  <Image
                                    boxSize="20px"
                                    fit="scale-down"
                                    alt={
                                      line.choices?.find(
                                        (c) => c.selection === ChoiceSelectionType.Under
                                      )?.secondaryImage?.altText || 'unknown'
                                    }
                                    src={
                                      line?.choices?.find(
                                        (c) => c.selection === ChoiceSelectionType.Under
                                      )?.secondaryImage?.image?.publicUrlTransformed ?? ''
                                    }
                                  />
                                </HStack>
                                <Text fontSize="xl">Over {line.benchmark}</Text>
                              </VStack>
                            )}
                            {usersChoice.selection === 'UNDER' && (
                              <VStack>
                                <HStack>
                                  <Image
                                    boxSize="25px"
                                    fit="scale-down"
                                    alt={
                                      line.choices?.find(
                                        (c) => c.selection === ChoiceSelectionType.Over
                                      )?.secondaryImage?.altText || 'unknown'
                                    }
                                    src={
                                      line?.choices?.find(
                                        (c) => c.selection === ChoiceSelectionType.Over
                                      )?.secondaryImage?.image?.publicUrlTransformed ?? ''
                                    }
                                  />
                                  <Text>@</Text>
                                  <Image
                                    boxSize="20px"
                                    fit="scale-down"
                                    alt={
                                      line.choices?.find(
                                        (c) => c.selection === ChoiceSelectionType.Under
                                      )?.secondaryImage?.altText || 'unknown'
                                    }
                                    src={
                                      line?.choices?.find(
                                        (c) => c.selection === ChoiceSelectionType.Under
                                      )?.secondaryImage?.image?.publicUrlTransformed ?? ''
                                    }
                                  />
                                </HStack>
                                <Text fontSize="xl">Under {line.benchmark}</Text>
                              </VStack>
                            )}
                            {usersChoice.selection !== 'HOME' &&
                              usersChoice.selection !== 'AWAY' &&
                              usersChoice.selection !== 'OVER' &&
                              usersChoice.selection !== 'UNDER' && (
                                <Image
                                  boxSize="35px"
                                  fit="scale-down"
                                  alt={usersChoice?.secondaryImage?.altText || 'unknown'}
                                  src={
                                    usersChoice?.secondaryImage?.image?.publicUrlTransformed || ''
                                  }
                                />
                              )}
                            <Badge variant="solid" left="6px" top="6px">
                              {isSuper ? (usersChoice.points ?? 0) * 2 : usersChoice.points} Points
                            </Badge>
                            {isSuper ? <Badge colorScheme="purple">Super</Badge> : undefined}
                          </>
                        ) : (
                          '?'
                        )}
                      </VStack>
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
          <Tr bg={'gray.700'}>
            <Th>User</Th>
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
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    gap="4px"
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
                            style={{
                              fontSize: '20px',
                              position: 'absolute',
                              right: 0,
                              top: '-25%',
                            }}
                          >
                            🐶
                          </span>
                        )}
                      </div>
                    </Tooltip>
                    <Text>{user?.userName}</Text>
                  </Flex>
                </Th>
              );
            })}
          </Tr>
          <Tr>
            <Td>Super Bets Remaining</Td>
            {sortedRegistrations?.map((reg) => {
              const userId = reg?.user?.id || '';
              return (
                <Td key={reg.id}>
                  <Flex alignItems="center" justifyContent="center">
                    {remainingLocks[userId]}
                  </Flex>
                </Td>
              );
            })}
          </Tr>
          <Tr>
            <Td>Points</Td>
            {sortedRegistrations?.map((reg) => {
              const userId = reg?.user?.id || '';
              return (
                <Td key={reg.id}>
                  <Flex alignItems="center" justifyContent="center">
                    {totalScores[userId]}
                  </Flex>
                </Td>
              );
            })}
          </Tr>
          <Tr>
            <Td>Current Payout</Td>
            {sortedRegistrations?.map((reg) => {
              return (
                <Td key={reg.id}>
                  <Flex alignItems="center" justifyContent="center">
                    ${projectedWinnings[reg?.user?.id || ''] || 0}
                  </Flex>
                </Td>
              );
            })}
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
