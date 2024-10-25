import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Flex,
  Text,
  Badge,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  Center,
  useToast,
  Tooltip,
  Avatar,
} from '@chakra-ui/react';
import Spinner from './BTBetsLoading';
import { useRouter } from 'next/router';

import {
  useAllContestsQuery,
  Contest,
  ContestStatusType,
  useCurrentUserQuery,
  useContestRegistrationMutation,
} from '../../generated/graphql-types';

import ButtonLink from '../ButtonLink';
import { Routes } from '../../constants';
import { CONTEST_BY_ID_QUERY } from '../queries';

export default function AllContest(): JSX.Element {
  const { data, loading } = useAllContestsQuery();
  const { data: userData, loading: getUserLoading } = useCurrentUserQuery({
    fetchPolicy: 'network-only',
  });
  if (loading || getUserLoading) {
    return (
      <Center marginTop={'20vh'}>
        <Spinner />
      </Center>
    );
  }

  const userId = userData?.authenticatedItem?.id;

  return (
    <Flex justifyContent="center" flexWrap="wrap">
      {data?.contests
        ?.slice()
        .sort((a, b) => {
          const order = [
            ContestStatusType.Open,
            ContestStatusType.InProgress,
            ContestStatusType.Complete,
            '',
          ];
          const aStatus = a?.status || '';
          const bStatus = b?.status || '';

          return order.indexOf(aStatus) - order.indexOf(bStatus);
        })
        .map((contest) =>
          contest ? (
            <ContestCard key={contest.id} contest={contest as Contest} userId={userId} />
          ) : null
        )}
    </Flex>
  );
}

type ContestCardProps = {
  contest: Contest;
  userId?: string;
};

function ContestCard({ contest, userId }: ContestCardProps): JSX.Element {
  const router = useRouter();
  const toast = useToast();
  const [registerForContest, { loading }] = useContestRegistrationMutation({
    awaitRefetchQueries: true,
    refetchQueries: [{ query: CONTEST_BY_ID_QUERY, variables: { id: contest.id } }],
  });

  const userHasEntered = contest.registrations?.some((r) => r.user?.id === userId);

  const showEnterContestButton =
    !userHasEntered && userId && contest.status === ContestStatusType.Open;

  const enterContest = async (): Promise<void> => {
    const res = await registerForContest({
      variables: { userId: userId || '', contestId: contest.id },
    });

    if (res.data?.createRegistration?.id) {
      toast({
        title: 'Registered for contest!',
        description: `Welcome to ${contest.name}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      router.push(`/${Routes.CONTESTS}/${contest.id}`);
    }
  };

  const contestHasStarted =
    contest.status === ContestStatusType.InProgress ||
    contest.status === ContestStatusType.Complete;

  return (
    <Box
      maxW={'500px'}
      width={'full'}
      borderWidth={'1px'}
      border={'#3302ff'}
      borderStyle="solid"
      // bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      position={'relative'}
      margin={4}
    >
      <Image
        h={'150px'}
        w={'full'}
        src={contest.image?.image?.publicUrlTransformed || ''}
        objectFit={'cover'}
        objectPosition={'top'}
        // filter={contest.status === 'COMPLETE' ? 'grayscale(80%)' : ''}
      />

      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {contest.name} <ContestCardBadge status={contest.status} />
          </Heading>
          <Text color={'gray.500'}>{contest.description}</Text>
        </Stack>

        <Stack direction={'row'} justify={'center'} spacing={6}>
          <Stat textAlign="center">
            <StatLabel>Entrants</StatLabel>
            <StatNumber>{contest.registrations?.length}</StatNumber>
          </Stat>
          {contest.status === ContestStatusType.Complete && contest.winner ? (
            <Stack align={'center'}>
              <Text fontSize="14px" fontWeight={500}>
                Winner
              </Text>
              <Tooltip label={contest.winner.userName}>
                <Avatar
                  size="md"
                  name={contest.winner.userName || ''}
                  src={contest.winner.avatarImage?.image?.publicUrlTransformed || ''}
                />
              </Tooltip>
            </Stack>
          ) : null}

          <Stat textAlign="center">
            <StatLabel>Entry Fee</StatLabel>
            <StatNumber>${contest.entryFee}</StatNumber>
          </Stat>
        </Stack>
        <HStack display="flex" spacing={3} marginTop={6} justifyContent="center">
          {showEnterContestButton ? (
            <Button
              onClick={enterContest}
              isDisabled={loading}
              isLoading={loading}
              flexGrow={1}
              variant="outline"
              bg="btbets.500"
              color={'white'}
              rounded={'md'}
              _hover={{
                boxShadow: 'lg',
              }}
            >
              Enter Contest
            </Button>
          ) : undefined}
          <ButtonLink
            title={
              contest.status === ContestStatusType.Complete
                ? 'See Contest Results'
                : 'Go to Contest'
            }
            href={
              contestHasStarted
                ? `/${Routes.CONTESTS}/${contest.id}?contestNav=leaderboard`
                : `/${Routes.CONTESTS}/${contest.id}`
            }
            buttonTheme={{ variant: 'outline' }}
          />
        </HStack>
      </Box>
    </Box>
  );
}

type ContestCardBadgeProps = {
  status?: ContestStatusType | null;
};

function ContestCardBadge({ status }: ContestCardBadgeProps): JSX.Element | null {
  if (status === ContestStatusType.Complete) {
    return <Badge colorScheme="red">Complete</Badge>;
  }
  if (status === ContestStatusType.InProgress) {
    return <Badge colorScheme="yellow">In Progress</Badge>;
  }
  if (status === ContestStatusType.Open) {
    return <Badge colorScheme="green">Open</Badge>;
  }
  return null;
}
