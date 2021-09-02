import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import React from 'react';

const FormInput = ({ label, ...rest }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        size='lg'
        w='100%'
        borderColor='gray.700'
        focusBorderColor='gray.800'
        _hover={{ borderColor: 'gray.700' }}
        {...rest}
      />
    </FormControl>
  );
};

export default FormInput;
