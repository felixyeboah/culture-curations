import { useToast } from '@chakra-ui/toast';
import api from '@utils/api';
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

  return (
    <ApiContext.Provider
      value={{
        uploadSlides,
        getSlides,
        deleteSlide,
        createGallery,
        deleteGallery,
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
