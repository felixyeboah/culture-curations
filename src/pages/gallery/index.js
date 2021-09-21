import {
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image as ChakraImage,
  Link,
  Text,
} from "@chakra-ui/react";
import Layout from "container/Layout";
import React from "react";
import { Link as ReachRouter } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { Image } from "cloudinary-react";
import { useQuery } from "react-query";
import useAPI from "../../context/apiContext";
import HashLoader from "react-spinners/HashLoader";
import { isEmpty } from "lodash";

const Galleries = () => {
  const { getAllGallery } = useAPI();

  const { data, loading } = useQuery("gallery", () => getAllGallery());

  return (
    <Layout title="Gallery" pt={{ base: 24, md: 48 }} px={{ base: 4, md: 24 }}>
      <Box>
        <Heading>Gallery</Heading>
      </Box>

      {isEmpty(data) ? (
        <Flex align="center" justify="center" minH="80vh" direction="column">
          <ChakraImage
            w={20}
            src={require("../../assets/images/image-gallery.png").default}
            alt="Gallery"
          />
          <Text mt={4} fontWeight="medium" fontSize="lg">
            No Photos at the moment
          </Text>
        </Flex>
      ) : loading ? (
        <Box>
          <HashLoader loading={loading} size={100} color="#2D4298" />
        </Box>
      ) : (
        <Grid
          templateColumns={{ md: "repeat(4, 1fr)" }}
          gap={6}
          my={{ base: 10, md: 20 }}
        >
          {data?.map((item) => (
            <Box mt={3} h={115} pos="relative" key={item.id}>
              <ChakraImage
                as={Image}
                cloudName="lunar-studios"
                publicId={item.cover}
                height="100%"
                w="100%"
                rounded="md"
                objectFit="cover"
                loading="lazy"
                overflow="hidden"
              />

              <Link
                as={ReachRouter}
                to={`/gallery/${item.slug}`}
                d="block"
                w="100%"
                _hover={{ textDecor: "none" }}
              >
                <Flex
                  align="center"
                  justify="space-between"
                  pos="absolute"
                  bottom={0}
                  bg="white"
                  p={6}
                  w="100%"
                  roundedBottomLeft="md"
                  roundedBottomRight="md"
                >
                  <Text fontWeight="bold" fontSize="lg" mt={2}>
                    {item.title}
                  </Text>

                  <IconButton
                    rounded="full"
                    colorScheme="brandBlue"
                    aria-label="Search database"
                    icon={<BiChevronRight />}
                  />
                </Flex>
              </Link>
            </Box>
          ))}
        </Grid>
      )}
    </Layout>
  );
};

export default Galleries;
