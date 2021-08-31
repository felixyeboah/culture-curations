import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import useSlider from '@hooks/useSlider';
import React from 'react';
import { GiTable } from 'react-icons/gi';
import { IoTicket } from 'react-icons/io5';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { images } from '@utils/data';

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <Box w='100vw' h='100vh' overflow='hidden' pos='relative'>
      <Slider {...settings}>
        {images.map((image) => (
          <Image
            key={image.id}
            h='100vh'
            w='100vw'
            objectFit='cover'
            src={`/images/slides/${image.img}`}
            alt='Events'
            overflow='hidden'
          />
        ))}

        <Box pos='absolute' inset={0} bg='rgba(0,0,0,.2)' w='100vw' h='100vh' />
      </Slider>

      <Flex
        align='center'
        justify='center'
        w='100vw'
        pos='absolute'
        bottom={-56}
        right={0}
        left={0}
        color='white'
        px={{ base: 4, sm: 0 }}
        h='100vh'
        direction='column'
        zIndex={1}
      >
        <Flex align='center' mt={6}>
          <Button
            mr={4}
            px={{ base: 8, sm: 12 }}
            h={{ base: 12, sm: 14 }}
            colorScheme='purple'
            leftIcon={<IoTicket />}
          >
            Tickets
          </Button>
          <Link href='tel:+23311111111'>
            <Button
              px={{ base: 8, sm: 12 }}
              h={{ base: 12, sm: 14 }}
              colorScheme='blue'
              leftIcon={<GiTable />}
            >
              Tables
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeSlider;
