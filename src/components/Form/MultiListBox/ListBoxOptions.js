import React from "react";
import { Box } from "@chakra-ui/react";
import { Listbox } from "@headlessui/react";
import ListBoxOption from "./ListBoxOption";

const ListBoxOptions = ({ data, isSelected }) => {
  return (
    <Listbox.Options
      as={Box}
      static
      pos="absolute"
      w="full"
      py={1}
      mt={1}
      overflow="auto"
      fontSize="md"
      bg="white"
      rounded="md"
      shadow="lg"
      maxH={64}
      borderWidth={1}
      zIndex={2}
    >
      {data.map((item) => {
        const selected = isSelected(item);
        return <ListBoxOption key={item} selected={selected} item={item} />;
      })}
    </Listbox.Options>
  );
};

export default ListBoxOptions;
