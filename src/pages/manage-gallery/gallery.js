import { Box, Flex, Heading } from "@chakra-ui/layout";
import AuthLayout from "container/AuthLayout";
import React from "react";
import Masonry from "react-masonry-css";
import { Image as ChakraImage } from "@chakra-ui/image";
import { Image } from "cloudinary-react";
import { breakpointColumnsObj } from "utils/constants";
import Icon from "@chakra-ui/icon";
import { BiMenu } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useAPI from "context/apiContext";
import { useParams } from "react-router-dom";

const ManageGallery = () => {
  const { deleteGallery } = useAPI();
  const { slug } = useParams();
  const queryClient = useQueryClient();
  const { getGallery } = useAPI();

  const { data } = useQuery(["gallery", slug], () => getGallery(slug));

  const mutateDeleteGallery = useMutation(deleteGallery, {
    onSuccess: () => queryClient.invalidateQueries("gallery"),
  });

  return (
    <AuthLayout title="Manage Gallery">
      <Box>
        <Heading as="h4">Photos for {data?.title}</Heading>
      </Box>

      <Box mt={20}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data?.images?.map((image, idx) => (
            <Box key={idx} p={2}>
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
              <Flex align="center" justify="space-between" py={1} color="white">
                <Box>
                  <Icon as={BiMenu} />
                </Box>
                <Box
                  as="button"
                  role="button"
                  aria-label="remove button"
                  onClick={() => {
                    mutateDeleteGallery.mutateAsync({ public_id: image });
                  }}
                >
                  <Icon as={BsTrash} />
                </Box>
              </Flex>
            </Box>
          ))}
        </Masonry>
      </Box>
    </AuthLayout>
  );
};

export default ManageGallery;
