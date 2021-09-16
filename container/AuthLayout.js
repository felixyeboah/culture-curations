import React from 'react';
import { NextSeo } from 'next-seo';
import { Grid, GridItem } from '@chakra-ui/layout';
import Sidebar from './Sidebar';

const AuthLayout = ({ children, title, description }) => {
  return (
    <>
      <NextSeo
        title={`${title} | Culture Curations`}
        description={description}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://www.url.ie/a',
          title: `${title} | Culture Curations`,
          description: description,
          images: [
            {
              url: 'https://i.imgur.com/P1YSywa.jpg',
              width: 800,
              height: 600,
              alt: 'Culture Curations',
            },
          ],
          site_name: 'Culture Curations',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Grid
        bg='white'
        templateColumns={{ md: '15% 85%' }}
        minH='100vh'
        pos='relative'
      >
        <GridItem
          borderRightWidth={1}
          borderColor='gray.200'
          display={{ base: 'none', md: 'block' }}
          py={{ md: 4 }}
          bg='blue.dark'
          color='white'
        >
          <Sidebar />
        </GridItem>
        <GridItem p={{ md: 16 }}>{children}</GridItem>
      </Grid>
    </>
  );
};

export default AuthLayout;
