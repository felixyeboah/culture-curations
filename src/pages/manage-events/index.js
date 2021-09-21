import React from "react";
import AuthLayout from "../../container/AuthLayout";
import { Box, Flex, Grid, Heading } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { BsArrowRight } from "react-icons/bs";
import HashLoader from "react-spinners/HashLoader";
import useAPI from "../../context/apiContext";
import { useQuery } from "react-query";
import { isEmpty } from "lodash";
import { Text, useDisclosure } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import CreateEventDrawer from "../../components/Modals/CreateEventDrawer";
import ECard from "../../components/Cards/ECard";
import CreateTicketDrawer from "../../components/Modals/CreateTicketDrawer";

const ManageEvents = () => {
  const [modal, setModal] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getAllEvents } = useAPI();

  const renderModals = (value) => {
    switch (value) {
      case "event":
        return <CreateEventDrawer onClose={onClose} isOpen={isOpen} />;
      case "ticket":
        return <CreateTicketDrawer onClose={onClose} isOpen={isOpen} />;
      default:
        return null;
    }
  };

  const handleClick = (modal) => {
    setModal(modal);
    onOpen();
  };

  const { data, loading } = useQuery("events", () => getAllEvents());

  return (
    <AuthLayout>
      {renderModals(modal)}
      <Flex align="center" justify="space-between">
        <Box>
          <Heading as="h4">Manage All Events</Heading>
        </Box>

        <Flex>
          <Box
            onClick={() => handleClick("event")}
            color="blue.dark"
            mr={6}
            as="button"
            role="button"
            aria-label="event button"
          >
            Create event <Icon as={BsArrowRight} />
          </Box>

          <Box
            color="blue.dark"
            onClick={() => handleClick("ticket")}
            as="button"
            role="button"
            aria-label="ticket button"
          >
            Create ticket <Icon as={BsArrowRight} />
          </Box>
        </Flex>
      </Flex>

      <Box mt={20}>
        {isEmpty(data) ? (
          <Flex align="center" justify="center" minH="80vh" direction="column">
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
          <Grid templateColumns={{ md: "repeat(4, 1fr)" }} gap={8}>
            {data?.map((item) => (
              <ECard key={item._id} item={item} action />
            ))}
          </Grid>
        )}
      </Box>
    </AuthLayout>
  );
};

export default ManageEvents;
