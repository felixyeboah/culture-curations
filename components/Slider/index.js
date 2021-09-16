import {
  Box,
  Button,
  Flex,
  Image as ChakraImage,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import React from 'react';
import { GiTable } from 'react-icons/gi';
import { IoTicket } from 'react-icons/io5';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from 'cloudinary-react';

const HomeSlider = ({ slides }) => {
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
        {slides?.map((images) =>
          images.images.map((img, idx) => (
            <ChakraImage
              as={Image}
              key={idx}
              cloudName='lunar-studios'
              publicId={img}
              h='100vh'
              w='100vw'
              objectFit='cover'
              loading='lazy'
              overflow='hidden'
            />
          ))
        )}

        <Box pos='absolute' inset={0} bg='rgba(0,0,0,.2)' w='100vw' h='100vh' />
      </Slider>

      <Flex
        align='center'
        justify='center'
        w='100vw'
        pos='absolute'
        bottom={{ base: -48, md: -56 }}
        right={0}
        left={0}
        color='white'
        px={{ base: 4, sm: 0 }}
        h='100vh'
        direction='column'
        zIndex={1}
      >
        <Flex align='center' mt={6}>
          <Menu>
            <MenuButton
              as={Button}
              mr={4}
              px={{ base: 8, sm: 12 }}
              h={{ base: 12, sm: 14 }}
              colorScheme='purple'
              rightIcon={<IoTicket />}
            >
              Tickets
            </MenuButton>
            <MenuList color='gray.700' bg='white'>
              <Link href='tel:+233558519900' _hover={{ textDecor: 'none' }}>
                <MenuItem>Call to book</MenuItem>
              </Link>
              <Link
                href=' https://wa.me/233558519900'
                isExternal
                _hover={{ textDecor: 'none' }}
              >
                <MenuItem>WhatsApp to book</MenuItem>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              mr={4}
              px={{ base: 8, sm: 12 }}
              h={{ base: 12, sm: 14 }}
              bg='blue.dark'
              color='white'
              _hover={{ bg: 'blue.dark' }}
              _active={{ bg: 'blue.dark' }}
              rightIcon={<GiTable />}
            >
              Tickets
            </MenuButton>
            <MenuList color='gray.700' bg='white'>
              <Link href='tel:+233558519900' _hover={{ textDecor: 'none' }}>
                <MenuItem>Call to book</MenuItem>
              </Link>
              <Link
                href=' https://wa.me/233558519900'
                isExternal
                _hover={{ textDecor: 'none' }}
              >
                <MenuItem>WhatsApp to book</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeSlider;
