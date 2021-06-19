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
  useDisclosure,
} from '@chakra-ui/react';
import {
  Contest,
  useContestRegistrationMutation,
  useCurrentUserQuery,
  ContestStatusType,
  useDeleteContestRegistrationMutation,
  Registration,
} from '../../generated/graphql-types';
import { CONTEST_BY_ID_QUERY } from '../queries';

type ContestNavProps = {
  contest?: Contest;
  selectedTab?: number;
  handleTabsChange?: (arg0: number) => void;
};

export default function ContestNav({
  selectedTab,
  handleTabsChange,
  contest,
}: ContestNavProps): JSX.Element {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: userData, loading: getUserLoading } = useCurrentUserQuery();
  const [registerForContest, { loading: registerLoading }] = useContestRegistrationMutation({
    refetchQueries: [{ query: CONTEST_BY_ID_QUERY, variables: { id: contest?.id } }],
  });

  const userId = userData?.authenticatedItem?.id;
  const userHasEntered = contest?.registrations.some((r) => r.user?.id === userId);
  const showEnterContestButton =
    !userHasEntered && userId && contest?.status === ContestStatusType.Open;
  const showLeaveContestButton =
    userHasEntered && userId && contest?.status == ContestStatusType.Open;
  const registrationId = contest?.registrations.find((r) => r.user?.id === userId)?.id;

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

  return (
    <Box overflow="hidden" padding={6} m={6}>
      <DeleteRegistrationConfirmModal
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        contestId={contest?.id}
        registrationId={registrationId}
      />
      {contest ? (
        <Text fontSize="3xl" textAlign="center">
          {contest.name}
        </Text>
      ) : undefined}

      {showEnterContestButton ? (
        <Center padding={2}>
          <Button
            onClick={enterContest}
            disabled={registerLoading || getUserLoading}
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
      {showLeaveContestButton ? (
        <Center padding={2}>
          <Button onClick={onOpen} variant="red-gradient">
            Leave Contest
          </Button>
        </Center>
      ) : undefined}

      <Flex alignItems="center" justifyContent="center" mx={2} borderWidth={0} overflowX="auto">
        <Tabs
          index={selectedTab}
          borderBottomColor="transparent"
          colorScheme="teal"
          onChange={handleTabsChange}
        >
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
              Picks
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
