import React from "react";
import { Grid, GridItem } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

const AuthLayout = ({ children }) => {
  return (
    <Grid
      bg="white"
      templateColumns={{ md: "15% 85%" }}
      minH="100vh"
      pos="relative"
    >
      <GridItem
        borderRightWidth={1}
        borderColor="gray.200"
        display={{ base: "none", md: "block" }}
        py={{ md: 4 }}
        bg="blue.dark"
        color="white"
      >
        <Sidebar />
      </GridItem>
      <GridItem p={{ md: 16 }}>{children}</GridItem>
    </Grid>
  );
};

export default AuthLayout;
