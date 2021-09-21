import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";

import ListBoxButton from "./ListBox/ListBoxButton";
import ListBoxOptions from "./ListBox/ListBoxOptions";
import { FormErrorMessage } from "@chakra-ui/form-control";

const FormSelect = ({
  id,
  label,
  error,
  value,
  options,
  required,
  placeholder,
  setFieldValue,
  setFieldTouched,
}) => {
  const [isTouched, setTouched] = useState(false);

  return (
    <FormControl
      isRequired={required}
      onMouseLeave={() => isTouched && setFieldTouched(id, true)}
    >
      <FormLabel fontSize="sm" color="gray.500">
        {label}
      </FormLabel>
      <Listbox
        as={Box}
        value={value}
        onClick={() => setTouched(true)}
        onChange={(e) => setFieldValue(id, e)}
      >
        <Box mt={1} pos="relative">
          <ListBoxButton selected={value} placeholder={placeholder} />
          <ListBoxOptions options={options} />
        </Box>
      </Listbox>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormSelect;
