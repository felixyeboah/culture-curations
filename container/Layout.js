import { Box } from '@chakra-ui/react';
import React from 'react';
import { NextSeo } from 'next-seo';

const Layout = ({ children, title, description, ...rest }) => {
  return (
    <Box>
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
      <Box {...rest}>{children}</Box>
    </Box>
  );
};

export default Layout;
