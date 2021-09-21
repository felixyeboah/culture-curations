import React from "react";
import AuthLayout from "container/AuthLayout";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { Link as ReachRouter } from "react-router-dom";
import Icon from "@chakra-ui/icon";
import { BsArrowRight, BsTrash } from "react-icons/bs";
import { Image } from "cloudinary-react";
import useAPI from "context/apiContext";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Masonry from "react-masonry-css";
import { breakpointColumnsObj } from "utils/constants";
import { Image as ChakraImage } from "@chakra-ui/image";
import { BiMenu } from "react-icons/bi";

const ManageSlides = () => {
  const { getSlides, deleteSlide } = useAPI();
  const queryClient = useQueryClient();

  const { data, loading } = useQuery("slides", () => getSlides());

  const mutateDeleteSlide = useMutation(deleteSlide, {
    onSuccess: () => queryClient.invalidateQueries("slides"),
  });

  return (
    <AuthLayout title="Manage Slides">
      <Flex align="center" justify="space-between">
        <Box>
          <Heading as="h4">Manage Slides</Heading>
        </Box>
        <Box>
          <Link
            as={ReachRouter}
            to="/manage-slides/upload"
            _hover={{ textDecor: "none" }}
            color="blue.dark"
          >
            Upload Slides <Icon as={BsArrowRight} />
          </Link>
        </Box>
      </Flex>

      <Box mt={10}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {loading ? (
            <Flex>loading...</Flex>
          ) : (
            data?.map((images) =>
              images.images.map((img, idx) => (
                <Box key={idx} p={2}>
                  <ChakraImage
                    as={Image}
                    cloudName="lunar-studios"
                    publicId={img}
                    crop="scale"
                    objectFit="cover"
                    loading="lazy"
                    overflow="hidden"
                  />
                  <Flex
                    align="center"
                    justify="space-between"
                    py={1}
                    color="white"
                  >
                    <Box>
                      <Icon as={BiMenu} />
                    </Box>
                    <Box
                      as="button"
                      role="button"
                      aria-label="remove button"
                      onClick={() => {
                        mutateDeleteSlide.mutateAsync({ public_id: img });
                      }}
                    >
                      <Icon as={BsTrash} />
                    </Box>
                  </Flex>
                </Box>
              ))
            )
          )}
        </Masonry>
      </Box>
    </AuthLayout>
  );
};

export default ManageSlides;
