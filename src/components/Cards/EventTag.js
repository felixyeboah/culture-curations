import React from "react";
import { Tag } from "@chakra-ui/react";

const EventTag = ({ item }) => {
  return (
    <Tag
      rounded="full"
      bg="blue.dark"
      color="white"
      fontSize="sm"
      px={2}
      py={1}
      mr={2}
      mb={2}
      _last={{ mr: 0, mb: 2 }}
    >
      {item}
    </Tag>
  );
};

export default EventTag;
