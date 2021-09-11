import React from 'react';
import Layout from 'container/Layout';
import EventsHeader from '@components/Headers/EventsHeader';
import { Container, Text } from '@chakra-ui/layout';

const Event = () => {
  return (
    <Layout>
      <EventsHeader details />
      <Container
        minW={{ md: '4xl' }}
        bg='white'
        rounded='md'
        pos={{ md: 'absolute' }}
        left={0}
        right={0}
        // top={-20}
        zIndex={10}
        p={{ base: 4, md: 8 }}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          quasi ipsa rerum reiciendis dolorum omnis molestiae commodi odio minus
          illum?
        </Text>
      </Container>
    </Layout>
  );
};

export default Event;
