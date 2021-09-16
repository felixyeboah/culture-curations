import {
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image as ChakraImage,
  Link,
  Text,
} from '@chakra-ui/react';
import Layout from 'container/Layout';
import React from 'react';
import NextLink from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import api from '@utils/api';
import { Image } from 'cloudinary-react';

const Galleries = ({ allImages }) => {
  console.log('images', allImages);
  return (
    <Layout title='Gallery' pt={{ base: 24, md: 48 }} px={{ base: 4, md: 24 }}>
      <Box>
        <Heading>Gallery</Heading>
      </Box>

      <Grid
        templateColumns={{ md: 'repeat(4, 1fr)' }}
        gap={6}
        my={{ base: 10, md: 20 }}
      >
        {allImages.map((item) => (
          <Box mt={3} h={115} pos='relative' key={item.id}>
            <ChakraImage
              as={Image}
              cloudName='lunar-studios'
              publicId={item.cover}
              height='100%'
              w='100%'
              rounded='md'
              objectFit='cover'
              loading='lazy'
              overflow='hidden'
            />
            <NextLink href={`/gallery/${item.slug}`}>
              <Link d='block' w='100%' _hover={{ textDecor: 'none' }}>
                <Flex
                  align='center'
                  justify='space-between'
                  pos='absolute'
                  bottom={0}
                  bg='white'
                  p={6}
                  w='100%'
                  roundedBottomLeft='md'
                  roundedBottomRight='md'
                >
                  <Text fontWeight='bold' fontSize='lg' mt={2}>
                    {item.title}
                  </Text>

                  <IconButton
                    rounded='full'
                    colorScheme='brandBlue'
                    aria-label='Search database'
                    icon={<BiChevronRight />}
                  />
                </Flex>
              </Link>
            </NextLink>
          </Box>
        ))}
      </Grid>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await api.get('/gallery');
  const allImages = res.data;
  return {
    props: {
      allImages,
    },
  };
}

export default Galleries;
