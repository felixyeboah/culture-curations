import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';
import api from '@utils/api';
import { useToast } from '@chakra-ui/react';

//api here is an axios instance

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');

  const toast = useToast();

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('_token');
      const user = JSON.parse(window.localStorage.getItem('_user'));
      setToken(token);
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token}`;
        if (user) {
          setUser(user);
        }
        // console.log('Got user', user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const signin = async (params) => {
    try {
      const { data } = await api.post('/users/login', params);
      if (data) {
        Cookies.set('_token', data.token);
        setToken(data.token);
        api.defaults.headers.Authorization = `Bearer ${data.token}`;
        window.localStorage.setItem('_user', JSON.stringify(data.data.user));
        if (data.data.user.emailSent) {
          router.push('/auth/verify');
        } else if (data.data.user.active) {
          toast({
            description: data.message,
            status: 'success',
            duration: 9000,
            position: 'top-right',
            isClosable: true,
          });
          router.push('/dashboard');
        }
      }
    } catch (error) {
      toast({
        description: error.message,
        status: 'error',
        duration: 9000,
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  const signup = async (params) => {
    try {
      const { data } = await api.post('/users/register', params);
      if (data) {
        Cookies.set('_token', JSON.stringify(data.token));
        setToken(data.token);
        api.defaults.headers.Authorization = `Bearer ${data.token}`;
        toast({
          description: data.message,
          status: 'success',
          duration: 9000,
          position: 'top-right',
          isClosable: true,
        });
        if (
          data.data.user.active === false &&
          data.data.user.emailSent === true
        ) {
          router.push('/auth/verify');
        }
      }
    } catch (error) {
      toast({
        description: error.message,
        status: 'error',
        duration: 9000,
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  const forgotPassword = async (params) => {
    try {
      const { data } = await api.post('/users/forgotPassword', params);
      console.log('data', data);
      if (data.status === 'success') {
        toast({
          description: data.message,
          status: 'success',
          duration: 9000,
          position: 'top-right',
          isClosable: true,
        });

        if (data?.resetToken) {
          router.push(`/auth/reset-password/${data.resetToken}`);
        }
      }
    } catch (error) {
      toast({
        description: error.message,
        status: 'error',
        duration: 9000,
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  const resetPassword = async (params) => {
    try {
      const { data } = await api.patch('/users/resetPassword', params);
      if (data) {
        toast({
          description: data.message,
          status: 'success',
          duration: 9000,
          position: 'top-right',
          isClosable: true,
        });
        router.push('/auth/login');
      }
    } catch (error) {
      toast({
        description: error.message,
        status: 'error',
        duration: 9000,
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  const logout = () => {
    Cookies.remove('_token');
    setUser(null);
    delete api.defaults.headers.Authorization;
    window.location.pathname = '/auth/login';
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        signin,
        loading,
        logout,
        signup,
        token,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
