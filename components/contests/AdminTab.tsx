import { Code, Center, Heading, Flex } from '@chakra-ui/react';
import { useContestByIdQuery, ContestContestTypeType } from '../../generated/graphql-types';
import CSVsATS from './CSVsATS';
import CSVsOU from './CSVsOU';
import Spinner from './BTBetsLoading';
import CreateLinesForm from './CreateLinesForm';

type AdminTabProps = {
  contestId?: string;
};

export default function AdminTab({ contestId }: AdminTabProps): JSX.Element {
  const { data: contestData, loading: getContestLoading } = useContestByIdQuery({
    variables: {
      id: contestId || '',
    },
  });

  if (getContestLoading) {
    return (
      <Center marginTop={'20vh'}>
        <Spinner />
      </Center>
    );
  }

  let emails = '';
  let premiumEmails = '';
  const reg = contestData?.cachedContest?.registrations;
  reg?.forEach((r) => {
    if (r.user?.email) {
      emails = `${emails} ${r.user?.email},`;
      if (r.isPremium) {
        premiumEmails = `${premiumEmails} ${r.user?.email},`;
      }
    }
  });

  return (
    <Center>
      <Flex
        direction="column"
        padding={8}
        style={{
          gap: '8px',
        }}
      >
        <Heading as="h4" size="md">
          Emails
        </Heading>
        <Center>
          <Code>{emails}</Code>
        </Center>
        <Heading as="h4" size="md">
          Premium Emails
        </Heading>
        <Center>
          <Code>{premiumEmails}</Code>
        </Center>
        {contestData?.cachedContest?.contestType === ContestContestTypeType.NflAts ? (
          <>
            <CreateLinesForm contestId={contestData?.cachedContest?.id} />
            <hr />
            <CSVsATS contestId={contestData?.cachedContest?.id} />
          </>
        ) : (
          <CSVsOU contestId={contestData?.cachedContest?.id} />
        )}
      </Flex>
    </Center>
  );
}
