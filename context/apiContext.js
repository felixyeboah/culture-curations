import { useToast } from '@chakra-ui/toast';
import api from '@utils/api';
import axios from 'axios';
import React from 'react';

export const ApiContext = React.createContext({});

export const ApiProvider = ({ children }) => {
  const toast = useToast();

  const getSlides = async () => {
    try {
      const { data } = await api.get('/slides');
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const uploadSlides = async (payload) => {
    try {
      const res = await api.post('/slides', payload);
      if (res.status === 201) {
        toast({
          description: 'Images uploaded successfully!',
          status: 'success',
          duration: 9000,
          position: 'top-right',
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSlide = async (payload) => {
    try {
      const res = await api.patch('/slides', payload);
      if (res.status === 204) {
        toast({
          description: 'Images deleted successfully!',
          status: 'success',
          duration: 9000,
          position: 'top-right',
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createGallery = async (payload) => {
    try {
      const res = await api.post('/gallery', payload);
      if (res.status === 201) {
        toast({
          description: 'Images deleted successfully!',
          status: 'success',
          duration: 9000,
          position: 'top-right',
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGallery = async (payload) => {
    try {
      const res = await api.patch('/gallery', payload);
      if (res.status === 204) {
        toast({
          description: 'Images deleted successfully!',
          status: 'success',
          duration: 9000,
          position: 'top-right',
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buyTicket = async () => {
    try {
      const res = await axios.post(
        'https://payproxyapi.hubtel.com/items/initiate',
        {
          totalAmount: 0.5,
          description: 'Amapiano & Brunch',
          callbackUrl:
            'https://curatedbyculture.herokuapp.com/api/v1/orders/payment-hook',
          returnUrl: 'http://localhost:3000/success',
          merchantAccountNumber: '1511220',
          cancellationUrl: 'http://localhost:3000/canceled',
          clientReference: '614540192b897ad614319fcc',
        },
        {
          headers: {
            Authorization: `Basic ${btoa(
              process.env.NEXT_PUBLIC_USERNAME +
                ':' +
                process.env.NEXT_PUBLIC_PASSWORD
            )}`,
          },
        }
      );

      console.log('result', res);
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
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default function useAPI() {
  const context = React.useContext(ApiContext);
  return context;
}
