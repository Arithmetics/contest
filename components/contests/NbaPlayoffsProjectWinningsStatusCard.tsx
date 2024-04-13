import { GiReceiveMoney } from 'react-icons/gi';
import { Contest, User } from '../../generated/graphql-types';

import StatusCard from './StatusCard';

type NbaPlayoffsProjectWinningsStatusCardProps = {
  contest?: Contest;
  user?: User;
  floatMode: boolean;
};

const NbaPlayoffsProjectWinningsStatusCard = ({
  //   contest,
  //   user,
  floatMode,
}: NbaPlayoffsProjectWinningsStatusCardProps): JSX.Element => {
  //   const { data: leaderboardData, loading: leaderboardLoading } = useAtsLeaderboardQuery({
  //     variables: { contestId: contest?.id || '' },
  //   });

  //   const lines = leaderboardData?.contest?.lines ?? [];
  //   const ruleSet = leaderboardData?.contest?.ruleSet;

  //   const sortedLeaderboard = sortNbaLeaderboard(
  //     leaderboardData?.contest?.registrations || [],
  //     lines || [],
  //     ruleSet
  //   );
  //   const position =
  //     sortedLeaderboard.findIndex((registration) => registration?.user?.id === user?.id) + 1;

  //     const totalScores = scoreAllNbaPlayoffRegistrations(registrations || [], lines || [], ruleSet);

  //   const sortedRegistrations = sortNbaLeaderboard(registrations || [], lines || [], ruleSet);

  //   const projectedWinnings = getProjectedWinnings(totalScores, data?.contest?.entryFee ?? 0);

  //   if (leaderboardLoading) {
  //     return (
  //       <StatusCard
  //         icon={<Spinner />}
  //         statLabel="Current Payout"
  //         statNumber="--"
  //         floatMode={floatMode}
  //       />
  //     );
  //   }

  return (
    <StatusCard
      icon={<GiReceiveMoney fontSize="1.5rem" />}
      statLabel="Current Payout"
      statNumber={`$234`}
      floatMode={floatMode}
    />
  );
};

export default NbaPlayoffsProjectWinningsStatusCard;
