import React from "react";
import Layout from "container/Layout";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import useAPI from "context/apiContext";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import moment from "moment";
import TicketCard from "../../components/Cards/TicketCard";
import HashLoader from "react-spinners/HashLoader";

const Event = () => {
  const { slug } = useParams();
  const { getEvent, getAllTickets } = useAPI();

  const { data, loading } = useQuery(["events", slug], () => getEvent(slug));
  const { data: tickets, loading: ticketsLoading } = useQuery("tickets", () =>
    getAllTickets()
  );

  const filterTickets = tickets?.filter(
    (item) => item?.event?._id === data?._id
  );

  return (
    <Layout>
      <Flex h={{ md: 120 }} w="100%" pos="relative">
        <Image
          h="100%"
          w="100%"
          objectFit="cover"
          src={require("../../assets/images/slides/slide-5.jpg").default}
          alt="cover picture"
        />
        <Box
          pos="absolute"
          inset={0}
          bgGradient="linear(to-r, rgba(7, 7, 75, .7), rgba(39, 54, 139, .7))"
        />
        <Flex
          direction="column"
          justify="center"
          mt={{ base: 20, md: 0 }}
          px={{ base: 6, md: 24 }}
          color="white"
          pos="absolute"
          inset={0}
          zIndex={20}
          w={{ md: 130 }}
        >
          <Heading as="h2" fontSize={{ base: "3xl", md: "6xl" }}>
            {data?.name}
          </Heading>

          <Flex
            align="center"
            fontSize={{ md: "xl" }}
            d={{ base: "block", md: "flex" }}
          >
            <Text>{data?.location}</Text>
            <Text as="span" px={3} d={{ base: "none", md: "block" }}>
              &middot;
            </Text>
            <Text>{moment(data?.date).format("LL")}</Text>
            <Text as="span" px={3} d={{ base: "none", md: "block" }}>
              &middot;
            </Text>
            <Text>{data?.time}</Text>
          </Flex>
        </Flex>
      </Flex>

      <Container
        minW={{ md: "3xl" }}
        bg="white"
        rounded="md"
        zIndex={10}
        p={{ base: 6, md: 8 }}
        mb={64}
      >
        {loading ? (
          <Box>
            <HashLoader loading={ticketsLoading} size={100} color="#2D4298" />
          </Box>
        ) : (
          <>
            <Box my={{ md: 10 }}>
              <Heading>Available tickets</Heading>
            </Box>
            {ticketsLoading ? (
              <Box>
                <HashLoader
                  loading={ticketsLoading}
                  size={100}
                  color="#2D4298"
                />
              </Box>
            ) : (
              <Grid templateColumns={{ md: "repeat(2, 1fr)" }} gap={8} mt={10}>
                {filterTickets?.map((item) => (
                  <TicketCard key={item?._id} item={item} />
                ))}
              </Grid>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Event;
