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

        <Image
          src='data:image/png;base64,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'
          alt='QR'
        />
      </Container>
    </Layout>
  );
};

export default Event;
