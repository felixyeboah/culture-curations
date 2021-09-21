import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Listbox } from "@headlessui/react";

const ListBoxOption = ({ item }) => {
  return (
    <Listbox.Option
      py={2}
      as={Box}
      key={item?._id || item}
      pos="relative"
      px={4}
      userSelect="none"
      cursor="default"
      className={({ active }) =>
        `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}`
      }
      value={item}
    >
      {({ selected }) => (
        <>
          <Text isTruncated fontWeight={selected ? "medium" : "normal"}>
            {item?.name || item}
          </Text>
        </>
      )}
    </Listbox.Option>
  );
};

export default ListBoxOption;
