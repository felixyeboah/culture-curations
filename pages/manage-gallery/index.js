import { Box, Flex, Heading, Link } from '@chakra-ui/layout';
import AuthLayout from 'container/AuthLayout';
import React from 'react';
import NextLink from 'next/link';
import Icon from '@chakra-ui/icon';
import { BsArrowRight } from 'react-icons/bs';

const ManageGallery = () => {
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
    </AuthLayout>
  );
};

export default ManageGallery;
