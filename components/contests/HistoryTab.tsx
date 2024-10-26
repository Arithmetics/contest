import { Center } from '@chakra-ui/react';
import { useContestByIdQuery, HistoryContestTypeType } from '../../generated/graphql-types';
import HistoryTable from './HistoryTable';
import Spinner from './BTBetsLoading';

type HistoryTabProps = {
  contestId?: string;
};

export default function HistoryTab({ contestId }: HistoryTabProps): JSX.Element {
  const { data: contestData, loading: getContestLoading } = useContestByIdQuery({
    variables: {
      id: contestId || '',
    },
  });

  const contestType = contestData?.contest?.contestType;

  if (getContestLoading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner />
      </Center>
    );
  }
  if (contestType) {
    return <HistoryTable contestType={contestType as unknown as HistoryContestTypeType} />;
  }

  return <div>nope</div>;
}
