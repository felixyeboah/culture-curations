import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import Layout from "container/Layout";
import React from "react";
import { Link as ReachRouter } from "react-router-dom";
import Icon from "@chakra-ui/icon";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../components/Button";

const Success = () => {
  return (
    <Layout title="Payment Successful">
      <Flex
        align="center"
        justify="center"
        mt={40}
        direction="column"
        w={{ md: 120 }}
        mx="auto"
      >
        <Box mb={6}>
          <Icon as={AiFillCheckCircle} boxSize={20} color="green.600" />
        </Box>
        <Text fontWeight="bold" fontSize={{ md: "2xl" }} mb={6}>
          Payment is successful. You will receive an email with your QR Code as
          your event pass.
        </Text>

        <Link as={ReachRouter} to="/" _hover={{ textDecor: "none" }}>
          <Button title="Back to home" />
        </Link>
      </Flex>
    </Layout>
  );
};

export default Success;
