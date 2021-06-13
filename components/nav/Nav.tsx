import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  ThemingProps,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosBasketball } from 'react-icons/io';
import { GiAmericanFootballHelmet, GiAmericanFootballBall } from 'react-icons/gi';
import { useRouter } from 'next/router';

import { Routes } from '../../constants';
import LogOut from '../auth/LogOut';

import ButtonLink from '../ButtonLink';
import ChakraLink from '../ChakraLink';
import { useUser } from '../User';
import AvatarLink from '../AvatarLink';

export default function Nav(): JSX.Element {
  const mobileNav = useDisclosure();
  const router = useRouter();

  const user = useUser();

  const avatarUrl = user?.avatarImage?.image?.publicUrlTransformed;

  const determineLinkStyle = (link: string): ThemingProps<'Button'> => {
    if (router.pathname === link) {
      return { variant: 'solid', size: 'sm', colorScheme: 'teal' };
    }
    return { variant: 'ghost', size: 'sm', colorScheme: 'white' };
  };

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
                <ButtonLink
                  title="NFL ATS"
                  leftIcon={<GiAmericanFootballBall />}
                  href={`/${Routes.CONTESTS}/nflPlayoffATS`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
                <ButtonLink
                  title="NFL Over Under"
                  leftIcon={<GiAmericanFootballHelmet />}
                  href={`/${Routes.CONTESTS}/nflOverUnder`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
                <ButtonLink
                  title="NBA Over Under"
                  leftIcon={<IoIosBasketball />}
                  href={`/${Routes.CONTESTS}/nbaOverUnder`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
              </VStack>
            </Box>
            {/* <chakra.a href="/" title="Home page" display="flex" alignItems="center">
              Logo
            </chakra.a> */}

            <ChakraLink href="/" title="LOGO" />

            <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
              <ButtonLink
                title="NFL ATS"
                leftIcon={<GiAmericanFootballBall />}
                href={`/${Routes.CONTESTS}/nflPlayoffATS`}
                buttonTheme={determineLinkStyle(`/${Routes.CONTESTS}/nflPlayoffATS`)}
              />
              <ButtonLink
                title="NFL Over Under"
                leftIcon={<GiAmericanFootballHelmet />}
                href={`/${Routes.CONTESTS}/nflOverUnder`}
                buttonTheme={determineLinkStyle(`/${Routes.CONTESTS}/nflOverUnder`)}
              />
              <ButtonLink
                title="NBA Over Under"
                leftIcon={<IoIosBasketball />}
                href={`/${Routes.CONTESTS}/nbaOverUnder`}
                buttonTheme={determineLinkStyle(`/${Routes.CONTESTS}/nbaOverUnder`)}
              />
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
                <ButtonLink
                  title="Sign Up"
                  href={`/${Routes.SIGNUP}`}
                  buttonTheme={{ variant: 'ghost', colorScheme: 'teal' }}
                />
                <ButtonLink
                  title="Log In"
                  href={`/${Routes.LOGIN}`}
                  buttonTheme={{ variant: 'ghost', colorScheme: 'teal' }}
                />
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
