import React from "react";
import { Box, Heading } from "@chakra-ui/layout";

const EventAction = ({ title, bg }) => {
  return (
    <Box
      pos="absolute"
      left={-6}
      top={0}
      bg={bg}
      color="white"
      zIndex={10}
      transform="rotate(320deg)"
      p={2}
      rounded="md"
    >
      <Heading as="h5" fontSize={{ md: "2xl" }}>
        {title}
      </Heading>
    </Box>
  );
};

export default EventAction;
