import { Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import NavLink from "next/link";
import React from "react";
import { BiX } from "react-icons/bi";

const MobileDrawerCloseButton = ({ onClose }) => {
  return (
    <Flex
      as="button"
      role="button"
      aria-label="close button"
      align="center"
      justify="space-between"
      onClick={onClose}
      w="100%"
    >
      <NavLink href="/" passHref>
        <Link>
          <Image
            h={16}
            src="/images/logo-black.png"
            alt="Culture Curations Logo"
          />
        </Link>
      </NavLink>
      <Flex align="center">
        <Text mr={1}>Close</Text>
        <Icon as={BiX} boxSize={6} />
      </Flex>
    </Flex>
  );
};

export default MobileDrawerCloseButton;
