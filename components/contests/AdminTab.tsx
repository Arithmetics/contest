import { Code, Center, Spinner, Heading, Flex } from '@chakra-ui/react';
import { useContestByIdQuery } from '../../generated/graphql-types';

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
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
      </Center>
    );
  }

  let emails = '';
  const reg = contestData?.contest?.registrations;
  reg?.forEach((r) => {
    if (r.user?.email) {
      emails = `${emails} ${r.user?.email},`;
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
      </Flex>
    </Center>
  );
}
