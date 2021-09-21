import { Box, Heading, Image as ChakraImage } from "@chakra-ui/react";
import Layout from "container/Layout";
import React from "react";
import Masonry from "react-masonry-css";
import { SRLWrapper } from "simple-react-lightbox";
import { Image } from "cloudinary-react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import useAPI from "../../context/apiContext";
import HashLoader from "react-spinners/HashLoader";
import { breakpointColumnsObj } from "../../utils/constants";

const Gallery = () => {
  const { slug } = useParams();
  const { getGallery } = useAPI();

  const { data, loading } = useQuery(["gallery-id", slug], () =>
    getGallery(slug)
  );

  return (
    <Layout
      title={data?.title}
      pt={{ base: 24, md: 48 }}
      px={{ base: 4, md: 24 }}
    >
      <Box>
        <Heading>Photos for {data?.title}</Heading>
      </Box>

      {loading ? (
        <Box>
          <HashLoader loading={loading} size={100} color="#2D4298" />
        </Box>
      ) : (
        <Box my={{ base: 10, md: 20 }}>
          <SRLWrapper>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {data?.images?.map((image, idx) => (
                <Box key={idx}>
                  <ChakraImage
                    as={Image}
                    cloudName="lunar-studios"
                    publicId={image}
                    height="100%"
                    w="100%"
                    rounded="md"
                    objectFit="cover"
                    loading="lazy"
                    overflow="hidden"
                    cursor="zoom-in"
                  />
                </Box>
              ))}
            </Masonry>
          </SRLWrapper>
        </Box>
      )}
    </Layout>
  );
};

export default Gallery;
