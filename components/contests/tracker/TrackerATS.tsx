import { Center, Spinner, Box, Divider, Flex } from '@chakra-ui/react';
import {
  ContestContestTypeType,
  Line,
  ChoiceSelectionType,
  useAtsTrackerStatusQuery,
} from '../../../generated/graphql-types';

import LineCardHeader from '../LineCardHeader';
import { UserBetGroup } from './TrackerOU';

type TrackerATSProps = {
  contestId?: string;
};

export default function TrackerATS({ contestId }: TrackerATSProps): JSX.Element {
  const { data, loading } = useAtsTrackerStatusQuery({ variables: { contestId: contestId || '' } });

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  return (
    <Center>
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'stretch'}>
        {data?.lines?.map((line) => {
          return <TrackerBarGraphCard key={line?.id} line={line as Line} contestId={contestId} />;
        })}
      </Box>
    </Center>
  );
}

type GenericLineProps = {
  contestId?: string;
  line: Line;
};

function TrackerBarGraphCard({ line, contestId }: GenericLineProps): JSX.Element {
  return (
    <Box
      maxW={'100%'}
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
      <LineCardHeader line={line} contestType={ContestContestTypeType.NflAts} />
      <Divider orientation="horizontal" paddingTop={3} />
      <Box height={'400px'} width={'700px'} maxW={'80vw'}>
        {/* <TrackerGraph data={prepareLineStandingsForGraph(line as Line)} /> */}
      </Box>
      <Divider orientation="horizontal" paddingY={2} />
      <Flex justifyContent={'center'} marginTop={2}>
        <UserBetGroup line={line} choiceType={ChoiceSelectionType.Away} contestId={contestId} />
        <UserBetGroup line={line} choiceType={ChoiceSelectionType.Home} contestId={contestId} />
      </Flex>
    </Box>
  );
}
