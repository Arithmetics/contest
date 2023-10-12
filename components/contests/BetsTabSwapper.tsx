import { Center, Spinner } from '@chakra-ui/react';
import { ContestContestTypeType, useContestByIdQuery } from '../../generated/graphql-types';
import BetsTab from './BetsTab';
import BetsTabNext from './BetsTabNext';

type BetsTabProps = {
  contestId?: string;
};

export default function BetsTabSwapper({ contestId }: BetsTabProps): JSX.Element {
  const { data, loading } = useContestByIdQuery({
    variables: {
      id: contestId || '',
    },
  });

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  if (data?.contest?.contestType !== ContestContestTypeType.NflAts) {
    return <BetsTabNext contestId={contestId} />;
  }
  return <BetsTab contestId={contestId} />;
}
