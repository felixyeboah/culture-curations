import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import EventTag from "./EventTag";
import { useMutation, useQueryClient } from "react-query";
import useAPI from "../../context/apiContext";

const TicketCard = ({ item }) => {
  const { createOrder } = useAPI();
  const queryClient = useQueryClient();

  const mutateCreateOrder = useMutation(createOrder, {
    onSuccess: () => queryClient.invalidateQueries("orders"),
  });

  return (
    <Box
      borderWidth={1}
      borderTopWidth={8}
      borderColor="blue.dark"
      rounded="lg"
      bg="white"
      w={{ md: 82 }}
      filter="drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.1))"
      overflow="hidden"
      minH={{ base: 90, md: 108 }}
      pos="relative"
    >
      <Box p={6}>
        <Text fontSize="2xl" fontWeight="bold">
          {item?.name}
        </Text>
        <Text fontSize={{ md: "lg" }} fontWeight="bold">
          GHC {item?.price}
        </Text>
        <Text textTransform="uppercase" fontSize="sm" fontWeight="medium">
          Serves up t0 {item?.people} people
        </Text>

        <Flex align="center" wrap="wrap" mt={6}>
          {item?.options?.map((item, idx) => (
            <EventTag key={idx} item={item} />
          ))}
        </Flex>
      </Box>

      <Box
        mt={2}
        w="100%"
        textAlign="center"
        bg="blue.dark"
        color="white"
        py={3}
        pos="absolute"
        bottom={0}
        insetX={0}
        as="button"
        role="button"
        aria-label="buy button"
        onClick={() => mutateCreateOrder.mutateAsync({ ticket: item?._id })}
      >
        Buy Ticket
        {/*<Button title="Add to cart" onClick={buyTicket} />*/}
      </Box>
    </Box>
  );
};

export default TicketCard;
