import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import useAuth from '@context/userContext';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BsBagFill } from 'react-icons/bs';

const Navbar = () => {
  const { pathname } = useRouter();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      px={{ base: 4, md: 20 }}
      h={{ base: 20, md: 32 }}
      pos='fixed'
      top={0}
      zIndex={10}
      w='100%'
      color={
        pathname === '/' ||
        pathname === '/events' ||
        pathname === '/events/[id]'
          ? 'white'
          : 'black'
      }
      fontWeight='bold'
      d={{
        base: 'none',
        sm:
          pathname === '/auth/register' ||
          pathname === '/auth/login' ||
          pathname === '/auth/forgot-password' ||
          pathname === '/auth/reset-password/[id]' ||
          pathname === '/dashboard'
            ? ''
            : 'flex',
      }}
    >
      <NextLink href='/' passHref>
        <Link _hover={{ textDecor: 'none' }}>
          <Image
            h={{ base: 16, md: 24 }}
            src={
              pathname === '/' ||
              pathname === '/events' ||
              pathname === '/events/[id]'
                ? '/images/logo.png'
                : '/images/logo-black.png'
            }
            alt='logo'
          />
        </Link>
      </NextLink>
      <Box>
        <Heading as='h3' fontSize={{ md: '4xl' }}>
          Culture Curations
        </Heading>
      </Box>
      <Flex align='center'>
        {isAuthenticated ? (
          <Flex align='center' px={{ md: 6 }}>
            <Flex align='center' px={{ md: 6 }}>
              <Avatar src='' size='sm' />
              <Text ml={2}>
                {user.firstName} {user.lastName}
              </Text>
            </Flex>

            <Box
              as='button'
              role='button'
              aria-label='logout button'
              onClick={logout}
            >
              logout
            </Box>
          </Flex>
        ) : (
          <Box px={{ md: 6 }}>
            <NextLink href='/auth/login' passHref>
              <Link _hover={{ textDecor: 'none' }}>Login</Link>
            </NextLink>
          </Box>
        )}

        <Box pos='relative'>
          <Icon as={BsBagFill} boxSize={6} />
          <Flex
            align='center'
            justify='center'
            fontSize='xs'
            w={4}
            h={4}
            rounded='full'
            bg='red.600'
            color='white'
            pos='absolute'
            right={-2}
            top={0}
          >
            0
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
