import { Image } from "@chakra-ui/image";
import { Box, Container, Grid, Heading } from "@chakra-ui/layout";
import EventCard from "components/Cards/EventCard";
import EventsHeader from "components/Headers/EventsHeader";
import Layout from "container/Layout";
import React from "react";
import useAPI from "../../context/apiContext";
import { useQuery } from "react-query";
import HashLoader from "react-spinners/HashLoader";
import { isEmpty } from "lodash";
import { Flex, Text } from "@chakra-ui/react";

const Events = () => {
  const { getAllEvents } = useAPI();

  const { data, loading } = useQuery("events", () => getAllEvents());

  return (
    <Layout title="Events">
      <EventsHeader />

      <Container
        maxW="9xl"
        px={{ base: 4, md: 24 }}
        my={{ base: 16, md: 32 }}
        overflow="hidden"
      >
        <Grid
          templateColumns={{ md: "75% 25%" }}
          gap={8}
          d={{ base: "none", md: "grid" }}
        >
          <Box />
          <Box>
            <Heading as="h4" fontSize={{ md: "2xl" }} color="gray.600">
              Advertisement
            </Heading>
          </Box>
        </Grid>
        <Grid templateColumns={{ md: "75% 25%" }} gap={8} mt={5}>
          {isEmpty(data) ? (
            <Flex
              align="center"
              justify="center"
              minH="80vh"
              direction="column"
            >
              <Image
                w={20}
                src={require("../../assets/images/image-gallery.png").default}
                alt="Gallery"
              />
              <Text mt={4} fontWeight="medium" fontSize="lg">
                No Events at the moment
              </Text>
            </Flex>
          ) : loading ? (
            <Box>
              <HashLoader loading={loading} size={100} color="#2D4298" />
            </Box>
          ) : (
            <Grid templateColumns={{ md: "repeat(3, 1fr)" }} gap={8}>
              {data?.map((item) => (
                <EventCard key={item._id} item={item} />
              ))}
            </Grid>
          )}
          <Box>
            <Heading
              as="h4"
              fontSize={{ md: "2xl" }}
              color="gray.600"
              mb={5}
              d={{ base: "block", md: "none" }}
            >
              Advertisement
            </Heading>
            <Box>
              <Image
                w={85}
                src="https://cdna.artstation.com/p/assets/images/images/019/056/448/large/wen-jie-wang-dm2p-18b-wangwenjie-z-06-01.jpg?1561827588&dl=1"
                alt="Advert"
              />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Events;
