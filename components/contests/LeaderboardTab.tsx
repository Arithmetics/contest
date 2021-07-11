import {
  Avatar,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Center,
  Box,
  Spinner,
} from '@chakra-ui/react';
import { firstBy } from 'thenby';
import { Contest, useLeaderboardQuery, Registration } from '../../generated/graphql-types';

export function sortLeaderboard(registrations: Registration[]): Registration[] {
  return [...(registrations || [])].sort(
    firstBy<Registration>((a, b) => (b.counts?.likely || 0) - (a.counts?.likely || 0))
      .thenBy<Registration>((a, b) => (b.counts?.locked || 0) - (a.counts?.locked || 0))
      .thenBy<Registration>((a, b) => (b.counts?.possible || 0) - (a.counts?.possible || 0))
  );
}

type LeaderboardTabProps = {
  contest?: Contest;
};

export default function LeaderboardTab({ contest }: LeaderboardTabProps): JSX.Element {
  const { data, loading } = useLeaderboardQuery({ variables: { contestId: contest?.id || '' } });

  const sortedLeaderboard = sortLeaderboard(data?.allRegistrations || []);

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6} m={6}>
      <Center>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Place</Th>
              <Th>User</Th>
              <Th isNumeric>Total Locked Points</Th>
              <Th isNumeric>Total Likely Points</Th>
              <Th isNumeric>Total Possible Points</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedLeaderboard?.map((reg, i) => {
              const user = reg.user;
              const avatarUrl = user?.avatarImage?.image?.publicUrlTransformed;

              return (
                <Tr key={reg.id}>
                  <Td>{i + 1}.</Td>
                  <Td>
                    <HStack>
                      <Avatar size="sm" name={user?.userName || ''} src={avatarUrl || ''} />
                      <Text>{user?.userName}</Text>
                    </HStack>
                  </Td>
                  <Td isNumeric>{reg.counts?.locked}</Td>
                  <Td isNumeric>{reg.counts?.likely}</Td>
                  <Td isNumeric>{reg.counts?.possible}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Center>
    </Box>
  );
}
