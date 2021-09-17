import React from 'react';
import { Box, Flex, Link, List, ListItem, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import ActiveLink from 'lib/ActiveLink';
import NextLink from 'next/link';
import useAuth from '@context/userContext';

const menuItems = [
  { id: 1, name: 'Home', path: '/dashboard' },
  { id: 2, name: 'My Tickets', path: '/my-tickets' },
  { id: 3, name: 'My Events', path: '/my-events' },
  { id: 4, name: 'My Account', path: '/my-account' },
  { id: 5, name: 'Manage Events', path: '/manage-events' },
  { id: 6, name: 'Manage Slides', path: '/manage-slides' },
  { id: 7, name: 'Manage Gallery', path: '/manage-gallery' },
  { id: 8, name: ' Manage Bookings', path: '/manage-bookings' },
  { id: 9, name: 'Manage Users', path: '/manage-users' },
];

const Sidebar = () => {
  const { logout } = useAuth();
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
          {menuItems.map((item) => (
            <ActiveLink
              href={item.path}
              activeClassName='activeLink'
              passHref
              key={item.id}
            >
              <ListItem
                px={8}
                py={5}
                w='100%'
                _hover={{ bg: 'gray.100', color: 'gray.700' }}
                cursor='pointer'
              >
                {item.name}
              </ListItem>
            </ActiveLink>
          ))}
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
