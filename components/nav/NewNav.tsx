import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosBasketball } from 'react-icons/io';
import { GiAmericanFootballHelmet, GiAmericanFootballBall } from 'react-icons/gi';

import ButtonLink from '../ButtonLink';
import ChakraLink from '../ChakraLink';
import LogOut from '../auth/LogOut';
import { useUser } from '../User';
import AvatarLink from '../AvatarLink';

export default function NewNav(): JSX.Element {
  const mobileNav = useDisclosure();

  const user = useUser();

  const avatarUrl = user?.avatarImage?.image?.publicUrlTransformed;

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
                bg="gray.900"
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" href="#" leftIcon={<GiAmericanFootballBall />}>
                  NFL ATS
                </Button>
                <Button w="full" variant="ghost" href="#" leftIcon={<GiAmericanFootballHelmet />}>
                  NFL Over Under
                </Button>
                <Button w="full" variant="ghost" href="#" leftIcon={<IoIosBasketball />}>
                  NBA Over Under
                </Button>
              </VStack>
            </Box>
            {/* <chakra.a href="/" title="Home page" display="flex" alignItems="center">
              Logo
            </chakra.a> */}

            <ChakraLink href="/" title="LOGO" />

            <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
              <Button variant="ghost" href="#" leftIcon={<GiAmericanFootballBall />} size="sm">
                NFL ATS
              </Button>
              <Button
                variant="solid"
                colorScheme="teal"
                href="#"
                leftIcon={<GiAmericanFootballHelmet />}
                size="sm"
              >
                NFL Over Under
              </Button>
              <Button variant="ghost" href="#" leftIcon={<IoIosBasketball />} size="sm">
                NBA Over Under
              </Button>
            </HStack>
          </HStack>
          <HStack spacing={3} display={mobileNav.isOpen ? 'none' : 'flex'} alignItems="center">
            {user ? (
              <>
                <AvatarLink
                  size="md"
                  name={user.userName || ''}
                  src={avatarUrl || ''}
                  title="account"
                  href="/account"
                />
                <LogOut />
              </>
            ) : (
              <>
                <ButtonLink title="Sign Up" href="/signup" />
                <ButtonLink title="Log In" href="/login" />
              </>
            )}
          </HStack>
        </Flex>
      </chakra.header>
      {/* <Flex alignItems="center" justifyContent="center" mx={2} borderWidth={0} overflowX="auto">
        <Tabs defaultIndex={1} borderBottomColor="transparent" colorScheme="teal">
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
              Make Picks
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
      </Flex> */}
    </>
  );
}
