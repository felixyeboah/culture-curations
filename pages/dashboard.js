import useAuth from '@context/userContext';
import { withPrivate } from '@utils/ProtectPage';
import Layout from 'container/Layout';
import React from 'react';

const Dashboard = () => {
  const { user, active } = useAuth();

  console.log('user', user);
  console.log('active', active);

  return (
    <Layout title='Dashboard'>
      <p>Dashboard</p>
    </Layout>
  );
};

export default withPrivate(Dashboard);
