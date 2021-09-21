import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import { BsBagFill } from "react-icons/bs";

const MobileNavbar = ({ onOpen }) => {
  const { pathname } = useLocation();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={{ base: 4, md: 20 }}
      h={{ base: 20, md: 32 }}
      pos="fixed"
      top={0}
      zIndex={10}
      w="100%"
      color={
        pathname === "/" ||
        pathname === "/events" ||
        pathname === "/events/[id]"
          ? "white"
          : "black"
      }
      fontWeight="bold"
      d={{ base: "flex", sm: "none" }}
    >
      <Flex
        align="center"
        d={{ base: "flex", sm: "none" }}
        as="button"
        role="button"
        aria-label="humburger button"
        onClick={onOpen}
      >
        <Text fontWeight="bold" mr={2}>
          Menu
        </Text>
        <Image src="/humberger.svg" alt="humburger" />
      </Flex>

      <NavLink to="/">
        <Image
          h={{ base: 16, md: 24 }}
          src={
            pathname === "/" ||
            pathname === "/events" ||
            pathname === "/events/[id]"
              ? "/images/logo.png"
              : "/images/logo-black.png"
          }
          alt="logo"
        />
      </NavLink>

      <Box>
        <Icon as={BsBagFill} boxSize={6} />
      </Box>
    </Flex>
  );
};

export default MobileNavbar;
