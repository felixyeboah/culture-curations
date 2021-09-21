import React, { createContext, useState, useContext, useEffect } from "react";
import api from "utils/api";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

//api here is an axios instance

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [active, setActive] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const toast = useToast();

  useEffect(() => {
    async function loadUserFromCookies() {
      const _token = sessionStorage.getItem("_token");
      const _user = sessionStorage.getItem("_user");

      if (_token && _user) {
        const token = JSON.parse(_token);
        const user = JSON.parse(_user);
        // console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setToken(token);
        if (user) {
          setUser(user);
          setActive(user.active);
          setEmailSent(user.emailSent);
        }
        // console.log('Got user', user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const signin = async (params) => {
    try {
      const { data } = await api.post("/users/login", params);
      if (data) {
        localStorage.setItem("_token", JSON.stringify(data.token));
        sessionStorage.setItem("_token", JSON.stringify(data.token));
        setToken(data.token);
        api.defaults.headers.Authorization = `Bearer ${data.token}`;
        localStorage.setItem("_user", JSON.stringify(data.data.user));
        sessionStorage.setItem("_user", JSON.stringify(data.data.user));
        if (data.data.user.emailSent) {
          history.push("/auth/verify");
        } else if (data.data.user.active) {
          toast({
            description: data.message,
            status: "success",
            duration: 9000,
            position: "top-right",
            isClosable: true,
          });
          setRedirectToReferrer(true);
        }
      }
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
    }
  };

  const signup = async (params) => {
    try {
      const { data } = await api.post("/users/register", params);
      if (data) {
        localStorage.setItem("_token", JSON.stringify(data.token));
        sessionStorage.setItem("_token", JSON.stringify(data.token));
        api.defaults.headers.Authorization = `Bearer ${data.token}`;
        toast({
          description: data.message,
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
        if (
          data.data.user.active === false &&
          data.data.user.emailSent === true
        ) {
          history.push("/auth/verify");
        }
      }
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
    }
  };

  const forgotPassword = async (params) => {
    try {
      const { data } = await api.post("/users/forgotPassword", params);
      console.log("data", data);
      if (data.status === "success") {
        toast({
          description: data.message,
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });

        if (data?.resetToken) {
          history.push(`/auth/reset-password/${data.resetToken}`);
        }
      }
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
    }
  };

  const resetPassword = async (params) => {
    try {
      const { data } = await api.patch("/users/resetPassword", params);
      if (data) {
        toast({
          description: data.message,
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
        history.push("/auth/login");
      }
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
    }
  };

  const isAuthenticated = () => {
    const _token = localStorage.getItem("_token");
    const _user = localStorage.getItem("_user");
    if (_token && _user) {
      return { token: _token, user: JSON.parse(_user) };
    } else {
      return {};
    }
  };

  const logout = () => {
    localStorage.removeItem("_token");
    localStorage.removeItem("_user");
    setUser(null);
    delete api.defaults.headers.Authorization;
    window.location.pathname = "/";
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        active,
        emailSent,
        signin,
        loading,
        logout,
        signup,
        token,
        forgotPassword,
        resetPassword,
        redirectToReferrer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
