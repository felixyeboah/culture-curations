import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';

const EventsHeader = ({ details }) => {
  return (
    <Flex h={{ md: 120 }} w='100%' pos='relative'>
      <Image
        h='100%'
        w='100%'
        objectFit='cover'
        src='/images/slides/slide-5.jpg'
        alt='cover picture'
      />
      <Box
        pos='absolute'
        inset={0}
        bgGradient='linear(to-r, rgba(7, 7, 75, .7), rgba(39, 54, 139, .7))'
      />
      <Flex
        // align='center'
        direction='column'
        justify='center'
        mt={{ base: 20, md: 0 }}
        px={{ base: 6, md: 24 }}
        color='white'
        pos='absolute'
        inset={0}
        zIndex={20}
        w={{ md: 130 }}
      >
        <Heading as='h2' fontSize={{ base: '3xl', md: '6xl' }}>
          Checkout our monthly events
        </Heading>
        {details && (
          <Flex align='center' fontSize={{ md: 'xl' }}>
            <Text>Front/Back - Accra</Text>
            <Text as='span' px={3}>
              &middot;
            </Text>
            <Text fontWeight='bold'>2:00PM</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default EventsHeader;
