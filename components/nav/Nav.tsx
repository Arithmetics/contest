'use client';

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
import { CgCardClubs } from 'react-icons/cg';
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

  const avatarUrl = user?.avatarImage?.image?.publicUrlTransformed?.replace(
    '/upload/',
    `/upload/w_100,h_100,q_auto,f_auto/`
  );

  const determineLinkStyle = (link: string): ThemingProps<'Button'> => {
    if (router.asPath === link) {
      return {
        variant: 'solid',
        size: 'sm',
        colorScheme: 'btbets',
      };
    }
    return { variant: 'ghost', size: 'sm', colorScheme: 'white' };
  };

  return (
    <>
      <chakra.header bg="blackAlpha.900" w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
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
                spacing={1}
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
                  title="NBA Playoff Club"
                  leftIcon={<CgCardClubs />}
                  href={`/${Routes.CONTESTS}/cluyk8rno0002mc0jabu8urxt`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
                <ButtonLink
                  title="NFL ATS"
                  leftIcon={<GiAmericanFootballBall />}
                  href={`/${Routes.CONTESTS}/clr5al1bp00t0mc0ilwlmm42e`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />

                <ButtonLink
                  title="NFL Over Under"
                  leftIcon={<GiAmericanFootballHelmet />}
                  href={`/${Routes.CONTESTS}/cm0k4j7er005emc0jtzxxmm6l`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
                <ButtonLink
                  title="NBA Over Under"
                  leftIcon={<IoIosBasketball />}
                  href={`/${Routes.CONTESTS}/cm1r8i861008mmc0j0ee9tm6g`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
              </VStack>
            </Box>

            <ChakraLink href="/" title="LOGO">
              <Image
                width={logoWidth}
                bg={'gray.600'}
                mr={10}
                src="/images/bt-bets-logo.png"
                display={{ base: 'none', lg: 'block' }}
              />
            </ChakraLink>
            <ChakraLink href="/" title="LOGO">
              <Image
                bg={'gray.600'}
                width={'60px'}
                mr={10}
                src="/images/bt-bets-mobile-icon.png"
                display={{ base: 'block', lg: 'none' }}
              />
            </ChakraLink>

            <HStack spacing={1} display={{ base: 'none', md: 'inline-flex' }}>
              <ButtonLink
                title="NBA Playoff Club"
                leftIcon={<CgCardClubs />}
                href={`/${Routes.CONTESTS}/cluyk8rno0002mc0jabu8urxt`}
                buttonTheme={determineLinkStyle(`/${Routes.CONTESTS}/cluyk8rno0002mc0jabu8urxt`)}
              />
              <ButtonLink
                title="NFL ATS"
                leftIcon={<GiAmericanFootballBall />}
                href={`/${Routes.CONTESTS}/clr5al1bp00t0mc0ilwlmm42e`}
                buttonTheme={determineLinkStyle(`/${Routes.CONTESTS}/clr5al1bp00t0mc0ilwlmm42e`)}
              />
              <ButtonLink
                title="NFL Over Under"
                leftIcon={<GiAmericanFootballHelmet />}
                href={`/${Routes.CONTESTS}/cm0k4j7er005emc0jtzxxmm6l`}
                buttonTheme={determineLinkStyle(`/${Routes.CONTESTS}/cm0k4j7er005emc0jtzxxmm6l`)}
              />
              <ButtonLink
                title="NBA Over Under"
                leftIcon={<IoIosBasketball />}
                href={`/${Routes.CONTESTS}/cm1r8i861008mmc0j0ee9tm6g`}
                buttonTheme={determineLinkStyle(`/${Routes.CONTESTS}/cm1r8i861008mmc0j0ee9tm6g`)}
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
                  buttonTheme={{ variant: 'ghost', colorScheme: 'btbets' }}
                />
                <ButtonLink
                  title="Log In"
                  href={`/${Routes.LOGIN}`}
                  buttonTheme={{ variant: 'ghost', colorScheme: 'btbets' }}
                />
              </>
            )}
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
}
