import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/layout';
import FormInput from '@components/Form/FormInput';
import { Formik } from 'formik';
import React from 'react';

const Register = () => {
  return (
    <Grid templateColumns={{ md: '70% 30%' }} h='100vh' w='100vw'>
      <GridItem h='100vh' pos='relative' d={{ base: 'none', md: 'block' }}>
        <Image
          h='100%'
          w='100%'
          objectFit='cover'
          src='/images/slides/slide-9.jpg'
          alt='slide image'
        />
        <Box
          pos='absolute'
          right={{ md: 8 }}
          bottom={{ md: 20 }}
          color='white'
          zIndex={10}
          w={{ md: 120 }}
        >
          <Text fontSize={{ md: '2xl' }} fontWeight='bold'>
            Culture Management Group LLC is an experiential production company
            that prioritizes celebration of Africa’s diverse culture and the
            vibrant work of African creatives &amp; entrepreneurs.
          </Text>
        </Box>
      </GridItem>
      <GridItem bg='white' px={4}>
        <Flex h='100vh' align='center' justify='center' direction='column'>
          <Box h={{ md: 32 }} mb={20} d={{ base: 'none', md: 'block' }}>
            <Image
              h='100%'
              src='/images/logo-black.png'
              alt='Culture Curations Logo'
            />
          </Box>
          <Box mb={8}>
            <Heading as='h4' fontSize={{ base: 'xl', md: '2xl' }}>
              Sign up to your account
            </Heading>
          </Box>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              password: '',
            }}
          >
            {({
              values,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid gap={4}>
                  <FormInput label='Your Firstname' placeholder='John' />
                  <FormInput label='Your Lastname' placeholder='Doe' />
                  <FormInput
                    label='Email'
                    type='email'
                    placeholder='example@email.com'
                  />
                  <FormInput
                    label='Phone number'
                    type='tel'
                    placeholder='555-555-5555'
                  />
                  <FormInput
                    label='Password'
                    type='password'
                    placeholder='************'
                  />
                  <Button
                    w='100%'
                    colorScheme='blue'
                    h={12}
                    isLoading={isSubmitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            )}
          </Formik>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Register;
