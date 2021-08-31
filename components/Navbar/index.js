import { Box, Flex, Heading, Icon, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BsBagFill } from 'react-icons/bs';

const Navbar = () => {
  const { pathname } = useRouter();
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
      color={pathname === '/' ? 'white' : 'black'}
      fontWeight='bold'
      d={{ base: 'none', sm: 'flex' }}
    >
      <NextLink href='/' passHref>
        <Link _hover={{ textDecor: 'none' }}>
          <Image
            h={{ base: 16, md: 24 }}
            src={
              pathname === '/' ? '/images/logo.png' : '/images/logo-black.png'
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
        <Box px={{ md: 6 }}>Login</Box>
        <Box>
          <Icon as={BsBagFill} boxSize={6} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
