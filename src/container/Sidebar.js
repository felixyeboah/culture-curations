import React from "react";
import { Box, Flex, Link, List, ListItem, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link as ReachRouter, NavLink } from "react-router-dom";
import useAuth from "context/userContext";

const Sidebar = () => {
  const { logout, isAuthenticated } = useAuth();
  const { user } = isAuthenticated();

  return (
    <Flex
      direction="column"
      justify="space-between"
      h="95vh"
      fontSize="xl"
      pos="fixed"
      as="aside"
    >
      <Flex direction="column">
        <Link as={ReachRouter} to="/" _hover={{ textDecor: "none" }}>
          <Box h={20} px={6}>
            <Image
              h="100%"
              src={require("../assets/images/logo.png").default}
              alt="curatedByCulture logo"
            />
          </Box>
        </Link>
        <List mt={16}>
          <NavLink to="/dashboard" activeClassName="active-link">
            <ListItem
              px={8}
              py={4}
              w="100%"
              _hover={{ bg: "gray.100", color: "gray.700" }}
              cursor="pointer"
            >
              Home
            </ListItem>
          </NavLink>
          <NavLink to="/my-tickets" activeClassName="active-link">
            <ListItem
              px={8}
              py={4}
              w="100%"
              _hover={{ bg: "gray.100", color: "gray.700" }}
              cursor="pointer"
            >
              My Tickets
            </ListItem>
          </NavLink>
          <NavLink to="/my-events" activeClassName="active-link">
            <ListItem
              px={8}
              py={4}
              w="100%"
              _hover={{ bg: "gray.100", color: "gray.700" }}
              cursor="pointer"
            >
              My Events
            </ListItem>
          </NavLink>
          <NavLink to="/my-account" activeClassName="active-link">
            <ListItem
              px={8}
              py={4}
              w="100%"
              _hover={{ bg: "gray.100", color: "gray.700" }}
              cursor="pointer"
            >
              My Account
            </ListItem>
          </NavLink>
          <NavLink to="/manage-events" activeClassName="active-link">
            <ListItem
              d={user?.role === "admin" ? "block" : "none"}
              px={8}
              py={4}
              w="100%"
              _hover={{ bg: "gray.100", color: "gray.700" }}
              cursor="pointer"
            >
              Manage Events
            </ListItem>
          </NavLink>
          <NavLink to="/manage-slides" activeClassName="active-link">
            <ListItem
              d={user?.role === "admin" ? "block" : "none"}
              px={8}
              py={4}
              w="100%"
              _hover={{ bg: "gray.100", color: "gray.700" }}
              cursor="pointer"
            >
              Manage Slides
            </ListItem>
          </NavLink>
          <NavLink to="/manage-gallery" activeClassName="active-link">
            <ListItem
              d={user?.role === "admin" ? "block" : "none"}
              px={8}
              py={4}
              w="100%"
              _hover={{ bg: "gray.100", color: "gray.700" }}
              cursor="pointer"
            >
              Manage Gallery
            </ListItem>
          </NavLink>
          <NavLink to="/manage-bookings" activeClassName="active-link">
            <ListItem
              d={user?.role === "admin" ? "block" : "none"}
              px={8}
              py={4}
              w="100%"
              _hover={{ bg: "gray.100", color: "gray.700" }}
              cursor="pointer"
            >
              Manage Bookings
            </ListItem>
          </NavLink>
          <NavLink to="/manage-users" activeClassName="active-link">
            <ListItem
              d={user?.role === "admin" ? "block" : "none"}
              px={8}
              py={4}
              w="100%"
              _hover={{ bg: "gray.100", color: "gray.700" }}
              cursor="pointer"
            >
              Manage Users
            </ListItem>
          </NavLink>
        </List>
      </Flex>

      <Box
        as="button"
        role="button"
        aria-label="logout button"
        px={8}
        py={2}
        mx={8}
        borderWidth={1}
        borderColor="gray.500"
        rounded="full"
        textAlign="center"
        fontSize="md"
        onClick={logout}
      >
        <Text>Logout</Text>
      </Box>
    </Flex>
  );
};

export default Sidebar;
