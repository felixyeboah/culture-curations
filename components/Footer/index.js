import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
  FaYoutube,
  FaSpotify,
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
      pos={pathname === '/' ? 'fixed' : 'relative'}
      bottom={6}
      px={{ base: 4, md: 20 }}
      zIndex={20}
      d={{
        base: 'none',
        sm:
          pathname === '/auth/register' ||
          pathname === '/auth/login' ||
          pathname === '/auth/forgot-password'
            ? ''
            : 'flex',
      }}
    >
      <Flex align='center' d={{ base: 'none', sm: 'flex' }}>
        <NextLink href='/events' passHref>
          <Link _hover={{ textDecor: 'none' }} pr={4}>
            Events
          </Link>
        </NextLink>
        <NextLink href='/merchandise'>
          <Link _hover={{ textDecor: 'none' }} pl={4}>
            Merchandise
          </Link>
        </NextLink>
        <NextLink href='/gallery' passHref>
          <Link _hover={{ textDecor: 'none' }} px={4}>
            Gallery
          </Link>
        </NextLink>
      </Flex>
      <Flex direction='column' align='center'>
        <Flex align='center' mb={2}>
          <Link pr={2}>
            <Icon as={FaFacebookSquare} boxSize={6} />
          </Link>

          <Link
            href='https://instagram.com/culturecurations'
            isExternal
            _hover={{ textDecor: 'none' }}
            px={2}
          >
            <Icon as={FaInstagram} boxSize={6} />
          </Link>

          <Link px={2}>
            <Icon as={FaSnapchatGhost} boxSize={6} />
          </Link>

          <Link px={2}>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>

          <Link px={2}>
            <Icon as={FaYoutube} boxSize={7} />
          </Link>

          <Link px={2}>
            <Icon as={SiAudiomack} boxSize={7} />
          </Link>

          <Link pl={2}>
            <Icon as={FaSpotify} boxSize={7} />
          </Link>
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
