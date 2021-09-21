import React from "react";
import { Image as ChakraImage } from "@chakra-ui/image";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { Link as ReachRouter } from "react-router-dom";
import { Image } from "cloudinary-react";
import moment from "moment";
import EventAction from "../EventAction";

const EventCard = ({ item }) => {
  const getActions = (value) => {
    switch (value) {
      case value < moment(new Date()._d):
        return <EventAction bg="red.600" title="Expired" />;
      case value > moment(new Date()._d):
        return <EventAction bg="blue.dark" title="Upcoming" />;
      case value === moment(new Date()._d):
        return <EventAction bg="green.600" title="Ongoing" />;
      default:
        return null;
    }
  };

  const day = moment(item.date).format("DD");
  const month = moment(item.date).format("MMM");

  return (
    <Link
      as={ReachRouter}
      d="block"
      to={`/events/${item?.slug}`}
      _hover={{ textDecor: "none" }}
      pos="relative"
    >
      {getActions(moment(item.date)._d)}

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

          <Text fontWeight="bold">{item?.time}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default EventCard;
