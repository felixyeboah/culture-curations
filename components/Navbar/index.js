import { Box, Flex, Heading, Icon, Image } from '@chakra-ui/react';
import React from 'react';
import { BsBagFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      px={{ md: 20 }}
      h={{ md: 32 }}
      pos='fixed'
      top={0}
      zIndex={10}
      w='100%'
      color='white'
      fontWeight='bold'
    >
      <Box>
        <Image h={{ md: 24 }} src='/images/logo.png' alt='logo' />
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
