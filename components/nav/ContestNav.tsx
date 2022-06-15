import {
  Center,
  Flex,
  Text,
  Tabs,
  Tab,
  TabList,
  Box,
  useToast,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverBody,
  PopoverTrigger,
  useDisclosure,
  useBreakpointValue,
  HStack,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import {
  Contest,
  useContestRegistrationMutation,
  useCurrentUserQuery,
  ContestStatusType,
  useDeleteContestRegistrationMutation,
  useContestByIdQuery,
} from '../../generated/graphql-types';
import { CONTEST_BY_ID_QUERY } from '../queries';

export enum ContestTabs {
  BETS = 'bets',
  LEADERBOARD = 'leaderboard',
  RULES = 'rules',
  TRACKER = 'tracker',
  HISTORY = 'history',
  ADMIN = 'admin',
}

const tabIndices: Record<number, ContestTabs> = {
  0: ContestTabs.BETS,
  1: ContestTabs.LEADERBOARD,
  2: ContestTabs.RULES,
  3: ContestTabs.TRACKER,
  4: ContestTabs.HISTORY,
  5: ContestTabs.ADMIN,
};

const indexedTabs: Record<string, number> = {
  [ContestTabs.BETS]: 0,
  [ContestTabs.LEADERBOARD]: 1,
  [ContestTabs.RULES]: 2,
  [ContestTabs.TRACKER]: 3,
  [ContestTabs.HISTORY]: 4,
  [ContestTabs.ADMIN]: 5,
};

type ContestNavProps = {
  contestId?: string;
  selectedTab?: ContestTabs;
};

export default function ContestNav({ selectedTab, contestId }: ContestNavProps): JSX.Element {
  const toast = useToast();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: userData, loading: getUserLoading } = useCurrentUserQuery();
  const [registerForContest, { loading: registerLoading }] = useContestRegistrationMutation({
    awaitRefetchQueries: true,
    refetchQueries: [{ query: CONTEST_BY_ID_QUERY, variables: { id: contestId } }],
  });
  const { data: contestData, loading: getContestLoading } = useContestByIdQuery({
    variables: {
      id: contestId || '',
    },
  });

  const contest = contestData?.contest as Contest | undefined;
  const userId = userData?.authenticatedItem?.id;
  const userHasEntered = contest?.registrations?.some((r) => r.user?.id === userId);
  const showEnterContestButton =
    !userHasEntered && userId && contest?.status === ContestStatusType.Open;
  const showLeaveContestButton =
    userHasEntered && userId && contest?.status == ContestStatusType.Open;

  const registrationId = contest?.registrations?.find((r) => r.user?.id === userId)?.id;

  const enterContest = async (): Promise<void> => {
    try {
      const res = await registerForContest({
        variables: { userId: userId || '', contestId: contest?.id || '' },
      });

      if (res.data?.createRegistration?.id) {
        toast({
          title: 'Registered for contest!',
          description: `Welcome to ${contest?.name}`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: 'Error',
        description: 'There was an issue signing up for the contest. Refresh and try again',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const updateUrl = (index: number): void => {
    router.push(
      {
        pathname: `${router.pathname}`,
        query: { ...router.query, contestNav: tabIndices[index] },
      },
      undefined,
      { shallow: true }
    );
  };

  const marginBox = useBreakpointValue({ base: 1, sm: 2, md: 6 });
  const headerText = useBreakpointValue({ base: '2xl', sm: '2xl', md: '4xl' });

  return (
    <Box overflow="hidden" m={marginBox} marginTop={2}>
      <DeleteRegistrationConfirmModal
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        contestId={contest?.id}
        registrationId={registrationId}
      />
      {contest ? (
        <>
          <Center>
            <HStack>
              <Text fontSize={headerText} textAlign="center">
                {contest.name}
              </Text>

              {!getContestLoading && showLeaveContestButton ? (
                <Popover>
                  <PopoverTrigger>
                    <SettingsIcon width={10} />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Center padding={2}>
                        <Button onClick={onOpen} variant="red-gradient">
                          Leave Contest
                        </Button>
                      </Center>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              ) : undefined}
            </HStack>
          </Center>

          <Center>
            <Text fontSize="lg" textAlign="center">
              {contest?.description}
            </Text>
          </Center>
        </>
      ) : undefined}

      {!getContestLoading && showEnterContestButton ? (
        <Center padding={2}>
          <Button
            onClick={enterContest}
            disabled={registerLoading || getUserLoading || getContestLoading}
            isLoading={registerLoading}
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
        </Center>
      ) : undefined}

      <Flex alignItems="center" justifyContent="center" mx={2} borderWidth={0} overflowX="auto">
        <Tabs
          index={indexedTabs[selectedTab || ContestTabs.BETS]}
          borderBottomColor="transparent"
          colorScheme="teal"
          onChange={updateUrl}
          overflowX="auto"
        >
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
              Bets
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
              Leaderboard
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
              Rules
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
              Tracker
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
              History
            </Tab>
            {userData?.authenticatedItem?.isAdmin && (
              <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
                Admin
              </Tab>
            )}
          </TabList>
        </Tabs>
      </Flex>
    </Box>
  );
}

type DeleteRegistrationModalProps = {
  contestId?: string;
  registrationId?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function DeleteRegistrationConfirmModal({
  contestId,
  registrationId,
  isOpen,
  onClose,
}: DeleteRegistrationModalProps): JSX.Element {
  const toast = useToast();
  const [deleteRegistration, { loading }] = useDeleteContestRegistrationMutation({
    refetchQueries: [{ query: CONTEST_BY_ID_QUERY, variables: { id: contestId } }],
    update: (cache, payload) => {
      return cache.evict({
        id:
          cache.identify({
            __typename: 'Registration',
            id: payload.data?.deleteRegistration?.id || '',
          }) || '',
      });
    },
  });

  const onClick = async (): Promise<void> => {
    try {
      const res = await deleteRegistration({
        variables: { id: registrationId || '' },
      });

      if (res.data?.deleteRegistration?.id) {
        toast({
          title: 'You have been removed from the contest',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch {
      toast({
        title: 'Error',
        description: 'There was an issue removing you from the contest. Refresh and try again',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Please confirm you wish to leave the contest. All your open bets will be deleted. You
            can always join again until the contest is closed.
          </ModalBody>

          <ModalFooter>
            <Button
              variant="red-gradient"
              marginRight={3}
              onClick={onClick}
              disabled={loading}
              isLoading={loading}
            >
              Confirm
            </Button>
            <Button variant="ghost" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
