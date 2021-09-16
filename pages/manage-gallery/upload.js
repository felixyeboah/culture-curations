import { Button } from '@chakra-ui/button';
import { Box, Grid, Heading } from '@chakra-ui/layout';
import FormInput from '@components/Form/FormInput';
import FormUpload from '@components/Form/FormUpload';
import useAPI from '@context/apiContext';
import AuthLayout from 'container/AuthLayout';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

const ManageGalleryUpload = () => {
  const [files, setFiles] = React.useState([]);
  const [file, setFile] = React.useState([]);
  const [galleries, setGalleries] = React.useState([]);
  const [gallery, setGallery] = React.useState([]);
  const { createGallery } = useAPI();
  const router = useRouter();

  const queryClient = useQueryClient();

  const mutateUploadGallery = useMutation(createGallery, {
    onSuccess: () => queryClient.invalidateQueries('gallery'),
  });

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      const formData = new FormData();
      values.images.map((file) => {
        formData.append('images', file, file.name);
      });
      formData.append('cover', values.cover[0], values.cover[0].name);
      formData.append('title', values.title);
      await mutateUploadGallery.mutateAsync(formData);
      resetForm({});
      setFile([]);
      setFiles([]);
      setGalleries([]);
      setGallery([]);
      setStatus({ success: true });
      router.push('/manage-gallery');
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  return (
    <AuthLayout title='Manage Gallery Upload'>
      <Box>
        <Heading>Upload Slides</Heading>
      </Box>

      <Formik
        initialValues={{ images: file || [], cover: gallery, title: '' }}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {({ values, isSubmitting, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <Grid gap={6} mt={10}>
              <Grid w={{ md: 117 }} gap={6}>
                <FormInput
                  label='Title'
                  placeholder='Title of gallery'
                  name='title'
                  required
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormUpload
                  required
                  label='Cover'
                  files={galleries}
                  setFiles={setGalleries}
                  setFile={setGallery}
                />
              </Grid>

              <FormUpload
                required
                label='Images'
                files={files}
                setFiles={setFiles}
                setFile={setFile}
              />
            </Grid>

            <Box pos='fixed' bottom={10} right={6}>
              <Button
                type='submit'
                isLoading={isSubmitting}
                loadingText='Submitting'
                bg='blue.dark'
                color='white'
                _hover={{ bg: 'blue.dark' }}
                _active={{ bg: 'blue.dark' }}
                h={12}
                px={{ md: 20 }}
              >
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default ManageGalleryUpload;
