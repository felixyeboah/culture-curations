import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { BiX } from 'react-icons/bi';

const MobileDrawerCloseButton = ({ onClose }) => {
  return (
    <Flex
      as='button'
      role='button'
      aria-label='close button'
      align='center'
      justify='space-between'
      onClick={onClose}
      w='100%'
    >
      <Box>
        <Image
          h={16}
          src='/images/logo-black.png'
          alt='Culture Curations Logo'
        />
      </Box>
      <Flex align='center'>
        <Text mr={1}>Close</Text>
        <Icon as={BiX} boxSize={6} />
      </Flex>
    </Flex>
  );
};

export default MobileDrawerCloseButton;
