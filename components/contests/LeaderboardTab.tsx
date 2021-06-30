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
} from '@chakra-ui/react';
import { Contest } from '../../generated/graphql-types';

type LeaderboardTabProps = {
  contest?: Contest;
};

export default function LeaderboardTab({ contest }: LeaderboardTabProps): JSX.Element {
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
            {contest?.registrations?.map((reg, i) => {
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
                  <Td isNumeric>25</Td>
                  <Td isNumeric>56</Td>
                  <Td isNumeric>199</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Center>
    </Box>
  );
}
