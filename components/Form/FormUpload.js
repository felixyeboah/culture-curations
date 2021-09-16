import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Grid,
  Input,
  Text,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { BsTrash } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { BiMenu } from 'react-icons/bi';
import Masonry from 'react-masonry-css';

const FormUpload = ({ files, setFiles, setFile, label, required }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        setFile((prevState) => [...prevState, file]);
      });
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const removeImage = (id) => {
    const newImages = files.filter((item) => item.name !== id);
    setFiles(newImages);
  };

  const thumbs = files.map((file) => (
    <Box
      d='inline-block'
      w='100%'
      p={2}
      boxSizing='border-box'
      key={file.name}
      pos='relative'
      borderWidth={1}
      borderColor='gray.200'
      rounded='md'
    >
      <Image src={file?.preview} alt={file?.name} />
      <Flex align='center' justify='space-between' py={1} color='white'>
        <Box>
          <Icon as={BiMenu} />
        </Box>
        <Box
          as='button'
          role='button'
          aria-label='remove button'
          onClick={() => removeImage(file.name)}
        >
          <Icon as={BsTrash} />
        </Box>
      </Flex>
    </Box>
  ));

  React.useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <FormControl isRequired={required}>
      <FormLabel color='gray.500' fontSize='sm'>
        {label}
      </FormLabel>
      <Box>
        <Flex align='center' mb={6} cursor='pointer'>
          <Box {...getRootProps({ className: 'dropzone' })}>
            <Input {...getInputProps()} />
            {files.length === 0 && (
              <Text
                color='gray.700'
                fontSize='sm'
                borderWidth={1}
                borderColor='gray.700'
                rounded='md'
                p={20}
              >
                Drag and drop some files here, or click to select files
              </Text>
            )}
          </Box>
        </Flex>
        <Box mt={10}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {thumbs}
          </Masonry>
        </Box>
      </Box>
    </FormControl>
  );
};

FormUpload.propTypes = {
  files: PropTypes.array,
  setFiles: PropTypes.func,
  paymentId: PropTypes.string,
  setFile: PropTypes.func,
};

export default FormUpload;
