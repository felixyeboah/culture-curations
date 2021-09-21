import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import useAuth from "context/userContext";
import isEmpty from "lodash/isEmpty";
import { Link as ReachRouter, useLocation } from "react-router-dom";
import React from "react";
import { BsBagFill } from "react-icons/bs";

import WhiteLogo from "../../assets/images/logo.png";
import BlackLogo from "../../assets/images/logo-black.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();

  const { user } = isAuthenticated();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={{ base: 4, md: 20 }}
      h={{ base: 20, md: 32 }}
      pos="fixed"
      top={0}
      zIndex={50}
      w="100%"
      color={
        pathname === "/" ||
        pathname === "/events" ||
        pathname === "/events/[slug]"
          ? "white"
          : "black"
      }
      fontWeight="bold"
      d={{
        base: "none",
        sm:
          pathname === "/auth/register" ||
          pathname === "/auth/login" ||
          pathname === "/auth/forgot-password" ||
          pathname === "/auth/reset-password/[id]" ||
          pathname === "/dashboard" ||
          pathname === "/manage-slides" ||
          pathname === "/manage-users" ||
          pathname === "/my-events" ||
          pathname === "/manage-slides/upload" ||
          pathname === "/manage-images" ||
          pathname === "/manage-images/upload" ||
          pathname === "/manage-gallery" ||
          pathname === "/manage-gallery/upload" ||
          pathname === "/manage-gallery/[slug]"
            ? ""
            : "flex",
      }}
    >
      <Link as={ReachRouter} to="/" _hover={{ textDecor: "none" }}>
        <Image
          h={{ base: 16, md: 24 }}
          src={
            pathname === "/" ||
            pathname === "/events" ||
            pathname === "/events/:slug"
              ? WhiteLogo
              : BlackLogo
          }
          alt="logo"
          loading="lazy"
        />
      </Link>
      <Box>
        <Heading as="h3" fontSize={{ md: "4xl" }}>
          Culture Curations
        </Heading>
      </Box>
      <Flex align="center">
        {!isEmpty(isAuthenticated()) ? (
          <Flex align="center" px={{ md: 6 }}>
            <Flex align="center" px={{ md: 6 }}>
              <Avatar
                src={`https://ui-avatars.com/api/?background=random&name=${user?.firstName}+${user?.lastName}`}
                size="sm"
              />
              <Text ml={2}>
                {user?.firstName} {user?.lastName}
              </Text>
            </Flex>

            <Link
              as={ReachRouter}
              to="/dashboard"
              _hover={{ textDecor: "none" }}
            >
              Dashboard
            </Link>
          </Flex>
        ) : (
          <Box px={{ md: 6 }}>
            <Link
              as={ReachRouter}
              to="/auth/login"
              _hover={{ textDecor: "none" }}
            >
              Login
            </Link>
          </Box>
        )}

        <Box pos="relative">
          <Icon as={BsBagFill} boxSize={6} />
          <Flex
            align="center"
            justify="center"
            fontSize="xs"
            w={4}
            h={4}
            rounded="full"
            bg="red.600"
            color="white"
            pos="absolute"
            right={-2}
            top={0}
          >
            0
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
