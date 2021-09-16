import { Image } from '@chakra-ui/image';
import { Box, Flex, Link, Text } from '@chakra-ui/layout';
import useAuth from '@context/userContext';
import { withPrivate } from '@utils/ProtectPage';
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

export default withPrivate(Dashboard);
