import { withPrivate } from '@utils/ProtectPage';
import Layout from 'container/Layout';
import React from 'react';

const Dashboard = () => {
  return (
    <Layout title='Dashboard'>
      <p>Dashboard</p>
    </Layout>
  );
};

export default withPrivate(Dashboard);
