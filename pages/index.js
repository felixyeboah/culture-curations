import { Box } from '@chakra-ui/react';
import Slider from 'components/Slider';
import Layout from 'container/Layout';

export default function Home() {
  return (
    <Layout title='Home'>
      <Slider />
    </Layout>
  );
}
