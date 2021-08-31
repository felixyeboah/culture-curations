import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { SiAudiomack } from 'react-icons/si';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const { pathname } = useRouter();
  return (
    <Flex
      as='footer'
      align='center'
      justify='space-between'
      w='100%'
      color={pathname === '/' ? 'white' : 'gray.600'}
      fontWeight='bold'
      pos='fixed'
      bottom={6}
      px={{ base: 4, md: 20 }}
      zIndex={20}
    >
      <Flex align='center' d={{ base: 'none', sm: 'flex' }}>
        <NextLink href='/events' passHref>
          <Link _hover={{ textDecor: 'none' }} pr={4}>
            Events
          </Link>
        </NextLink>
        <NextLink href='/tickets'>
          <Link _hover={{ textDecor: 'none' }} px={4}>
            Tickets
          </Link>
        </NextLink>
        <NextLink href='/merchandise'>
          <Link _hover={{ textDecor: 'none' }} pl={4}>
            Merchandise
          </Link>
        </NextLink>
      </Flex>
      <Flex direction='column' align='center'>
        <Flex align='center' mb={2}>
          <NextLink href='/' passHref>
            <Link pr={2}>
              <Icon as={FaFacebookSquare} boxSize={6} />
            </Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link px={2}>
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link px={2}>
              <Icon as={FaSnapchatGhost} boxSize={6} />
            </Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link px={2}>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link px={2}>
              <Icon as={FaYoutube} boxSize={7} />
            </Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link pl={2}>
              <Icon as={SiAudiomack} boxSize={7} />
            </Link>
          </NextLink>
        </Flex>
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          textAlign='center'
          mixBlendMode='difference'
          fontWeight='light'
        >
          &copy; Copyright {new Date().getFullYear()}. Culture Curations. All
          rights reserved.
        </Text>
      </Flex>
      <Flex align='center' d={{ base: 'none', sm: 'flex' }}>
        <NextLink href='/gallery' passHref>
          <Link _hover={{ textDecor: 'none' }} px={4}>
            Gallery
          </Link>
        </NextLink>
        <NextLink href='/about' passHref>
          <Link _hover={{ textDecor: 'none' }} px={4}>
            About
          </Link>
        </NextLink>
        <NextLink href='/contact' passHref>
          <Link _hover={{ textDecor: 'none' }} pl={4}>
            Contact
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Footer;
