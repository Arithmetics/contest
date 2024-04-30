import { GiReceiveMoney } from 'react-icons/gi';
import StatusCard from './StatusCard';
import { Spinner } from '@chakra-ui/react';
import { Contest, User, useAtsLeaderboardQuery } from '../../generated/graphql-types';
import {
  getProjectedWinnings,
  scoreAllNbaPlayoffRegistrations,
} from './leaderboard/LeaderboardTabNbaPlayoffs';

type NbaPlayoffsProjectWinningsStatusCardProps = {
  contest?: Contest;
  user?: User;
  floatMode: boolean;
};

const NbaPlayoffsProjectWinningsStatusCard = ({
  contest,
  user,
  floatMode,
}: NbaPlayoffsProjectWinningsStatusCardProps): JSX.Element => {
  const { data, loading } = useAtsLeaderboardQuery({ variables: { contestId: contest?.id || '' } });

  const registrations = data?.contest?.registrations;
  const lines = data?.contest?.lines ?? [];

  const ruleSet = data?.contest?.ruleSet;

  const totalScores = scoreAllNbaPlayoffRegistrations(registrations || [], lines || [], ruleSet);

  const projectedWinnings = getProjectedWinnings(totalScores, data?.contest?.entryFee ?? 0);

  const payout = projectedWinnings[user?.id || ''];

  if (loading) {
    return (
      <StatusCard
        icon={<Spinner />}
        statLabel="Current Payout"
        statNumber="--"
        floatMode={floatMode}
      />
    );
  }

  return (
    <StatusCard
      icon={<GiReceiveMoney fontSize="1.5rem" />}
      statLabel="Current Payout"
      statNumber={`$${payout}`}
      floatMode={floatMode}
    />
  );
};

export default NbaPlayoffsProjectWinningsStatusCard;
