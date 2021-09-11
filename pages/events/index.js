import { Image } from '@chakra-ui/image';
import { Box, Container, Grid, Heading } from '@chakra-ui/layout';
import EventCard from '@components/Cards/EventCard';
import EventsHeader from '@components/Headers/EventsHeader';
import Layout from 'container/Layout';
import React from 'react';

const Events = () => {
  return (
    <Layout title='Events'>
      <EventsHeader />

      <Container
        maxW='9xl'
        px={{ base: 4, md: 24 }}
        my={{ base: 16, md: 32 }}
        overflow='hidden'
      >
        <Grid
          templateColumns={{ md: '75% 25%' }}
          gap={8}
          d={{ base: 'none', md: 'grid' }}
        >
          <Box />
          <Box>
            <Heading as='h4' fontSize={{ md: '2xl' }} color='gray.600'>
              Advertisement
            </Heading>
          </Box>
        </Grid>
        <Grid templateColumns={{ md: '75% 25%' }} gap={8} mt={5}>
          <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={8}>
            <EventCard />
            <EventCard expired />
            <EventCard expired />
          </Grid>
          <Box>
            <Heading
              as='h4'
              fontSize={{ md: '2xl' }}
              color='gray.600'
              mb={5}
              d={{ base: 'block', md: 'none' }}
            >
              Advertisement
            </Heading>
            <Box>
              <Image
                w={85}
                src='https://cdna.artstation.com/p/assets/images/images/019/056/448/large/wen-jie-wang-dm2p-18b-wangwenjie-z-06-01.jpg?1561827588&dl=1'
                alt='Advert'
              />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Events;
