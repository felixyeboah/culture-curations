import { useToast } from '@chakra-ui/toast';
import api from '@utils/api';
import axios from 'axios';
import router from 'next/router';
import React from 'react';

export const ApiContext = React.createContext({});

export const ApiProvider = ({ children }) => {
  const [url, setUrl] = React.useState('');
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
        process.env.NEXT_PUBLIC_PAYMENT_API,
        {
          totalAmount: 0.5,
          description: 'Amapiano & Brunch',
          callbackUrl:
            'https://curatedbyculture.herokuapp.com/api/v1/orders/payment-hook',
          returnUrl: 'http://localhost:3000/success',
          merchantAccountNumber: process.env.NEXT_PUBLIC_MERCHANT_ID,
          cancellationUrl: 'http://localhost:3000/canceled',
          clientReference: '6145d28ac3b0265986adc9e6',
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

      setUrl(res.data.data.checkoutDirectUrl);

      window.localStorage.setItem(
        '_payment',
        JSON.stringify(res.data.data.checkoutDirectUrl)
      );

      console.log('result', res);

      router.push('/checkout');
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
        url,
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
