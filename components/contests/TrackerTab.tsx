import {
  Center,
  Spinner,
  Box,
  HStack,
  Stat,
  Image,
  Divider,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { Contest, Line, useTrackerStatusQuery } from '../../generated/graphql-types';

type TrackerTabProps = {
  contest?: Contest;
};

export default function TrackerTab({ contest }: TrackerTabProps): JSX.Element {
  const { data, loading } = useTrackerStatusQuery({ variables: { contestId: contest?.id || '' } });

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }
  console.log(data);
  return (
    <Center>
      {data?.allLines?.map((line) => {
        return <TrackerGraphCard key={line?.id} line={line as Line} />;
      })}
    </Center>
  );
}

type TrackerGraphCardProps = {
  line?: Line;
};

function TrackerGraphCard({ line }: TrackerGraphCardProps): JSX.Element {
  return (
    <Box
      maxW={'100%'}
      width={'700px'}
      bg={'gray.600'}
      border={'1px'}
      borderColor={'teal.500'}
      boxShadow={'dark-lg'}
      rounded={'md'}
      position={'relative'}
      margin={4}
      marginTop={6}
      p={4}
    >
      <HStack>
        <Stat>
          <StatLabel>{line?.title}</StatLabel>
          <StatNumber>{line?.benchmark} Wins</StatNumber>
        </Stat>
        <Image
          boxSize="75px"
          bg={'gray.600'}
          src="https://i.ibb.co/XZp4L8W/pngjoy-com-jacksonville-jaguars-jacksonville-jaguars-old-logo-png-png-6702266.png"
        />
      </HStack>
      <Divider orientation="horizontal" paddingTop={3} />
    </Box>
  );
}
