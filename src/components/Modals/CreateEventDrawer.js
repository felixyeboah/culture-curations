import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Formik } from "formik";
import useAPI from "../../context/apiContext";
import { useMutation, useQueryClient } from "react-query";
import FormUpload from "../Form/FormUpload";
import { Flex, Grid } from "@chakra-ui/layout";
import FormInput from "../Form/FormInput";
import Button from "../Button";

const CreateEventDrawer = ({ isOpen, onClose }) => {
  const { createEvent } = useAPI();
  const [files, setFiles] = React.useState([]);
  const [file, setFile] = React.useState([]);

  const queryClient = useQueryClient();

  const mutateUploadGallery = useMutation(createEvent, {
    onSuccess: () => queryClient.invalidateQueries("events"),
  });

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      const formData = new FormData();
      values.cover.map((file) => formData.append("cover", file, file.name));
      formData.append("name", values.name);
      formData.append("date", values.date);
      formData.append("time", values.time);
      formData.append("location", values.location);
      await mutateUploadGallery.mutateAsync(formData);
      resetForm({});
      setFile([]);
      setFiles([]);
      setStatus({ success: true });
      onClose();
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create an event</DrawerHeader>

        <Formik
          initialValues={{
            cover: file,
            name: "",
            location: "",
            time: "",
            date: "",
          }}
          enableReinitialize
          onSubmit={onSubmit}
        >
          {({
            values,
            handleBlur,
            handleSubmit,
            handleChange,
            isSubmitting,
            dirty,
          }) => (
            <form onSubmit={handleSubmit}>
              <Flex justify="space-between" direction="column" minH="90vh">
                <DrawerBody>
                  <Grid gap={4}>
                    <FormUpload
                      label="Cover"
                      files={files}
                      setFiles={setFiles}
                      setFile={setFile}
                    />
                    <FormInput
                      label="Event Name"
                      name="name"
                      required
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                    />
                    <FormInput
                      label="Event Location"
                      name="location"
                      required
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.location}
                    />
                    <FormInput
                      label="Event Date"
                      type="date"
                      name="date"
                      required
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.date}
                    />
                    <FormInput
                      label="Event Time"
                      type="time"
                      name="time"
                      required
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.time}
                    />
                  </Grid>
                </DrawerBody>

                <DrawerFooter>
                  <Button
                    title="Cancel"
                    variant="outline"
                    mr={3}
                    onClick={onClose}
                  />
                  <Button
                    title="Submit"
                    type="submit"
                    isLoading={isSubmitting}
                    disable={!dirty}
                  />
                </DrawerFooter>
              </Flex>
            </form>
          )}
        </Formik>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateEventDrawer;
