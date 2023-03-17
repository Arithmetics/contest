import { useState } from 'react';
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
  useBreakpointValue,
  Spinner,
  IconButton,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { firstBy } from 'thenby';
import { useLeaderboardQuery, Registration, User } from '../../../generated/graphql-types';
import UserPickModal from './UserPickModal';

export function sortLeaderboard(registrations: Registration[]): Registration[] {
  return [...(registrations || [])].sort(
    firstBy<Registration>((a, b) => (b.counts?.likely || 0) - (a.counts?.likely || 0))
      .thenBy<Registration>((a, b) => (b.counts?.locked || 0) - (a.counts?.locked || 0))
      .thenBy<Registration>((a, b) => (b.counts?.possible || 0) - (a.counts?.possible || 0))
  );
}

type LeaderboardTabProps = {
  contestId?: string;
};

export default function LeaderboardTab({ contestId }: LeaderboardTabProps): JSX.Element {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  const { data, loading } = useLeaderboardQuery({ variables: { contestId: contestId || '' } });

  const sortedLeaderboard = sortLeaderboard(data?.registrations || []);

  const tablePaddingX = useBreakpointValue({ base: 1, sm: 1, md: 6 });
  const marginBox = useBreakpointValue({ base: 1, sm: 2, md: 6 });

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  return (
    <>
      <UserPickModal
        contestId={contestId}
        user={selectedUser}
        onClose={() => setSelectedUser(undefined)}
      />
      <Box borderWidth="1px" borderRadius="lg" padding={marginBox} m={marginBox} overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th paddingX={tablePaddingX}></Th>
              <Th paddingX={tablePaddingX}>User</Th>
              <Th paddingX={tablePaddingX} isNumeric>
                Locked Points
              </Th>
              <Th paddingX={tablePaddingX} isNumeric>
                Likely Points
              </Th>
              <Th paddingX={tablePaddingX} isNumeric>
                Possible Points
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedLeaderboard?.map((reg, i) => {
              const user = reg.user;
              const avatarUrl = user?.avatarImage?.image?.publicUrlTransformed;

              return (
                <Tr key={reg.id}>
                  <Td paddingX={tablePaddingX}>{i + 1}.</Td>
                  <Td paddingX={tablePaddingX}>
                    <HStack
                      onClick={() => setSelectedUser(user || undefined)}
                      cursor="pointer"
                      _hover={{
                        textDecoration: 'underline',
                      }}
                    >
                      <Avatar size="sm" name={user?.userName || ''} src={avatarUrl || ''} />
                      <Text>
                        {user?.userName} <ExternalLinkIcon />
                      </Text>
                    </HStack>
                  </Td>
                  <Td paddingX={tablePaddingX} isNumeric>
                    {reg.counts?.locked}
                  </Td>
                  <Td paddingX={tablePaddingX} isNumeric>
                    {reg.counts?.likely}
                  </Td>
                  <Td paddingX={tablePaddingX} isNumeric>
                    {reg.counts?.possible}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </>
  );
}
