import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion(Box);
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const MobileDrawerWrapper = ({ children }) => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.3 } }}
      w='100%'
      h='100vh'
      pos='fixed'
      inset={0}
      bg='rgba(0,0,0,.5)'
      zIndex={20}
    >
      <MotionBox
        initial={{ x: -400 }}
        animate={{
          x: 0,
          transition: { ...transition },
        }}
        exit={{ x: -400, transition: { ...transition } }}
        w={85}
        h='100vh'
        p={6}
        bg='gray.50'
      >
        {children}
      </MotionBox>
    </MotionBox>
  );
};

export default MobileDrawerWrapper;
