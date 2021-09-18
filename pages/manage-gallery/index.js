import { Box, Flex, Grid, Heading, Link, Text } from '@chakra-ui/layout';
import { Image as ChakraImage } from '@chakra-ui/image';
import AuthLayout from 'container/AuthLayout';
import React from 'react';
import NextLink from 'next/link';
import Icon from '@chakra-ui/icon';
import { BsArrowRight } from 'react-icons/bs';
import { Image } from 'cloudinary-react';
import { IconButton } from '@chakra-ui/button';
import { BiChevronRight } from 'react-icons/bi';
import api from '@utils/api';
import { withPrivateAdmin } from '@utils/ProtectPage';

const ManageGallery = ({ allImages }) => {
  return (
    <AuthLayout title='Manage Gallery'>
      <Flex align='center' justify='space-between'>
        <Box>
          <Heading as='h4'>Manage Gallery</Heading>
        </Box>
        <Box>
          <NextLink href='/manage-gallery/upload' passHref>
            <Link _hover={{ textDecor: 'none' }} color='blue.dark'>
              Upload Gallery Images <Icon as={BsArrowRight} />
            </Link>
          </NextLink>
        </Box>
      </Flex>

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
            <NextLink href={`/manage-gallery/${item.slug}`}>
              <Link d='block' w='100%' _hover={{ textDecor: 'none' }}>
                <Flex
                  align='center'
                  justify='space-between'
                  pos='absolute'
                  bottom={0}
                  bg='blue.dark'
                  color='white'
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
                    color='white'
                    icon={<BiChevronRight />}
                  />
                </Flex>
              </Link>
            </NextLink>
          </Box>
        ))}
      </Grid>
    </AuthLayout>
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

export default withPrivateAdmin(ManageGallery);
