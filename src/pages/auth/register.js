import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import Button from "components/Button";
import FormInput from "components/Form/FormInput";
import useAuth from "context/userContext";
import { SignupSchema } from "utils/validation";
import Layout from "container/Layout";
import { Formik } from "formik";
import React from "react";

const Register = () => {
  const { signup } = useAuth();

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      await signup(values);
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  return (
    <Layout title="Register">
      <Grid templateColumns={{ md: "70% 30%" }} h="100vh" w="100vw">
        <GridItem h="100vh" pos="relative" d={{ base: "none", md: "block" }}>
          <Image
            h="100%"
            w="100%"
            objectFit="cover"
            src={require("../../assets/images/slides/slide-16.jpg").default}
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
                Sign up to your account
              </Heading>
            </Box>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                password: "",
              }}
              validationSchema={SignupSchema}
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
                      label="Your Firstname"
                      placeholder="John"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.firstName}
                      touched={touched.firstName}
                    />
                    <FormInput
                      label="Your Lastname"
                      placeholder="Doe"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.lastName}
                      touched={touched.lastName}
                    />
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
                      label="Phone number"
                      type="tel"
                      placeholder="555-555-5555"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.phoneNumber}
                      touched={touched.phoneNumber}
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
                    <Button
                      title="Submit"
                      type="submit"
                      disabled={!dirty}
                      isLoading={isSubmitting}
                      w="100%"
                    />
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

export default Register;
