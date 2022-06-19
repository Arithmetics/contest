import { CSVLink } from 'react-csv';
import { Text, Button, Box, Center, Spinner, Flex, Heading } from '@chakra-ui/react';
import { Line, useAtsTrackerStatusQuery } from '../../generated/graphql-types';

type CSVsATSProps = {
  contestId?: string;
};

function createLineCSVData(line: Line): string[][] {
  const data: string[][] = [['game', 'email', 'selection', 'isSuper']];

  line.choices?.forEach((choice) => {
    choice?.bets?.forEach((bet) => {
      data.push([
        line?.title || '',
        bet?.user?.email || '',
        choice?.selection || '',
        bet.isSuper ? 'Yes' : 'No',
      ]);
    });
  });
  return data;
}

export default function CSVsATS({ contestId }: CSVsATSProps): JSX.Element {
  const { data, loading } = useAtsTrackerStatusQuery({ variables: { contestId: contestId || '' } });

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  return (
    <Flex
      marginTop={8}
      direction="column"
      style={{
        gap: '8px',
      }}
    >
      <Heading as="h4" size="md">
        Pick CSVs
      </Heading>
      {data?.lines?.map((line) => {
        const csvData = createLineCSVData(line);
        return (
          <Box key={line.id}>
            <hr></hr>
            <Text>
              {line.title} - Closes: {new Date(line.closingTime).toLocaleString()}
            </Text>
            <Button marginY={4}>
              <CSVLink data={csvData} filename={line?.title || 'default'}>
                Download CSV
              </CSVLink>
            </Button>
          </Box>
        );
      })}
    </Flex>
  );
}
