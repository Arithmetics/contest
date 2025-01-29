import { ContestContestTypeType, useContestByIdQuery } from '../../../generated/graphql-types';
import NflAtsBets from './NflAtsBets';
import NBAPlayoffsBets from './NbaPlayoffsBets';
import OverUnderBets from './OverUnderBets';
import PageLoader from './PageLoader';

type BetsTabProps = {
  contestId?: string;
};

export default function BetsTab({ contestId }: BetsTabProps): JSX.Element {
  const { data, loading } = useContestByIdQuery({
    variables: {
      id: contestId || '',
    },
  });

  if (loading) {
    return <PageLoader />;
  }

  const contestType = data?.cachedContest?.contestType;

  if (
    contestType === ContestContestTypeType.NbaOverUnder ||
    contestType === ContestContestTypeType.NflOverUnder
  ) {
    return <OverUnderBets contestId={contestId} />;
  }

  if (contestType === ContestContestTypeType.NflAts) {
    return <NflAtsBets contestId={contestId} />;
  }

  if (contestType === ContestContestTypeType.NbaPlayoffs) {
    return <NBAPlayoffsBets contestId={contestId} />;
  }

  return <></>;
}
