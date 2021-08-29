import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <Flex
      as='footer'
      align='center'
      justify='space-between'
      w='100%'
      color='white'
      fontWeight='bold'
      pos='fixed'
      bottom={6}
      px={{ base: 4, md: 20 }}
    >
      <Flex align='center' d={{ base: 'none', sm: 'flex' }}>
        <NextLink href='/' passHref>
          <Link _hover={{ textDecor: 'none' }} pr={4}>
            Events
          </Link>
        </NextLink>
        <NextLink href='/'>
          <Link _hover={{ textDecor: 'none' }} px={4}>
            Tickets
          </Link>
        </NextLink>
      </Flex>
      <Flex direction='column' align='center'>
        <Flex align='center' mb={2}>
          <NextLink href='/' passHref>
            <Link>
              <Icon as={FaFacebookSquare} boxSize={6} />
            </Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link px={3}>
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link>
              <Icon as={FaYoutube} boxSize={7} />
            </Link>
          </NextLink>
        </Flex>
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          textAlign='center'
          mixBlendMode='difference'
        >
          &copy; Copyright {new Date().getFullYear()}. Culture Curations. All
          rights reserved.
        </Text>
      </Flex>
      <Flex align='center' d={{ base: 'none', sm: 'flex' }}>
        <NextLink href='/' passHref>
          <Link _hover={{ textDecor: 'none' }} px={4}>
            About
          </Link>
        </NextLink>
        <NextLink href='/' passHref>
          <Link _hover={{ textDecor: 'none' }} pl={4}>
            Contact
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Footer;
