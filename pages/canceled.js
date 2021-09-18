import { Box, Flex, Link, Text } from '@chakra-ui/layout';
import Button from '@components/Button';
import Layout from 'container/Layout';
import React from 'react';
import NextLink from 'next/link';
import Icon from '@chakra-ui/icon';
import { MdCancel } from 'react-icons/md';

const Cancelled = () => {
  return (
    <Layout title='Payment Cancelled'>
      <Flex
        align='center'
        justify='center'
        mt={40}
        direction='column'
        w={{ md: 120 }}
        mx='auto'
      >
        <Box mb={6}>
          <Icon as={MdCancel} boxSize={20} color='red.600' />
        </Box>
        <Text fontWeight='bold' fontSize={{ md: '2xl' }} mb={6}>
          Payment was canceled. Sad to see this.
        </Text>
        <NextLink href='/' passHref>
          <Link _hover={{ textDecor: 'none' }}>
            <Button title='Back to home' />
          </Link>
        </NextLink>
      </Flex>
    </Layout>
  );
};

export default Cancelled;
