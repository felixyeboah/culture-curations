import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/layout';
import FormInput from '@components/Form/FormInput';
import { Formik } from 'formik';
import Layout from 'container/Layout';
import { withPublic } from '@utils/ProtectPage';
import useAuth from '@context/userContext';
import { ResetPasswordSchema } from '@utils/validation';
import { useRouter } from 'next/router';
import Button from '@components/Button';

const ResetPassword = () => {
  const { resetPassword } = useAuth();

  const router = useRouter();
  const { id } = router.query;

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      await resetPassword(values);
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  return (
    <Layout title='Forgot Password'>
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
                Reset your password
              </Heading>
            </Box>
            <Formik
              enableReinitialize
              initialValues={{
                resetCode: id,
                password: '',
              }}
              validationSchema={ResetPasswordSchema}
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
                      label='Reset Code'
                      placeholder='000000'
                      name='resetCode'
                      value={values.resetCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.resetCode}
                      touched={touched.resetCode}
                      disabled
                    />
                    <FormInput
                      label='Password'
                      type='password'
                      placeholder='**********'
                      name='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.password}
                      touched={touched.password}
                    />

                    <Button
                      title='Submit'
                      type='submit'
                      disabled={!dirty}
                      isLoading={isSubmitting}
                      w='100%'
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

export default withPublic(ResetPassword);
