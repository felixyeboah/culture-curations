import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { Listbox } from "@headlessui/react";

const ListBoxButton = ({ selected, placeholder, asReadOnly, ...rest }) => {
  return (
    <Listbox.Button
      py={2}
      pl={5}
      pr={10}
      as={Box}
      w="full"
      rounded="md"
      pos="relative"
      h={{ md: 12 }}
      textAlign="left"
      borderWidth={1}
      borderColor="gray.700"
      fontSize="sm"
      cursor="default"
      _focus={{ boxShadow: "0 0 0 1px #3182ce", borderColor: "gray.800" }}
      bg={asReadOnly ? "gray.100" : "white"}
      {...rest}
    >
      <Text as="span" isTruncated fontSize="lg">
        {selected ? (
          selected?.name || selected
        ) : (
          <Text color="gray.300" fontSize="sm">
            {placeholder}
          </Text>
        )}
      </Text>
      <Flex
        align="center"
        pos="absolute"
        top={0}
        bottom={0}
        right={0}
        pr={2}
        pointerEvents="none"
      >
        <Icon as={FiChevronDown} boxSize={5} color="gray.400" />
      </Flex>
    </Listbox.Button>
  );
};

export default ListBoxButton;
