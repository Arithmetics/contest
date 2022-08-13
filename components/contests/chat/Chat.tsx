import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from '@chatscope/chat-ui-kit-react';

const Chat = ({
  contestId,
  isOpen,
  onClose,
}: {
  contestId: string | undefined;
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element => {
  const onChatSend = (
    _innerHtml: string,
    _textContent: string,
    innerText: string
    // _nodes: NodeList
  ): void => {
    console.log(innerText);
  };

  const onChatChange = (): void => {
    console.log(3);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Chat</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div
            style={{
              position: 'relative',
              height: '500px',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <MainContainer>
              <ChatContainer>
                <MessageList>
                  <Avatar
                    src={
                      'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'
                    }
                    name="Akane"
                  />
                  <Message
                    avatarPosition="top-left"
                    avatarSpacer={true}
                    model={{
                      message: `Hello my friend welcome to contest ${contestId}`,
                      sentTime: 'just now',
                      sender: 'Joe',
                      direction: 'incoming',
                      position: 'normal',
                    }}
                  />
                </MessageList>
                <MessageInput
                  placeholder="Type message here"
                  attachButton={false}
                  onSend={onChatSend}
                  onChange={onChatChange}
                />
              </ChatContainer>
            </MainContainer>
          </div>
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default Chat;
