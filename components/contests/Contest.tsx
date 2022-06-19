import { useRouter } from 'next/router';
import ContestNav, { ContestTabs } from '../../components/nav/ContestNav';
import {} from '../../generated/graphql-types';
import BetsTab from './BetsTab';
import LeaderboardTab from './leaderboard/LeaderboardTab';
import HistoryTab from './HistoryTab';
import TrackerTab from './tracker/TrackerTab';
import RulesTab from './RulesTab';
import AdminTab from './AdminTab';

type ContestProps = {
  id?: string;
};

export default function ContestUI({ id }: ContestProps): JSX.Element {
  const router = useRouter();
  const { contestNav } = router.query;
  const typedContestNav = contestNav as ContestTabs | undefined;

  const activeTab = (): JSX.Element | undefined => {
    if (!typedContestNav || typedContestNav === ContestTabs.BETS) {
      return <BetsTab contestId={id} />;
    }
    if (typedContestNav === ContestTabs.LEADERBOARD) {
      return <LeaderboardTab contestId={id} />;
    }
    if (typedContestNav === ContestTabs.RULES) {
      return <RulesTab contestId={id} />;
    }
    if (typedContestNav === ContestTabs.TRACKER) {
      return <TrackerTab contestId={id} />;
    }
    if (typedContestNav === ContestTabs.HISTORY) {
      return <HistoryTab contestId={id} />;
    }
    if (typedContestNav === ContestTabs.ADMIN) {
      return <AdminTab contestId={id} />;
    }
  };

  return (
    <>
      <ContestNav contestId={id} selectedTab={contestNav as ContestTabs} />
      {activeTab()}
    </>
  );
}
