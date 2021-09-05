import { Box } from '@chakra-ui/react';
import React from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const Layout = ({ children, title, description, ...rest }) => {
  const { pathname } = useRouter();

  return (
    <Box overflow='hidden'>
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
      <Box
        {...rest}
        minH={
          pathname === '/auth/verify' || pathname === '/404' ? '80vh' : '92vh'
        }
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
