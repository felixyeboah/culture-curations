import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import useSlider from '../../hooks/useSlider';

const images = [
  { id: 1, img: 'slide-1.jpg' },
  { id: 2, img: 'slide-2.jpg' },
  { id: 3, img: 'slide-3.jpg' },
  { id: 4, img: 'slide-4.jpg' },
  { id: 5, img: 'slide-5.jpg' },
  { id: 6, img: 'slide-6.jpg' },
  { id: 7, img: 'slide-7.jpg' },
  { id: 8, img: 'slide-8.jpg' },
  { id: 9, img: 'slide-9.jpg' },
  { id: 10, img: 'slide-10.jpg' },
  { id: 11, img: 'slide-11.jpg' },
  { id: 12, img: 'slide-12.jpg' },
  { id: 13, img: 'slide-13.jpg' },
  { id: 14, img: 'slide-14.jpg' },
  { id: 15, img: 'slide-15.jpg' },
  { id: 16, img: 'slide-16.jpg' },
  { id: 17, img: 'slide-17.jpg' },
  { id: 18, img: 'slide-18.jpg' },
  { id: 19, img: 'slide-19.jpg' },
];

const Slider = () => {
  const { offset, setOffset } = useSlider({
    total: images.length,
    enabled: true,
    useLoaded: false,
    speed: 7000,
  });

  return (
    <Flex
      h={{ base: '100vh', md: '100vh', '2xl': '100vh' }}
      overflow='hidden'
      direction={{ base: 'column', md: 'row' }}
      pos='relative'
    >
      <Box w='100vw' h='100%' overflow='hidden' pos='relative'>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          h={{ base: `${images.length * 100}vh`, md: '100%' }}
          className='scroller'
          w={{ md: `${images.length * 100}vw` }}
          transform={{
            base: `translate3d(0, -${offset * 100}vh, 0)`,
            md: `translate3d(-${offset * 100}vw, 0, 0)`,
          }}
          objectFit={{ base: 'cover', md: 'initial' }}
        >
          {images.map((image) => (
            <Image
              key={image.id}
              h='100%'
              w='100%'
              objectFit='cover'
              src={`/images/slides/${image.img}`}
              alt='building'
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Slider;
