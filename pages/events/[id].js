import React from 'react';
import Layout from 'container/Layout';
import EventsHeader from '@components/Headers/EventsHeader';
import {
  Box,
  Container,
  Flex,
  Grid,
  List,
  ListItem,
  Text,
} from '@chakra-ui/layout';
import Button from '@components/Button';
import { IconButton } from '@chakra-ui/button';
import { BiHeart } from 'react-icons/bi';
import useAPI from '@context/apiContext';
import { Image } from '@chakra-ui/image';

const Event = () => {
  const { buyTicket } = useAPI();
  return (
    <Layout>
      <EventsHeader details />
      <Container
        minW={{ md: '3xl' }}
        bg='white'
        rounded='md'
        // pos={{ md: 'absolute' }}
        // left={0}
        // right={0}
        // top={-20}
        zIndex={10}
        p={{ base: 4, md: 8 }}
        mb={64}
      >
        <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={10} mt={10}>
          <Box borderWidth={1} borderColor='gray.200' rounded='md' p={8}>
            <Text fontSize={{ md: '2xl' }} fontWeight='bold'>
              Platter 1(Garden)
            </Text>
            <Text fontSize={{ md: 'xl' }} fontWeight='bold'>
              GHC 2000
            </Text>
            <Text textTransform='uppercase' fontSize='sm' mt={2}>
              Serves up t0 4 people
            </Text>

            <List
              mt={5}
              d='grid'
              gridTemplateColumns={{ md: 'repeat(2, 1fr)' }}
              gap={4}
            >
              <ListItem>Lorem.</ListItem>
              <ListItem>Lorem.</ListItem>
              <ListItem>Lorem.</ListItem>
              <ListItem>Lorem.</ListItem>
              <ListItem>Lorem.</ListItem>
              <ListItem>Lorem.</ListItem>
            </List>

            <Flex align='center' mt={6}>
              <Button title='Add to cart' onClick={buyTicket} />

              <IconButton
                rounded='full'
                variant='outline'
                colorScheme='blue'
                aria-label='Search database'
                icon={<BiHeart />}
                ml={4}
              />
            </Flex>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Event;
