import { useRouter } from 'next/router';
import ContestNav, { ContestTabs } from '../../components/nav/ContestNav';
import LeaderboardTab from './leaderboard/LeaderboardTab';
import HistoryTab from './HistoryTab';
import TrackerTab from './tracker/TrackerTab';
import RulesTab from './RulesTab';
import AdminTab from './AdminTab';
import BetsTab from './bets/BetsTab';

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
