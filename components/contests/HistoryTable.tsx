import {
  Center,
  Spinner,
  Text,
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
  HStack,
  Avatar,
} from '@chakra-ui/react';
import { useHistoriesByTypeQuery, HistoryContestTypeType } from '../../generated/graphql-types';

type HistoryTableProps = {
  contestType: HistoryContestTypeType;
};

export default function HistoryTable({ contestType }: HistoryTableProps): JSX.Element {
  const { data, loading } = useHistoriesByTypeQuery({
    variables: { contestType },
  });

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
            <Th>Year</Th>
            <Th>Pick Record</Th>
            <Th>Winner</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.histories?.reverse().map((his) => {
            const user = his.user;
            const avatarUrl = user?.avatarImage?.image?.publicUrlTransformed;

            return (
              <Tr key={his.id}>
                <Td>{his.year}</Td>
                <Td>{his.display}</Td>
                <Td>
                  <HStack>
                    <Avatar size="sm" name={user?.userName || ''} src={avatarUrl || ''} />
                    <Text>{user?.userName}</Text>
                  </HStack>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
