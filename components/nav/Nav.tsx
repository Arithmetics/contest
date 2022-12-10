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
  Image,
  useBreakpointValue,
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

  const logoWidth = useBreakpointValue({ base: '100px', md: '150px' }, 'md');

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
                padding={2}
                paddingBottom={4}
                margin={0}
                bg="gray.900"
                spacing={3}
                rounded="sm"
                shadow="sm"
                zIndex={10}
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <ButtonLink
                  title="NFL ATS"
                  leftIcon={<GiAmericanFootballBall />}
                  href={`/${Routes.CONTESTS}/ckxwi0h7g07990imcc781udsx`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
                <ButtonLink
                  title="NFL Over Under"
                  leftIcon={<GiAmericanFootballHelmet />}
                  href={`/${Routes.CONTESTS}/ckre48xe10960292pu1w1puj8`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
                <ButtonLink
                  title="NBA Over Under"
                  leftIcon={<IoIosBasketball />}
                  href={`/${Routes.CONTESTS}/cl93po7wh3206630imctmlg2a73`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
              </VStack>
            </Box>

            <ChakraLink href="/" title="LOGO">
              <Image width={logoWidth} bg={'gray.600'} src="/images/bt-bets-logo.png" />
            </ChakraLink>

            <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
              <ButtonLink
                title="NFL ATS"
                leftIcon={<GiAmericanFootballBall />}
                href={`/${Routes.CONTESTS}/ckxwi0h7g07990imcc781udsx`}
                buttonTheme={determineLinkStyle(`/${Routes.CONTESTS}/ckxwi0h7g07990imcc781udsx`)}
              />
              <ButtonLink
                title="NFL Over Under"
                leftIcon={<GiAmericanFootballHelmet />}
                href={`/${Routes.CONTESTS}/cl6sco44c19150jmcou8s8rlg`}
                buttonTheme={determineLinkStyle(`/${Routes.CONTESTS}/cl6sco44c19150jmcou8s8rlg`)}
              />
              <ButtonLink
                title="NBA Over Under"
                leftIcon={<IoIosBasketball />}
                href={`/${Routes.CONTESTS}/cl93po7wh3206630imctmlg2a73`}
                buttonTheme={determineLinkStyle(`/${Routes.CONTESTS}/cl93po7wh3206630imctmlg2a73`)}
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
    </>
  );
}
