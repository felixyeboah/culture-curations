import useAuth from 'context/userContext';
import AuthLayout from 'container/AuthLayout';
import React from 'react';

const Dashboard = () => {
  const { user, active } = useAuth();

  console.log('user', user);
  console.log('active', active);

  return (
    <AuthLayout title='Dashboard'>
      <p>Home</p>
    </AuthLayout>
  );
};

export default Dashboard;
