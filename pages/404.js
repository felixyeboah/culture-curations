import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import Layout from 'container/Layout';
import React from 'react';

const ErrorPage = () => {
  return (
    <Layout title='Error 404'>
      <Flex
        w='full'
        h='60vh'
        align='center'
        justify='center'
        direction='column'
        mt={{ base: 40, md: 40 }}
        px={{ base: 4, md: 0 }}
      >
        <Box mx='auto'>
          <Image h={{ md: 120 }} src='/404.png' alt='404' />
        </Box>
        <Text m='auto' fontSize={{ base: 'xl', md: '3xl' }}>
          404 | Page Not Found
        </Text>
      </Flex>
    </Layout>
  );
};

export default ErrorPage;
