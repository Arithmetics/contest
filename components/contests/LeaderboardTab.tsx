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
} from '@chakra-ui/react';
import { BsLightning } from 'react-icons/bs';
import { firstBy } from 'thenby';
import { useAtsLeaderboardQuery, Registration, Line } from '../../generated/graphql-types';

export function sortLeaderboard(registrations: Registration[]): Registration[] {
  return [...(registrations || [])].sort(
    firstBy<Registration>((a, b) => (b.counts?.likely || 0) - (a.counts?.likely || 0))
      .thenBy<Registration>((a, b) => (b.counts?.locked || 0) - (a.counts?.locked || 0))
      .thenBy<Registration>((a, b) => (b.counts?.possible || 0) - (a.counts?.possible || 0))
  );
}

function scoreAllRegistrations(
  registrations: Registration[],
  lines: Line[]
): Record<string, number> {
  const scores: Record<string, number> = {};

  registrations.forEach((reg) => {
    const userId = reg?.user?.id;
    if (userId) {
      scores[userId] = 0;
    }
  });

  lines.forEach((line) => {
    line.choices?.forEach((choice) => {
      if (choice.isWin) {
        choice.bets?.forEach((bet) => {
          // todo: use rules
          if (bet.user?.id) {
            const points = bet.isSuper ? 2 : 1;
            const usersCurrentScore = scores[bet.user?.id];
            scores[bet.user?.id] = usersCurrentScore + points;
          }
        });
      }
    });
  });
  return scores;
}

function getRemainingLocks(registrations: Registration[], lines: Line[]): Record<string, number> {
  const remainingLocks: Record<string, number> = {};

  registrations.forEach((reg) => {
    const userId = reg?.user?.id;
    if (userId) {
      remainingLocks[userId] = 5;
    }
  });

  lines.forEach((line) => {
    line.choices?.forEach((choice) => {
      if (choice.isWin) {
        choice.bets?.forEach((bet) => {
          // todo: use rules
          if (bet.user?.id) {
            const points = bet.isSuper ? 1 : 0;
            const usersCurrentLocks = remainingLocks[bet.user?.id];
            remainingLocks[bet.user?.id] = usersCurrentLocks - points;
          }
        });
      }
    });
  });
  return remainingLocks;
}

type LeaderboardTabProps = {
  contestId?: string;
};

export default function LeaderboardTab({ contestId }: LeaderboardTabProps): JSX.Element {
  const { data, loading } = useAtsLeaderboardQuery({ variables: { contestId: contestId || '' } });

  const registrations = data?.registrations;
  const lines = data?.lines;

  const totalScores = scoreAllRegistrations(registrations || [], lines || []);
  const remainingLocks = getRemainingLocks(registrations || [], lines || []);

  const sortedRegistrations = registrations
    ? [...registrations]?.sort(
        firstBy<Registration>((a, b) => {
          const aScore = totalScores[a.user?.id || ''] || 0;
          const bScore = totalScores[b.user?.id || ''] || 0;
          return bScore - aScore;
        }).thenBy<Registration>((a, b) => {
          return (a.user?.email || '').localeCompare(b.user?.email || '');
        })
      )
    : [];

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
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Game</Th>
            {sortedRegistrations?.map((reg) => {
              const user = reg.user;
              const avatarUrl = user?.avatarImage?.image?.publicUrlTransformed;
              return (
                <Th key={reg.id}>
                  <Tooltip label={user?.userName}>
                    <Avatar size="sm" name={user?.userName || ''} src={avatarUrl || ''} />
                  </Tooltip>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {lines?.map((line) => {
            const winningChoice = line?.choices?.find((c) => c.isWin);

            return (
              <Tr key={line?.id}>
                <Td>{line?.title}</Td>

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
                    bgc = 'red.700';
                  }
                  return (
                    <Td key={reg.id} bg={bgc} position="relative">
                      {usersChoice ? (
                        <>
                          <Image
                            boxSize="30px"
                            fit="scale-down"
                            alt={usersChoice?.secondaryImage?.altText || 'unknown'}
                            src={usersChoice?.secondaryImage?.image?.publicUrlTransformed || ''}
                          />
                          {isSuper ? (
                            <Box position="absolute" top="15%" left="45%">
                              <Tooltip label="Super Bet">
                                <Avatar icon={<BsLightning />} size="xs" bg="teal.300" />
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
            <Td>Locks Remaining</Td>
            {sortedRegistrations?.map((reg) => {
              const userId = reg?.user?.id || '';
              return <Td key={reg.id}>{remainingLocks[userId]}</Td>;
            })}
          </Tr>
          <Tr bg={'gray.600'}>
            <Td>Points</Td>
            {sortedRegistrations?.map((reg) => {
              const userId = reg?.user?.id || '';
              return <Td key={reg.id}>{totalScores[userId]}</Td>;
            })}
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
