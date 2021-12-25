import {
  Avatar,
  AvatarBadge,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Image,
  Center,
  Tooltip,
  Box,
  useBreakpointValue,
  Spinner,
} from '@chakra-ui/react';
import { firstBy } from 'thenby';
import { useAtsLeaderboardQuery, Registration, Line } from '../../generated/graphql-types';
import theme from '../../theme';

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

type LeaderboardTabProps = {
  contestId?: string;
};

export default function LeaderboardTab({ contestId }: LeaderboardTabProps): JSX.Element {
  const { data, loading } = useAtsLeaderboardQuery({ variables: { contestId: contestId || '' } });

  // const sortedLeaderboard = sortLeaderboard(data?.registrations || []);

  const registrations = data?.registrations;
  const lines = data?.lines;

  const totalScores = scoreAllRegistrations(registrations || [], lines || []);

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
  // console.log({ registrations, lines, sortedRegistrations, totalScores });

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
            // const winningChoice = line?.choices?.find((c) => c.isWin);
            const winningChoice = line?.choices?.[0];

            return (
              <Tr key={line?.id}>
                <Td>{line?.title}</Td>

                <Td bg={theme.colors.red['400']}>
                  {/* to do check bet status */}
                  {true && (
                    <Tooltip label="Super Bet">
                      <Image
                        boxSize="25px"
                        fit="scale-down"
                        alt={winningChoice?.secondaryImage?.altText || 'unknown'}
                        src={winningChoice?.secondaryImage?.image?.publicUrlTransformed || ''}
                      />
                    </Tooltip>
                  )}
                </Td>
              </Tr>
            );
          })}
          <Tr bg={'gray.700'}>
            <Td>Locks Remaining</Td>
            {sortedRegistrations?.map((reg) => {
              // const userId = reg?.user?.id || '';
              return <Td key={reg.id}>99</Td>;
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
