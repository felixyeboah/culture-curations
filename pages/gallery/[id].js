import { Box, Heading, Image } from '@chakra-ui/react';
import Layout from 'container/Layout';
import React from 'react';
import { gallery } from '@utils/data';
import Masonry from 'react-masonry-css';
import { SRLWrapper } from 'simple-react-lightbox';

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Layout pt={{ base: 24, md: 48 }} px={{ base: 4, md: 24 }}>
      <Box>
        <Heading>Images for October</Heading>
      </Box>

      <Box mt={{ base: 10, md: 20 }}>
        <SRLWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {gallery.map((image) => (
              <Box key={image.id}>
                <Image src={`/images/slides/${image.img}`} alt='image' />
              </Box>
            ))}
          </Masonry>
        </SRLWrapper>
      </Box>
    </Layout>
  );
};

export default Gallery;
