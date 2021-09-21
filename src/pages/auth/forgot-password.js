import React from "react";
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
import { Link as ReachRouter } from "react-router-dom";
import Layout from "container/Layout";
import useAuth from "context/userContext";
import { ForgotPasswordSchema } from "utils/validation";
import Button from "components/Button";

const ForgotPassword = () => {
  const { forgotPassword } = useAuth();

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      await forgotPassword(values);
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  return (
    <Layout title="Forgot Password">
      <Grid templateColumns={{ md: "70% 30%" }} h="100vh" w="100vw">
        <GridItem h="100vh" pos="relative" d={{ base: "none", md: "block" }}>
          <Image
            h="100%"
            w="100%"
            objectFit="cover"
            src={require("../../assets/images/slides/slide-17.jpg").default}
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
                Forgot password
              </Heading>
            </Box>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={ForgotPasswordSchema}
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

                    <Button
                      title="Submit"
                      type="submit"
                      disabled={!dirty}
                      isLoading={isSubmitting}
                      w="100%"
                    />
                    <Box>
                      <Text fontSize="sm" textAlign="center">
                        Remember your password?{" "}
                        <Link
                          as={ReachRouter}
                          to="/auth/login"
                          color="blue.500"
                          _hover={{ textDecor: "none" }}
                        >
                          Log in
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

export default ForgotPassword;
