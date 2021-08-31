import { Flex, Link, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import MobileDrawerCloseButton from './MobileDrawerCloseButton';
import MobileDrawerWrapper from './MobileDrawerWrapper';

const data = [
  { id: 3, title: 'About', link: '/about' },
  {
    id: 1,
    title: 'Events',
    link: '/events',
  },
  {
    id: 2,
    title: 'Tickets',
    link: '/tickets',
  },
  {
    id: 2,
    title: 'Merchandise',
    link: '/merchandise',
  },
  {
    id: 2,
    title: 'Gallery',
    link: '/gallery',
  },
  {
    id: 4,
    title: 'Contact',
    link: '/contact',
  },
  {
    id: 5,
    title: 'Login',
    link: '/login',
  },
];

const MobileDrawer = ({ onClose }) => {
  return (
    <MobileDrawerWrapper>
      <MobileDrawerCloseButton onClose={onClose} />

      <Flex h='90vh' justify='space-between' direction='column'>
        <List mt={10}>
          {data.map((item) => (
            <NextLink href={item.link} passHref key={item.id}>
              <Link
                _hover={{ textDecor: 'none' }}
                d='block'
                py={4}
                color='gray.600'
              >
                <Text fontWeight='bold' fontSize='2xl'>
                  {item.title}
                </Text>
              </Link>
            </NextLink>
          ))}
        </List>

        <Flex></Flex>
      </Flex>
    </MobileDrawerWrapper>
  );
};

export default MobileDrawer;
