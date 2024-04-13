import { Center, Spinner, Box } from '@chakra-ui/react';
import {
  useContestByIdQuery,
  Contest,
  ContestContestTypeType,
} from '../../../generated/graphql-types';
import TrackerATS from './TrackerATS';
import TrackerOU from './TrackerOU';
import TrackerNbaPlayoffs from './TrackerNbaPlayoffs';

type TrackerTabProps = {
  contestId?: string;
};

export default function TrackerTab({ contestId }: TrackerTabProps): JSX.Element {
  const { data, loading } = useContestByIdQuery({
    variables: {
      id: contestId || '',
    },
  });

  const contest = data?.contest as Contest | undefined;

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
        {contest?.contestType === ContestContestTypeType.NbaPlayoffs && (
          <TrackerNbaPlayoffs contestId={contestId} />
        )}
        {contest?.contestType === ContestContestTypeType.NflAts && (
          <TrackerATS contestId={contestId} />
        )}
        {(contest?.contestType === ContestContestTypeType.NbaOverUnder ||
          contest?.contestType === ContestContestTypeType.NflOverUnder) && (
          <TrackerOU contestId={contestId} />
        )}
      </Box>
    </Center>
  );
}
