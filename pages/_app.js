import '../styles/globals.css';
import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { theme } from 'theme/theme';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import MobileDrawer from '@components/MobileDrawer';
import { AnimatePresence } from 'framer-motion';
import MobileNavbar from '@components/MobileNavbar';
import { AuthProvider } from '@context/userContext';
import SimpleReactLightbox from 'simple-react-lightbox';
import { ApiProvider } from '@context/apiContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ApiProvider>
            <SimpleReactLightbox>
              <Box pos='relative'>
                <Navbar />
                <MobileNavbar onOpen={onOpen} />
                <AnimatePresence>
                  {isOpen && <MobileDrawer onClose={onClose} />}
                </AnimatePresence>

                <Component {...pageProps} />

                <Footer />
              </Box>
            </SimpleReactLightbox>
          </ApiProvider>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
