import { useToast } from "@chakra-ui/toast";
import api from "utils/api";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";

export const ApiContext = React.createContext({});

export const ApiProvider = ({ children }) => {
  const [url, setUrl] = React.useState("");
  const toast = useToast();

  const history = useHistory();

  const getSlides = async () => {
    try {
      const { data } = await api.get("/slides");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const uploadSlides = async (payload) => {
    try {
      const res = await api.post("/slides", payload);
      if (res.status === 201) {
        toast({
          description: "Images uploaded successfully!",
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSlide = async (payload) => {
    try {
      const res = await api.patch("/slides", payload);
      if (res.status === 204) {
        toast({
          description: "Images deleted successfully!",
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createGallery = async (payload) => {
    try {
      const res = await api.post("/gallery", payload);
      if (res.status === 201) {
        toast({
          description: "Images deleted successfully!",
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllGallery = async () => {
    try {
      const { data } = await api.get("/gallery");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getGallery = async (id) => {
    try {
      const { data } = await api.get(`/gallery/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGallery = async (payload) => {
    try {
      const res = await api.patch("/gallery", payload);
      if (res.status === 204) {
        toast({
          description: "Images deleted successfully!",
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buyTicket = async (id, price, name) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_PAYMENT_API,
        {
          totalAmount: price,
          description: name,
          callbackUrl: `${process.env.REACT_APP_API_NEW}/orders/payment-hook`,
          returnUrl: "http://localhost:3000/success",
          merchantAccountNumber: process.env.REACT_APP_MERCHANT_ID,
          cancellationUrl: "http://localhost:3000/canceled",
          clientReference: id,
        },
        {
          headers: {
            Authorization: `Basic ${btoa(
              process.env.REACT_APP_USERNAME +
                ":" +
                process.env.REACT_APP_PASSWORD
            )}`,
          },
        }
      );
      setUrl(res.data.data.checkoutDirectUrl);
      history.push("/checkout");
    } catch (error) {
      console.log(error);
    }
  };

  const getOrder = async (id) => {
    try {
      const { data } = await api.get(`/orders/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const createOrder = async (payload) => {
    try {
      const res = await api.post("/orders", payload);
      console.log("res", res);
      if (res.status === 201) {
        toast({
          description: "Order created successfully!",
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
        await buyTicket(
          res?.data?._id,
          res?.data?.ticket?.price,
          res?.data?.ticket?.event?.name
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllEvents = async () => {
    try {
      const { data } = await api.get("/events");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getEvent = async (id) => {
    try {
      const { data } = await api.get(`/events/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const createEvent = async (payload) => {
    try {
      const res = await api.post("/events", payload);
      if (res.status === 201) {
        toast({
          description: "Event successfully created!",
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteEvent = async (id) => {
    const res = await api.delete(`/events/${id}`);
    if (res.status === 200) {
      toast({
        description: "Event successfully created!",
        status: "success",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
    }
  };

  const getAllTickets = async () => {
    try {
      const { data } = await api.get("/tickets");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const createTicket = async (payload) => {
    try {
      const res = await api.post("/tickets", payload);
      if (res.status === 201) {
        toast({
          description: "Tickets successfully created!",
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        uploadSlides,
        getSlides,
        deleteSlide,
        createGallery,
        deleteGallery,
        buyTicket,
        getOrder,
        createOrder,
        getAllGallery,
        getGallery,
        url,
        createEvent,
        getEvent,
        getAllEvents,
        deleteEvent,
        createTicket,
        getAllTickets,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default function useAPI() {
  return React.useContext(ApiContext);
}
