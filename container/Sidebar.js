import React from 'react';
import { Box, Flex, Link, List, ListItem, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import ActiveLink from 'lib/ActiveLink';
import NextLink from 'next/link';
import useAuth from '@context/userContext';

const Sidebar = () => {
  const { logout, user } = useAuth();

  console.log('user', user);

  return (
    <Flex
      direction='column'
      justify='space-between'
      h='95vh'
      fontSize='xl'
      pos='fixed'
      as='aside'
    >
      <Flex direction='column'>
        <NextLink href='/' passHref>
          <Link _hover={{ textDecor: 'none' }}>
            <Box h={20} px={6}>
              <Image
                h='100%'
                src='/images/logo.png'
                alt='curatedByCulture logo'
              />
            </Box>
          </Link>
        </NextLink>
        <List mt={16}>
          <ActiveLink href='/dashboard' activeClassName='activeLink' passHref>
            <ListItem
              px={8}
              py={4}
              w='100%'
              _hover={{ bg: 'gray.100', color: 'gray.700' }}
              cursor='pointer'
            >
              Home
            </ListItem>
          </ActiveLink>
          <ActiveLink href='/my-tickets' activeClassName='activeLink' passHref>
            <ListItem
              px={8}
              py={4}
              w='100%'
              _hover={{ bg: 'gray.100', color: 'gray.700' }}
              cursor='pointer'
            >
              My Tickets
            </ListItem>
          </ActiveLink>
          <ActiveLink href='/my-events' activeClassName='activeLink' passHref>
            <ListItem
              px={8}
              py={4}
              w='100%'
              _hover={{ bg: 'gray.100', color: 'gray.700' }}
              cursor='pointer'
            >
              My Events
            </ListItem>
          </ActiveLink>
          <ActiveLink href='/my-account' activeClassName='activeLink' passHref>
            <ListItem
              px={8}
              py={4}
              w='100%'
              _hover={{ bg: 'gray.100', color: 'gray.700' }}
              cursor='pointer'
            >
              My Account
            </ListItem>
          </ActiveLink>
          <ActiveLink
            href='/manage-events'
            activeClassName='activeLink'
            passHref
          >
            <ListItem
              d={user?.role === 'admin' ? 'block' : 'none'}
              px={8}
              py={4}
              w='100%'
              _hover={{ bg: 'gray.100', color: 'gray.700' }}
              cursor='pointer'
            >
              Manage Events
            </ListItem>
          </ActiveLink>
          <ActiveLink
            href='/manage-slides'
            activeClassName='activeLink'
            passHref
          >
            <ListItem
              d={user?.role === 'admin' ? 'block' : 'none'}
              px={8}
              py={4}
              w='100%'
              _hover={{ bg: 'gray.100', color: 'gray.700' }}
              cursor='pointer'
            >
              Manage Slides
            </ListItem>
          </ActiveLink>
          <ActiveLink
            href='/manage-gallery'
            activeClassName='activeLink'
            passHref
          >
            <ListItem
              d={user?.role === 'admin' ? 'block' : 'none'}
              px={8}
              py={4}
              w='100%'
              _hover={{ bg: 'gray.100', color: 'gray.700' }}
              cursor='pointer'
            >
              Manage Gallery
            </ListItem>
          </ActiveLink>
          <ActiveLink
            href='/manage-bookings'
            activeClassName='activeLink'
            passHref
          >
            <ListItem
              d={user?.role === 'admin' ? 'block' : 'none'}
              px={8}
              py={4}
              w='100%'
              _hover={{ bg: 'gray.100', color: 'gray.700' }}
              cursor='pointer'
            >
              Manage Bookings
            </ListItem>
          </ActiveLink>
          <ActiveLink
            href='/manage-users'
            activeClassName='activeLink'
            passHref
          >
            <ListItem
              d={user?.role === 'admin' ? 'block' : 'none'}
              px={8}
              py={4}
              w='100%'
              _hover={{ bg: 'gray.100', color: 'gray.700' }}
              cursor='pointer'
            >
              Manage Users
            </ListItem>
          </ActiveLink>
        </List>
      </Flex>

      <Box
        as='button'
        role='button'
        aria-label='logout button'
        px={8}
        py={2}
        mx={8}
        borderWidth={1}
        borderColor='gray.500'
        rounded='full'
        textAlign='center'
        fontSize='md'
        onClick={logout}
      >
        <Text>Logout</Text>
      </Box>
    </Flex>
  );
};

export default Sidebar;
