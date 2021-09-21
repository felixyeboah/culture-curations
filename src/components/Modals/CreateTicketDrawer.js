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
import Button from "../Button";
import useAPI from "../../context/apiContext";
import { useMutation, useQueryClient } from "react-query";
import { Flex, Grid } from "@chakra-ui/layout";
import FormSelect from "../Form/FormSelect";
import FormInput from "../Form/FormInput";
import FormMultiSelect from "../Form/FormMultiSelect";

const CreateTicketDrawer = ({ isOpen, onClose }) => {
  const { getAllEvents, createTicket } = useAPI();

  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await getAllEvents();
      setEvents(res);
    };
    fetchData();
  }, []);

  const ticketOptions = [
    "WRIST BAN",
    "YAM CHI",
    "CHICKEN WIN",
    "SAMOSA / SPRING ROL",
    "CDOOU",
    "KEISWELECKEWE",
    "VEGETARIE QUIC",
    "1 IC OS MIMO",
    "WATED",
    "MARTEL BLUE SWIFT",
    "6 WRIST BANDS",
    "YAM CHIPS",
    "CHICKEN WINGS",
    "SAMOSA / SPRING ROLLS",
    "CROQUET",
    "KELEWELE SKEWERS",
    "VEGETABLE QUICHE",
    "BEEF TACOS / FISH TACOS",
    "BREAKFAST BURRITOS / SLIDERS",
    "1 JUG OF MIMOSA",
    "GH MUMM OLYMPE",
    "8 WRIST BANDS",
    "BEEF TACOS / FISH TACOS",
    "BREAKFAST BURRITOS",
    "SLIDERS",
  ];

  const queryClient = useQueryClient();

  const mutateUploadTicket = useMutation(createTicket, {
    onSuccess: () => queryClient.invalidateQueries("gallery"),
  });

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      await mutateUploadTicket.mutateAsync(values);
      resetForm({});
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
        <DrawerHeader>Add a ticket to an event</DrawerHeader>

        <Formik
          initialValues={{
            event: "",
            name: "",
            people: "",
            price: "",
            options: [],
          }}
          onSubmit={onSubmit}
        >
          {({
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            isSubmitting,
            errors,
            setFieldTouched,
            setFieldValue,
            dirty,
          }) => (
            <form onSubmit={handleSubmit}>
              <Flex justify="space-between" direction="column" minH="90vh">
                <DrawerBody>
                  <Grid gap={4}>
                    <FormSelect
                      label="Select Event"
                      placeholder="select an event"
                      touched={touched}
                      error={errors}
                      setFieldTouched={setFieldTouched}
                      id="event"
                      setFieldValue={setFieldValue}
                      value={values.event}
                      options={events}
                      required
                    />
                    <FormInput
                      label="Ticket Name"
                      name="name"
                      required
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Number of people"
                      name="people"
                      type="number"
                      required
                      value={values.people}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Ticket price"
                      name="price"
                      type="number"
                      required
                      value={values.price}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />

                    <FormMultiSelect
                      label="Options for the ticket"
                      options={ticketOptions}
                      error={errors}
                      setFieldTouched={setFieldTouched}
                      id="options"
                      touched={touched}
                      setFieldValue={setFieldValue}
                      value={values.options}
                      required
                      placeholder="Type any options for the ticket"
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

export default CreateTicketDrawer;
