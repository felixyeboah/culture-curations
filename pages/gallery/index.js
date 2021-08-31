import { Box, Grid, Heading, Image, Link, Text } from '@chakra-ui/react';
import Layout from 'container/Layout';
import React from 'react';
import NextLink from 'next/link';

const Galleries = () => {
  return (
    <Layout pt={{ base: 24, md: 48 }} px={{ base: 4, md: 24 }}>
      <Box>
        <Heading>Gallery</Heading>
      </Box>

      <Grid
        templateColumns={{ md: 'repeat(4, 1fr)' }}
        gap={6}
        mt={{ base: 10, md: 20 }}
      >
        <NextLink href='/gallery/october-2021'>
          <Link _hover={{ textDecor: 'none' }}>
            <Box>
              <Text fontWeight='bold' fontSize={{ md: 'lg' }}>
                August 2021
              </Text>
              <Box mt={3}>
                <Image
                  rounded='md'
                  src='/images/slides/slide-10.jpg'
                  alt='August 2021'
                />
              </Box>
            </Box>
          </Link>
        </NextLink>
      </Grid>
    </Layout>
  );
};

export default Galleries;
