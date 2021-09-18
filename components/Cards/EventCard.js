import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import NextLink from 'next/link';

const EventCard = ({ expired }) => {
  function random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      'rgba(' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      r().toFixed(1) +
      ')'
    );
  }

  var color = random_rgba();

  console.log('color', color);
  // rgba(249, 64, 217, 0.7);
  // rgba(213, 81, 239, 0.7);
  // rgba(49, 183, 157, 0.7);

  return (
    <NextLink href='/events/1234' passHref>
      <Link d='block' _hover={{ textDecor: 'none' }} pos='relative'>
        {expired && (
          <Box
            pos='absolute'
            left={-6}
            top={0}
            bg='red.600'
            color='white'
            zIndex={10}
            transform='rotate(320deg)'
            p={2}
            rounded='md'
          >
            <Heading as='h5' fontSize={{ md: '2xl' }}>
              Expired
            </Heading>
          </Box>
        )}
        <Box
          h={{ md: 115 }}
          bg='blue.dark'
          pos='relative'
          rounded='md'
          overflow='hidden'
        >
          <Box pos='relative'>
            <Image
              h={{ md: 90 }}
              w='100%'
              objectFit='cover'
              src='/images/slides/img-2.jpg'
              alt='cover'
            />
            <Box
              pos='absolute'
              inset={0}
              bgGradient='linear(to-r, rgba(7, 7, 75, .7), rgba(7, 7, 75, .7))'
            />
            <Box pos='absolute' bottom={-8}>
              <Image
                w={{ md: 64 }}
                src='/images/amapiano.png'
                alt='amapiano logo'
              />
            </Box>
          </Box>
          <Flex
            align='center'
            justify='center'
            direction='column'
            bg='white'
            w={16}
            h={24}
            pos='absolute'
            top={4}
            right={4}
            rounded='md'
            color='blue.dark'
          >
            <Heading as='h5' fontSize={{ base: 'xl', md: '2xl' }}>
              01
            </Heading>
            <Heading as='h5' fontSize={{ base: 'xl', md: '2xl' }}>
              Aug
            </Heading>
            <Text color='gray.700'>Edition</Text>
          </Flex>
          <Box py={{ base: 6, md: 10 }} px={{ base: 4, md: 6 }} color='white'>
            <Heading
              as='h4'
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight='light'
            >
              Front/Back - Accra
            </Heading>
            <Text fontWeight='bold'>2:00PM</Text>
          </Box>
        </Box>
      </Link>
    </NextLink>
  );
};

export default EventCard;
