import { Button as ChakraButton } from '@chakra-ui/button';
import React from 'react';

const Button = ({ title, ...rest }) => {
  return (
    <ChakraButton
      {...rest}
      bg='blue.dark'
      color='white'
      _hover={{ bg: 'blue.dark' }}
      _active={{ bg: 'blue.dark' }}
      h={12}
      px={{ md: 20 }}
    >
      {title}
    </ChakraButton>
  );
};

export default Button;
