import { Box, Heading, Image } from '@chakra-ui/react';
import Layout from 'container/Layout';
import React from 'react';
import Masonry from 'react-masonry-css';
import { SRLWrapper } from 'simple-react-lightbox';
import { API } from '@utils/constants';

const Gallery = ({ gallery }) => {
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
            {gallery.images.map((image) => (
              <Box key={image._key}>
                <Image
                  cursor='zoom-in'
                  src={image.url}
                  alt={gallery.title}
                  loading='lazy'
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
  const res = await fetch(`${API}/galleries?slug=${slug}`);
  const gallery = await res.json();
  return {
    props: {
      gallery: gallery[0],
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${API}/galleries`);
  const allImages = await res.json();

  const paths = allImages.map((img) => ({ params: { slug: img.slug } }));

  return {
    paths,
    fallback: true,
  };
}

export default Gallery;
