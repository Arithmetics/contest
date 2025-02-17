import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Spinner, Center } from '@chakra-ui/react';
import ContestNav, { ContestTabs } from '../../components/nav/ContestNav';
import HistoryTab from './HistoryTab';
import RulesTab from './RulesTab';
import AdminTab from './AdminTab';

const BetsTab = dynamic(() => import('./bets/BetsTab'), {
  ssr: false,
  loading: () => (
    <Center marginTop={'20vh'}>
      <Spinner />
    </Center>
  ),
});

const LeaderboardTab = dynamic(() => import('./leaderboard/LeaderboardTab'), {
  ssr: false,
  loading: () => (
    <Center marginTop={'20vh'}>
      <Spinner />
    </Center>
  ),
});

const TrackerTab = dynamic(() => import('./tracker/TrackerTab'), {
  ssr: false,
  loading: () => (
    <Center marginTop={'20vh'}>
      <Spinner />
    </Center>
  ),
});

type ContestProps = {
  id?: string;
};

export default function ContestUI({ id }: ContestProps): JSX.Element {
  const router = useRouter();
  const { contestNav } = router.query;
  const typedContestNav = contestNav as ContestTabs | undefined;

  return (
    <>
      <ContestNav contestId={id} selectedTab={contestNav as ContestTabs} />
      {(!typedContestNav || typedContestNav === ContestTabs.BETS) && <BetsTab contestId={id} />}
      {typedContestNav === ContestTabs.LEADERBOARD && <LeaderboardTab contestId={id} />}
      {typedContestNav === ContestTabs.RULES && <RulesTab contestId={id} />}
      {typedContestNav === ContestTabs.TRACKER && <TrackerTab contestId={id} />}
      {typedContestNav === ContestTabs.HISTORY && <HistoryTab contestId={id} />}
      {typedContestNav === ContestTabs.ADMIN && <AdminTab contestId={id} />}
    </>
  );
}
