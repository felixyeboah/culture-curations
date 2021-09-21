import { Box, Flex } from '@chakra-ui/layout';
import useAPI from '@context/apiContext';
import Layout from 'container/Layout';
import React from 'react';

const Checkout = () => {
  const { url } = useAPI();

  console.log('url', url);
  return (
    <Layout title='Checkout'>
      <Flex align='center' justify='center' h={{ base: '100vh', md: '90vh' }}>
        <Box as='iframe' src={url} w={{ md: '40%' }} height='650'></Box>
      </Flex>
    </Layout>
  );
};

export default Checkout;
