import { Spinner } from '@chakra-ui/react';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { Contest, useLeaderboardQuery, User } from '../../generated/graphql-types';

import { sortLeaderboard } from './leaderboard/LeaderboardTab';
import StatusCard from './StatusCard';

type OULeaderboardStatusCardProps = {
  contest?: Contest;
  user?: User;
  floatMode: boolean;
};

const OULeaderboardStatusCard = ({
  contest,
  user,
  floatMode,
}: OULeaderboardStatusCardProps): JSX.Element => {
  const { data: leaderboardData, loading: leaderboardLoading } = useLeaderboardQuery({
    variables: { contestId: contest?.id || '' },
  });

  const sortedLeaderboard = sortLeaderboard(leaderboardData?.registrations || []);
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

export default OULeaderboardStatusCard;
