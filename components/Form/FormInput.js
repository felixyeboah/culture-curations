import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import React from 'react';

const FormInput = ({ label, error, required, touched, ...rest }) => {
  return (
    <FormControl isRequired={required} isInvalid={error && touched}>
      <FormLabel>{label}</FormLabel>
      <Input
        size='lg'
        w='100%'
        borderColor='gray.700'
        focusBorderColor='gray.800'
        _hover={{ borderColor: 'gray.700' }}
        {...rest}
      />
      <FormErrorMessage fontSize='xs'>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
