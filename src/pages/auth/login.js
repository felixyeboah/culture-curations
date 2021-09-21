import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from "@chakra-ui/layout";
import FormInput from "components/Form/FormInput";
import { Formik } from "formik";
import React from "react";
import Layout from "container/Layout";
import { SignInSchema } from "utils/validation";
import useAuth from "context/userContext";
import { Link as ReachRouter, Redirect, useLocation } from "react-router-dom";
import Button from "../../components/Button";

const Login = () => {
  const { signin, redirectToReferrer } = useAuth();
  const { state } = useLocation();

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      await signin(values);
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  if (redirectToReferrer) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <Layout title="Login">
      <Grid templateColumns={{ md: "70% 30%" }} h="100vh" w="100vw">
        <GridItem h="100vh" pos="relative" d={{ base: "none", md: "block" }}>
          <Image
            h="100%"
            w="100%"
            objectFit="cover"
            src={require("../../assets/images/slides/slide-9.jpg").default}
            alt="slide image"
            loading="lazy"
          />
          <Box
            pos="absolute"
            right={{ md: 8 }}
            bottom={{ md: 20 }}
            color="white"
            zIndex={10}
            w={{ md: 120 }}
          >
            <Text fontSize={{ md: "2xl" }} fontWeight="bold">
              Culture Management Group LLC is an experiential production company
              that prioritizes celebration of Africa’s diverse culture and the
              vibrant work of African creatives &amp; entrepreneurs.
            </Text>
          </Box>
        </GridItem>
        <GridItem bg="white" px={4}>
          <Flex h="100vh" align="center" justify="center" direction="column">
            <Box h={{ md: 32 }} mb={20} d={{ base: "none", md: "block" }}>
              <Image
                h="100%"
                src={require("../../assets/images/logo-black.png").default}
                alt="Culture Curations Logo"
              />
            </Box>
            <Box mb={8}>
              <Heading as="h4" fontSize={{ base: "xl", md: "2xl" }}>
                Sign in to your account
              </Heading>
            </Box>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={onSubmit}
            >
              {({
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                errors,
                touched,
                dirty,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid gap={4}>
                    <FormInput
                      label="Email"
                      type="email"
                      placeholder="example@email.com"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email}
                      touched={touched.email}
                    />
                    <FormInput
                      label="Password"
                      type="password"
                      placeholder="************"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.password}
                      touched={touched.password}
                    />
                    <Box>
                      <Link
                        as={ReachRouter}
                        to="/auth/forgot-password"
                        mb={2}
                        fontSize="sm"
                        color="blue.500"
                        d="block"
                        textAlign="right"
                        _hover={{ textDecor: "none" }}
                      >
                        Forgot password
                      </Link>
                      <Button
                        title="Submit"
                        type="submit"
                        disabled={!dirty}
                        isLoading={isSubmitting}
                        w="100%"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="sm" textAlign="center">
                        Dont have an account?{" "}
                        <Link
                          as={ReachRouter}
                          to="/auth/register"
                          color="blue.500"
                          _hover={{ textDecor: "none" }}
                        >
                          Click here to sign up
                        </Link>
                      </Text>
                    </Box>
                  </Grid>
                </form>
              )}
            </Formik>
          </Flex>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Login;
