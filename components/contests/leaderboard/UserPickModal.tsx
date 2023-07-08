import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  VStack,
  ModalHeader,
  ModalOverlay,
  Spinner,
  HStack,
  Avatar,
  Text,
  Center,
  Divider,
} from '@chakra-ui/react';
import { useUserContestBetsQuery, User, ChoiceStatus } from '../../../generated/graphql-types';
import UserPickEntry from './UserPickEntry';

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

  const lockedWinLines = data?.contest?.lines?.filter((line) =>
    line?.choices?.some((choice) => choice?.bets?.length && choice?.status === ChoiceStatus.Won)
  );

  const winningLines = data?.contest?.lines?.filter((line) =>
    line?.choices?.some((choice) => choice?.bets?.length && choice?.status === ChoiceStatus.Winning)
  );

  const losingLines = data?.contest?.lines?.filter((line) =>
    line?.choices?.some((choice) => choice?.bets?.length && choice?.status === ChoiceStatus.Losing)
  );

  const lockedLossLines = data?.contest?.lines?.filter((line) =>
    line?.choices?.some((choice) => choice?.bets?.length && choice?.status === ChoiceStatus.Lost)
  );

  const notStartedLines = data?.contest?.lines?.filter((line) =>
    line?.choices?.some(
      (choice) => choice?.bets?.length && choice?.status === ChoiceStatus.NotStarted
    )
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
          <ModalBody>
            {loading ? (
              <Center marginY={8}>
                <Spinner color="red.500" marginLeft="auto" marginRight="auto" size="xl" />
              </Center>
            ) : (
              <VStack alignItems="start" margin={2}>
                {lockedWinLines?.length && (
                  <>
                    <Text fontSize="20px">Won</Text>
                    {lockedWinLines?.map((line) => {
                      return line?.choices?.map((choice) => {
                        return choice?.bets?.map((bet) => {
                          return (
                            <UserPickEntry key={bet.id} choice={choice} line={line} bet={bet} />
                          );
                        });
                      });
                    })}
                    <Divider />
                  </>
                )}
                {winningLines?.length && (
                  <>
                    <Text fontSize="20px">Winning</Text>
                    {winningLines?.map((line) => {
                      return line?.choices?.map((choice) => {
                        return choice?.bets?.map((bet) => {
                          return (
                            <UserPickEntry key={bet.id} choice={choice} line={line} bet={bet} />
                          );
                        });
                      });
                    })}
                    <Divider />
                  </>
                )}
                {losingLines?.length && (
                  <>
                    <Text fontSize="20px">Losing</Text>
                    {losingLines?.map((line) => {
                      return line?.choices?.map((choice) => {
                        return choice?.bets?.map((bet) => {
                          return (
                            <UserPickEntry key={bet.id} choice={choice} line={line} bet={bet} />
                          );
                        });
                      });
                    })}
                    <Divider />
                  </>
                )}
                {lockedLossLines?.length && (
                  <>
                    <Text fontSize="20px">Lost</Text>
                    {lockedLossLines?.map((line) => {
                      return line?.choices?.map((choice) => {
                        return choice?.bets?.map((bet) => {
                          return (
                            <UserPickEntry key={bet.id} choice={choice} line={line} bet={bet} />
                          );
                        });
                      });
                    })}
                    <Divider />
                  </>
                )}
                {notStartedLines?.length && (
                  <>
                    <Text fontSize="20px">Not Started</Text>
                    {notStartedLines?.map((line) => {
                      return line?.choices?.map((choice) => {
                        return choice?.bets?.map((bet) => {
                          return (
                            <UserPickEntry key={bet.id} choice={choice} line={line} bet={bet} />
                          );
                        });
                      });
                    })}
                    <Divider />
                  </>
                )}
                {!anyBets && <Text>No Bets</Text>}
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
