import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from 'container/Layout';
import React from 'react';

const About = () => {
  return (
    <Layout
      title='About Culture Curations'
      pt={{ base: 24, md: 48 }}
      px={{ base: 4, md: 24 }}
    >
      <Box>
        <Heading>Gallery</Heading>
      </Box>

      <Box mt={{ base: 10, md: 20 }}>
        <Text>
          All events and experiences curated by the Culture Management team.
        </Text>
      </Box>
    </Layout>
  );
};

export default About;
