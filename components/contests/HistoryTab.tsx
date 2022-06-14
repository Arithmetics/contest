import { Center, Spinner } from '@chakra-ui/react';
import { useContestByIdQuery, HistoryContestTypeType } from '../../generated/graphql-types';
import HistoryTable from './HistoryTable';

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
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }
  if (contestType) {
    return <HistoryTable contestType={(contestType as unknown) as HistoryContestTypeType} />;
  }

  return <div>nope</div>;
}
