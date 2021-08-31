import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box w='100vw' h='100vh' overflow='hidden' pos='relative'>
      <Slider {...settings}>
        {/* <Box w='100vw' h='100vh' overflow='hidden' pos='relative'> */}
        {images.map((image) => (
          <Image
            key={image.id}
            h='100vh'
            w='100vw'
            objectFit='cover'
            src={`/images/slides/${image.img}`}
            alt='Events'
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
          <Button
            px={{ base: 8, sm: 12 }}
            h={{ base: 12, sm: 14 }}
            colorScheme='blue'
            leftIcon={<GiTable />}
          >
            Tables
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeSlider;
