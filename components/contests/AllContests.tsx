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
  Spinner,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';

import { useAllContestsQuery, Contest, ContestStatusType } from '../../generated/graphql-types';

import ButtonLink from '../ButtonLink';
import { Routes } from '../../constants';

export default function AllContest(): JSX.Element {
  const { data, loading } = useAllContestsQuery();

  if (loading) {
    return (
      <Center marginTop={'30vh'}>
        <Spinner color="red.500" marginLeft="auto" marginRight="auto" />
      </Center>
    );
  }
  return (
    <Flex justifyContent="center">
      {data?.allContests?.map((contest) =>
        contest ? <ContestCard key={contest.id} contest={contest as Contest} /> : null
      )}
    </Flex>
  );
}

type ContestCardProps = {
  contest: Contest;
};

function ContestCard({ contest }: ContestCardProps): JSX.Element {
  return (
    <Box
      maxW={'500px'}
      width={'full'}
      bg={useColorModeValue('white', 'gray.600')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      position={'relative'}
      margin={4}
    >
      <Flex position="absolute" top={5} left={5} zIndex={1}>
        <ContestCardBadge status={contest.status} />
      </Flex>
      <Image
        h={'150px'}
        w={'full'}
        src={contest.image?.image?.publicUrlTransformed || ''}
        objectFit={'cover'}
      />

      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {contest.name}
          </Heading>
          <Text color={'gray.500'}>{contest.description}</Text>
        </Stack>

        <Stack direction={'row'} justify={'center'} spacing={6}>
          <Stack spacing={0} align={'center'}>
            <Text fontWeight={600}>23</Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              Entrants
            </Text>
          </Stack>
          <Stack spacing={0} align={'center'}>
            <Text fontWeight={600}>${contest.entryFee}</Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              Entry Fee
            </Text>
          </Stack>
        </Stack>
        <HStack display="flex" spacing={3} marginTop={6} justifyContent="center">
          {contest.status === ContestStatusType.Open ? (
            <Button
              flexGrow={1}
              variant="outline"
              bg="teal.500"
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
            href={`/${Routes.CONTESTS}/${contest.id}`}
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
  console.log(status);
  if (status === ContestStatusType.Complete) {
    return <Badge colorScheme="red">Complete</Badge>;
  }
  if (status === ContestStatusType.InProgress) {
    <Badge colorScheme="yellow">In Progress</Badge>;
  }
  if (status === ContestStatusType.Open) {
    return <Badge colorScheme="green">Open</Badge>;
  }
  return null;
}
