import { Image } from '@chakra-ui/image';
import { Box, Container, Text } from '@chakra-ui/layout';
import { withPublic } from '@utils/ProtectPage';
import Layout from 'container/Layout';
import React from 'react';

const Verify = () => {
  return (
    <Layout title='Verify email'>
      <Container maxW='3xl' mt={{ base: 32, md: 48 }}>
        <Box>
          <Image
            w={{ base: 40, md: 64 }}
            h={{ base: 24, md: 32 }}
            mx='auto'
            objectFit='scale-down'
            src='/email.png'
            alt='email'
          />
        </Box>
        <Text fontSize={{ base: 'md', md: 'xl' }} textAlign='center'>
          An verification link has been sent to your email. Kindly check and
          confirm your email to continue.
        </Text>
      </Container>
    </Layout>
  );
};

export default withPublic(Verify);
