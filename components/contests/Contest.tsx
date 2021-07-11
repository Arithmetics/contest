import { Text, Spinner, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ContestNav, { ContestTabs } from '../../components/nav/ContestNav';
import {
  useContestByIdQuery,
  User,
  Contest,
  useCurrentUserQuery,
} from '../../generated/graphql-types';
import BetsTab from './BetsTab';
import LeaderboardTab from './LeaderboardTab';
import HistoryTab from './HistoryTab';
import TrackerTab from './TrackerTab';
import RulesTab from './RulesTab';

type ContestProps = {
  id?: string;
};

export default function ContestUI({ id }: ContestProps): JSX.Element {
  const router = useRouter();
  const { contestNav } = router.query;
  const typedContestNav = contestNav as ContestTabs;

  // data
  const { data, loading } = useContestByIdQuery({
    variables: {
      id: id || '',
    },
  });

  const { data: userData, loading: getUserLoading } = useCurrentUserQuery();

  if (!data?.Contest) {
    return (
      <Center marginTop={'30vh'}>
        <Text fontSize="2xl">No contest found</Text>
      </Center>
    );
  }

  if (loading || getUserLoading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  const activeTab = (): JSX.Element | undefined => {
    const contest = data.Contest as Contest;
    if (typedContestNav === ContestTabs.BETS) {
      return <BetsTab contest={contest} user={userData?.authenticatedItem as User} />;
    }
    if (typedContestNav === ContestTabs.LEADERBOARD) {
      return <LeaderboardTab contest={contest} />;
    }
    if (typedContestNav === ContestTabs.RULES) {
      return <RulesTab />;
    }
    if (typedContestNav === ContestTabs.TRACKER) {
      return <TrackerTab contest={contest} />;
    }
    if (typedContestNav === ContestTabs.HISTORY) {
      return <HistoryTab />;
    }
  };

  return (
    <>
      <ContestNav contest={data.Contest as Contest} selectedTab={contestNav as ContestTabs} />
      {activeTab()}
    </>
  );
}
