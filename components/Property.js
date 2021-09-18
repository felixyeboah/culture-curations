import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

export const Property = ({ label, value, ...flexProps }) => {
  return (
    <Flex
      as='dl'
      direction='row'
      justify='space-between'
      px={4}
      py='4'
      _even={{ bg: useColorModeValue('gray.50', 'gray.600') }}
      {...flexProps}
    >
      <Box as='dt' minWidth={{ md: '100px', lg: '180px' }}>
        {label}
      </Box>
      <Box as='dd' fontWeight='semibold'>
        {value}
      </Box>
    </Flex>
  );
};
