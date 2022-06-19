import { Center, Flex, Heading, Spinner, Button, Text, Box } from '@chakra-ui/react';
import { CSVLink } from 'react-csv';
import { useAtsTrackerStatusQuery, Line } from '../../generated/graphql-types';

function createLineCSVData(lines: Line[]): string[][] {
  const data: string[][] = [['team', 'email', 'selection', 'isSuper']];

  lines?.forEach((line) => {
    line.choices?.forEach((choice) => {
      choice?.bets?.forEach((bet) => {
        data.push([
          line.title || '',
          bet.user?.email || '',
          choice.selection || '',
          bet.isSuper ? 'Yes' : 'No',
        ]);
      });
    });
  });
  return data;
}

type CSVsOUProps = {
  contestId?: string;
};

export default function CSVsOU({ contestId }: CSVsOUProps): JSX.Element {
  // use ats tracker for csv gen
  const { data, loading } = useAtsTrackerStatusQuery({ variables: { contestId: contestId || '' } });

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  const csvData = createLineCSVData(data?.lines || []);

  return (
    <Flex
      marginTop={8}
      direction="column"
      style={{
        gap: '8px',
      }}
    >
      <Heading as="h4" size="md">
        Picks CSV
      </Heading>
      <Box>
        <hr></hr>
        <Text></Text>
        <Button marginY={4}>
          <CSVLink data={csvData} filename="contestPicks">
            Download CSV
          </CSVLink>
        </Button>
      </Box>
    </Flex>
  );
}
