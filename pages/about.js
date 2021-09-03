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
        <Heading>About</Heading>
      </Box>

      <Box mt={{ base: 10, md: 20 }}>
        <Text>
          Culture Management Group LLC is an experiential production company
          that prioritizes celebration of Africa’s diverse culture and the
          vibrant work of African creatives &amp; entrepreneurs. The company
          aims elevate and highlight creative talents within Africa by
          introducing an interactive events and experiences that teach,
          explains, and explores various culture with a pioneering approach.
          CMG’s production channels experiences in art, food, fashion and music
          and the intersectionality of culture.
        </Text>
      </Box>
    </Layout>
  );
};

export default About;
