import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Image as ChakraImage } from "@chakra-ui/image";
import { Image } from "cloudinary-react";
import { Icon } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import moment from "moment";
import { useMutation, useQueryClient } from "react-query";
import useAPI from "../../context/apiContext";

const ECard = ({ item }) => {
  const { deleteEvent } = useAPI();
  const queryClient = useQueryClient();

  const mutateDeleteEvent = useMutation(deleteEvent, {
    onSuccess: () => queryClient.invalidateQueries("events"),
  });

  const day = moment(item.date).format("DD");
  const month = moment(item.date).format("MMM");
  return (
    <Box
      h={{ md: 115 }}
      bg="blue.dark"
      pos="relative"
      rounded="md"
      overflow="hidden"
    >
      <Box pos="relative">
        <ChakraImage
          as={Image}
          cloudName="lunar-studios"
          publicId={item?.cover}
          h={{ md: 90 }}
          w="100%"
          rounded="md"
          objectFit="cover"
          loading="lazy"
          overflow="hidden"
        />

        <Box pos="absolute" bottom={-8}>
          <ChakraImage
            w={{ md: 64 }}
            src={require("../../assets/images/amapiano.png").default}
            alt="amapiano logo"
          />
        </Box>
      </Box>
      <Flex
        align="center"
        justify="center"
        direction="column"
        bg="white"
        w={16}
        h={24}
        pos="absolute"
        top={4}
        right={4}
        rounded="md"
        color="blue.dark"
      >
        <Heading as="h5" fontSize={{ base: "xl", md: "2xl" }}>
          {day}
        </Heading>
        <Heading as="h5" fontSize={{ base: "xl", md: "2xl" }}>
          {month}
        </Heading>
        <Text color="gray.700">Edition</Text>
      </Flex>
      <Box py={{ base: 6, md: 10 }} px={{ base: 4, md: 6 }} color="white">
        <Heading
          as="h4"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="light"
        >
          {item?.location}
        </Heading>

        <Flex align="center" justify="space-between">
          <Text fontWeight="bold">{item?.time}</Text>

          <Box
            as="button"
            role="button"
            aria-label="delete button"
            onClick={() => mutateDeleteEvent.mutateAsync(item._id)}
          >
            <Icon as={BiTrash} color="red.600" boxSize={6} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ECard;
