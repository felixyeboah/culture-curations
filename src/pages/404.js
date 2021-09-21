import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import Layout from "container/Layout";
import { Link as ReachRouter } from "react-router-dom";
import React from "react";

const ErrorPage = () => {
  return (
    <Layout title="Error 404">
      <Flex
        w="full"
        h="60vh"
        align="center"
        justify="center"
        direction="column"
        mt={{ base: 40, md: 40 }}
        px={{ base: 4, md: 0 }}
      >
        <Box mx="auto">
          <Image
            h={{ md: 120 }}
            src={require("../assets/images/404.png").default}
            alt="404"
          />
        </Box>
        <Text my={6} fontSize={{ base: "xl", md: "3xl" }}>
          404 | Page Not Found
        </Text>

        <Link as={ReachRouter} to="/" _hover={{ textDecor: "none" }}>
          <Button px={6} h={12} colorScheme="blue">
            Let me take you back home
          </Button>
        </Link>
      </Flex>
    </Layout>
  );
};

export default ErrorPage;
