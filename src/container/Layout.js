import { Box } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children, title, description, ...rest }) => {
  const { pathname } = useLocation();

  return (
    <Box overflow="hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name={description} content="Culture Curations" />
      </Helmet>
      <Navbar />
      <Box
        {...rest}
        minH={
          pathname === "/auth/verify" || pathname === "/404" ? "80vh" : "92vh"
        }
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
