import {
  Center,
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
import Spinner from './BTBetsLoading';

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
        <Spinner />
      </Center>
    );
  }

  const histories = data?.histories ?? [];

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
          {[...histories]?.reverse().map((his) => {
            const user = his.user;
            const avatarUrl = user?.avatarImage?.image?.publicUrlTransformed?.replace(
              '/upload/',
              `/upload/w_100,h_100,q_auto,f_auto/`
            );

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
