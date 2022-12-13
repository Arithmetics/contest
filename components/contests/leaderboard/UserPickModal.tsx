import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  VStack,
  ModalHeader,
  Badge,
  ModalOverlay,
  Spinner,
  HStack,
  Avatar,
  Text,
  Center,
} from '@chakra-ui/react';
import { useUserContestBetsQuery, User } from '../../../generated/graphql-types';
import { lossesForUnder, winsForOver } from '../tracker/TrackerOU';

type UserPickModalProps = {
  contestId?: string;
  user?: User;
  onClose: () => void;
};

export default function UserPickModal({
  contestId,
  user,
  onClose,
}: UserPickModalProps): JSX.Element {
  const isOpen = !!user;

  const { data, loading } = useUserContestBetsQuery({
    variables: {
      contestId: contestId || 'cl82iclpy000009l5fn461xrg',
      userId: user?.id || 'cl82iclpy000009l5fn461xrg',
    },
  });

  const avatarUrl = user?.avatarImage?.image?.publicUrlTransformed;

  const anyBets = data?.contest?.lines?.some((line) =>
    line?.choices?.some((choice) => choice?.bets?.length)
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack>
              <Avatar size="sm" name={user?.userName || ''} src={avatarUrl || ''} />
              <Text>{user?.userName}</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody width={'600px'} maxWidth={'95vw'}>
            {loading ? (
              <Center marginY={8}>
                <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
              </Center>
            ) : (
              <VStack alignItems="start" margin={2}>
                {anyBets ? (
                  data?.contest?.lines?.map((line) => {
                    const winsNeeded = winsForOver(line);
                    const lossesNeeded = lossesForUnder(line);

                    return line?.choices?.map((choice) => {
                      if (!choice.bets?.length) {
                        return undefined;
                      }
                      return choice?.bets?.map((bet) => {
                        return (
                          <HStack key={bet.id}>
                            <Avatar
                              size="sm"
                              bg="gray.500"
                              marginRight={'10px'}
                              name={line?.title || ''}
                              src={line?.image?.image?.publicUrlTransformed || ''}
                            />
                            <div>
                              {line.title} - {line.benchmark}
                            </div>
                            <Badge colorScheme={choice.selection === 'OVER' ? 'green' : 'red'}>
                              {choice.selection}
                            </Badge>
                            {bet.isSuper && <Badge colorScheme="purple">Super</Badge>}
                            {winsNeeded < 0 && choice.selection === 'OVER' && (
                              <Badge variant="outline" colorScheme="green">
                                WIN
                              </Badge>
                            )}
                            {lossesNeeded < 0 && choice.selection === 'UNDER' && (
                              <Badge variant="outline" colorScheme="green">
                                WIN
                              </Badge>
                            )}

                            {winsNeeded < 0 && choice.selection === 'UNDER' && (
                              <Badge variant="outline" colorScheme="red">
                                LOSS
                              </Badge>
                            )}
                            {lossesNeeded < 0 && choice.selection === 'OVER' && (
                              <Badge variant="outline" colorScheme="red">
                                LOSS
                              </Badge>
                            )}

                            {!(lossesNeeded < 0) && !(winsNeeded < 0) && (
                              <Badge>{`${winsNeeded}W / ${lossesNeeded}L`}</Badge>
                            )}
                          </HStack>
                        );
                      });
                    });
                  })
                ) : (
                  <Text>No Bets</Text>
                )}
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
