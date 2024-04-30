import { Spinner } from '@chakra-ui/react';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { Contest, useAtsLeaderboardQuery, User } from '../../generated/graphql-types';

import { sortNbaLeaderboard } from './leaderboard/LeaderboardTabNbaPlayoffs';
import StatusCard from './StatusCard';

type NbaPlayoffLeaderboardStatusCardProps = {
  contest?: Contest;
  user?: User;
  floatMode: boolean;
};

const NbaPlayoffLeaderboardStatusCard = ({
  contest,
  user,
  floatMode,
}: NbaPlayoffLeaderboardStatusCardProps): JSX.Element => {
  const { data: leaderboardData, loading: leaderboardLoading } = useAtsLeaderboardQuery({
    variables: { contestId: contest?.id || '' },
  });

  const lines = leaderboardData?.contest?.lines ?? [];
  const ruleSet = leaderboardData?.contest?.ruleSet;

  const sortedLeaderboard = sortNbaLeaderboard(
    leaderboardData?.contest?.registrations || [],
    lines || [],
    ruleSet ?? null,
    0
  );
  const position =
    sortedLeaderboard.findIndex((registration) => registration?.user?.id === user?.id) + 1;

  if (leaderboardLoading) {
    return (
      <StatusCard
        icon={<Spinner />}
        statLabel="Current Position"
        statNumber="--"
        floatMode={floatMode}
      />
    );
  }

  return (
    <StatusCard
      icon={<AiOutlineOrderedList fontSize="1.5rem" />}
      statLabel="Current Position"
      statNumber={`${position} / ${sortedLeaderboard.length}`}
      floatMode={floatMode}
    />
  );
};

export default NbaPlayoffLeaderboardStatusCard;
