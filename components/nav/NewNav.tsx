import React from 'react';

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
} from '@chakra-ui/react';
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';

export default function Dsll(): JSX.Element {
  const mobileNav = useDisclosure();

  return (
    <>
      <chakra.header bg="gray.900" w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg="gray.800"
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" href="#" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button w="full" variant="ghost" href="#" leftIcon={<AiOutlineInbox />}>
                  Inbox
                </Button>
                <Button w="full" variant="ghost" href="#" leftIcon={<BsFillCameraVideoFill />}>
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a href="/" title="Choc Home Page" display="flex" alignItems="center">
              Logo
            </chakra.a>

            <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
              <Button variant="ghost" href="#" leftIcon={<AiFillHome />} size="sm">
                Dashboard
              </Button>
              <Button variant="ghost" href="#" leftIcon={<AiOutlineInbox />} size="sm">
                Inbox
              </Button>
              <Button variant="ghost" href="#" leftIcon={<BsFillCameraVideoFill />} size="sm">
                Videos
              </Button>
            </HStack>
          </HStack>
          <HStack spacing={3} display={mobileNav.isOpen ? 'none' : 'flex'} alignItems="center">
            <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
}
