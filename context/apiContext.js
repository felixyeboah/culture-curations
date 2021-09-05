import Axios from 'axios';
import React from 'react';
import api from 'utils/auth/api';
import Cookies from 'js-cookie';

export const ApiContext = React.createContext({});

export const ApiProvider = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState('fetching');
  const [member, setMember] = React.useState([]);
  const [verifyData, setVerifyData] = React.useState([]);

  const verifySponsorID = async (id) => {
    try {
      const res = await api.get(`/user/verify/${id}`);
      setVerifyData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const adminMembers = async () => {
    try {
      return await api.get(`/user/all/*`);
    } catch (error) {
      setError(error);
    }
  };

  const membersCall = async (id) => {
    try {
      return await api.get(`/user/all/${id}`);
    } catch (error) {
      setError(error);
    }
  };

  const memberInfo = async (id) => {
    try {
      const res = await api.get(`/user/info/${id}`);
      setMember(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const forgotPassword = async (params) => {
    try {
      await api.post('/user/otp', params);
    } catch (error) {
      throw new Error(error);
    }
  };

  const sendEmail = async (params) => {
    try {
      await Axios.post(
        'https://auxillary-services.pten.network/api/notification/send-email',
        params
      );
    } catch (error) {
      throw new Error(error);
    }
  };

  const paymentAPI = async (payload) =>
    await Axios({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_PAYMENT}/payment/details`,
      data: payload,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(
          window.sessionStorage.getItem('token')
        )}`,
      },
    });

  return (
    <ApiContext.Provider
      value={{
        verifySponsorID,
        paymentAPI,
        adminMembers,
        data,
        error,
        loading,
        membersCall,
        memberInfo,
        member,
        verifyData,
        forgotPassword,
        sendEmail,
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
