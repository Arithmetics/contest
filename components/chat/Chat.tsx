/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddIcon, ChatIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  VStack,
  Box,
} from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import {
  Chat as ChatType,
  useCreateChatMutation,
  useGetContestChatQuery,
} from '../../generated/graphql-types';
import { useUser } from '../User';
import useLocalStorage from './useLocalStorage';

type ChatProps = {
  contestId?: string;
};

export const Chat = ({ contestId }: ChatProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const counter = useRef<number>(0);
  const [seenChatIds, setSeenChatIds] = useLocalStorage<string[]>(`seenChatIds-${contestId}`, []);

  const [alertCount, setAlertCount] = useState(0);

  const [content, setContent] = useState('');
  const [newChats, setNewChats] = useState<ChatType[]>([]);
  const user = useUser();
  const { data, loading } = useGetContestChatQuery({
    variables: {
      contestId: contestId || '',
    },
    onCompleted: (data) => {
      console.log(seenChatIds);
      const unseenChats = data?.chats?.filter((chat) => !seenChatIds.includes(chat.id));
      setAlertCount(unseenChats?.length || 0);
      setSeenChatIds([...seenChatIds, ...(unseenChats?.map((chat) => chat.id) || [])]);
    },
  });

  const [mutate, { loading: mutateLoading }] = useCreateChatMutation();

  const handleChange = (event: any): void => setContent(event.target.value);

  const handleOpen = (): void => {
    setAlertCount(0);
    onOpen();
  };

  const handleSend = (): void => {
    mutate({
      variables: {
        userId: user?.id || '',
        contestId: contestId || '',
        content,
      },
      onCompleted: (data) => {
        setNewChats([
          ...newChats,
          {
            id: data.createChat?.id || '',
            content,
            user: { id: user?.id || '', userName: user?.userName },
          },
        ]);
        counter.current += 1;
        setContent('');
        setSeenChatIds([...seenChatIds, data.createChat?.id || '']);
      },
    });
  };

  const allChats = data?.chats?.concat(newChats);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
      }}
    >
      <Button
        isLoading={loading}
        size="lg"
        rightIcon={<ChatIcon />}
        colorScheme="teal"
        onClick={handleOpen}
        position="relative"
      >
        {alertCount > 0 && (
          <Box
            padding="5px"
            width="36px"
            backgroundColor="red.600"
            position="absolute"
            top="-20px"
            left="-20px"
            borderRadius="500px"
          >
            <Text color="whiteAlpha.600">{alertCount}</Text>
          </Box>
        )}
        Chat
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chat</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box maxHeight="400px" overflow="scroll">
              {allChats?.map((chat) => {
                return (
                  <VStack
                    key={chat.id}
                    alignItems="start"
                    border="1px solid"
                    padding={2}
                    marginBottom={2}
                    borderColor="teal.500"
                    borderRadius={5}
                  >
                    <HStack key={chat.id}>
                      <Avatar
                        size="sm"
                        name={user?.userName || ''}
                        src={user?.avatarImage?.image?.publicUrlTransformed || ''}
                      />
                      <Text fontSize="md">{user?.userName}</Text>
                    </HStack>
                    <Text>{chat?.content}</Text>
                  </VStack>
                );
              })}
            </Box>
            <HStack marginY={5}>
              <Input
                placeholder="Chat here"
                disabled={mutateLoading}
                onChange={handleChange}
                value={content}
                onKeyPress={(e) => (e.key === 'Enter' ? handleSend() : undefined)}
              />
              <Button
                isLoading={mutateLoading}
                size="md"
                rightIcon={<AddIcon />}
                colorScheme="teal"
                onClick={handleSend}
              >
                Send
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Chat;
