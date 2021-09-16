import { Box, Heading, Image as ChakraImage } from '@chakra-ui/react';
import Layout from 'container/Layout';
import React from 'react';
import Masonry from 'react-masonry-css';
import { SRLWrapper } from 'simple-react-lightbox';
import { Image } from 'cloudinary-react';
import api from '@utils/api';

const Gallery = ({ gallery }) => {
  console.log('gallery', gallery);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Layout
      title={gallery.title}
      pt={{ base: 24, md: 48 }}
      px={{ base: 4, md: 24 }}
    >
      <Box>
        <Heading>Photos for {gallery.title}</Heading>
      </Box>

      <Box my={{ base: 10, md: 20 }}>
        <SRLWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {gallery.images.map((image, idx) => (
              <Box key={idx}>
                <ChakraImage
                  as={Image}
                  cloudName='lunar-studios'
                  publicId={image}
                  height='100%'
                  w='100%'
                  rounded='md'
                  objectFit='cover'
                  loading='lazy'
                  overflow='hidden'
                  cursor='zoom-in'
                />
              </Box>
            ))}
          </Masonry>
        </SRLWrapper>
      </Box>
    </Layout>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const res = await api.get(`/gallery/${slug}`);
  const gallery = res.data;
  return {
    props: {
      gallery: gallery,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await api.get('/gallery');
  const allImages = res.data;

  const paths = allImages.map((img) => ({ params: { slug: img.slug } }));

  return {
    paths,
    fallback: true,
  };
}

export default Gallery;
