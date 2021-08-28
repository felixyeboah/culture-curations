import '../styles/globals.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { theme } from 'theme/theme';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box pos='relative'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
