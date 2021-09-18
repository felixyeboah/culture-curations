import { Box, Flex, Heading } from '@chakra-ui/layout';
import { Property } from '@components/Property';
import useAPI from '@context/apiContext';
import Layout from 'container/Layout';
import { useRouter } from 'next/router';
import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Validate = ({ id }) => {
  const router = useRouter();
  const { orderId } = router.query;
  const { getOrder } = useAPI();
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getOrder(orderId);
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Layout title='Validate user'>
      <Flex
        align='center'
        justify='center'
        minH={{ base: '100vh', md: '90vh' }}
      >
        {loading ? (
          <Box>
            <HashLoader loading={loading} size={100} color='#2D4298' />
          </Box>
        ) : (
          <Box
            w={{ base: 82, md: 120 }}
            p={{ md: 10 }}
            rounded='md'
            filter='drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.1))'
            bg='white'
            borderWidth={1}
          >
            <Flex
              align='center'
              justify='center'
              textAlign='center'
              bg='blue.dark'
              color='white'
              p={3}
              rounded='md'
              mb={5}
            >
              <Heading as='h4' fontSize='3xl'>
                {data?.user?.firstName} {data?.user?.lastName}
              </Heading>
            </Flex>
            <Box>
              <Property label='Email' value={data?.user?.email} />
              <Property label='Phone Number' value={data?.user?.phoneNumber} />
              <Property label='Event Name' value={data?.ticket?.event.name} />
              <Property label='Ticket Name' value={data?.ticket?.name} />
              <Property label='Amount' value={`GHC${data?.ticket?.price}`} />
            </Box>
          </Box>
        )}
      </Flex>
    </Layout>
  );
};

export default Validate;

Validate.getInitialProps = async ({ query }) => {
  const { id } = query;

  return { id };
};
