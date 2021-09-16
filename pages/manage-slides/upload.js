import React from 'react';
import AuthLayout from 'container/AuthLayout';
import { Box, Heading } from '@chakra-ui/layout';
import { Formik } from 'formik';
import FormUpload from '@components/Form/FormUpload';
import { Button } from '@chakra-ui/button';
import useAPI from '@context/apiContext';
import { withPrivate } from '@utils/ProtectPage';
import { useMutation, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';

const ManageSlidesUpload = () => {
  const [files, setFiles] = React.useState([]);
  const [file, setFile] = React.useState([]);
  const { uploadSlides } = useAPI();
  const router = useRouter();

  const queryClient = useQueryClient();

  const mutateUploadSlides = useMutation(uploadSlides, {
    onSuccess: () => queryClient.invalidateQueries('slides'),
  });

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      const formData = new FormData();
      values.images.map((file) => {
        formData.append('slides', file, file.name);
      });
      await mutateUploadSlides.mutateAsync(formData);
      resetForm({});
      setFile([]);
      setFiles([]);
      setStatus({ success: true });
      router.push('/manage-slides');
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  return (
    <AuthLayout title='Upload Slides'>
      <Box>
        <Heading>Upload Slides</Heading>
      </Box>

      <Formik
        initialValues={{ images: file || [] }}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {({ isSubmitting, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box mt={10}>
              <FormUpload
                required
                files={files}
                setFiles={setFiles}
                setFile={setFile}
              />
            </Box>

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
                Upload images
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default withPrivate(ManageSlidesUpload);
