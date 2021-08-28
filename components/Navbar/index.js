import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { BsBagFill } from 'react-icons/bs';

const Navbar = () => {
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
      color='white'
      fontWeight='bold'
      d={{ base: 'none', sm: 'flex' }}
    >
      <Box>
        <Image h={{ base: 16, md: 24 }} src='/images/logo.png' alt='logo' />
      </Box>
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
