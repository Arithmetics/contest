import { Spinner } from '@chakra-ui/react';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { Contest, useAtsLeaderboardQuery, User } from '../../generated/graphql-types';

import { sortATSLeaderboard } from './leaderboard/LeaderboardTabATS';
import StatusCard from './StatusCard';

type OULeaderboardStatusCardProps = {
  contest?: Contest;
  user?: User;
  floatMode: boolean;
};

const ATSLeaderboardStatusCard = ({
  contest,
  user,
  floatMode,
}: OULeaderboardStatusCardProps): JSX.Element => {
  const { data, loading: leaderboardLoading } = useAtsLeaderboardQuery({
    variables: { contestId: contest?.id || '' },
  });

  const registrations = data?.contest?.registrations;
  const lines = data?.contest?.lines || [];
  const ruleSet = data?.contest?.ruleSet;

  const sortedLeaderboard = sortATSLeaderboard(registrations || [], lines, ruleSet);

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

export default ATSLeaderboardStatusCard;
