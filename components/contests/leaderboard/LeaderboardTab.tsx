import { Center, Spinner, Text } from '@chakra-ui/react';
import { firstBy } from 'thenby';
import {
  useContestByIdQuery,
  Registration,
  Contest,
  ContestContestTypeType,
} from '../../../generated/graphql-types';
import LeaderboardTabATS from './LeaderboardTabATS';
// import LeaderboardTabOU from './LeaderboardTabOU';

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

  if (contest?.contestType === ContestContestTypeType.NflAts) {
    return <LeaderboardTabATS contestId={contestId} />;
  }
  // return <LeaderboardTabOU contestId={contestId} />;

  return (
    <Center marginTop={'30vh'}>
      <Text fontSize="2xl">Temporarily Disabled</Text>
    </Center>
  );
}
