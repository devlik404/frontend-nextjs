'use client'
import { useState, ChangeEvent } from 'react';
import { Box, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, Image, IconButton, Input, Icon } from '@chakra-ui/react';
import { FaPlus, FaTrash } from 'react-icons/fa'; // Import ikon hapus

const AddImageBox = () => {
  const [image, setImage] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleBoxClick = () => {
    if (image) {
      onOpen();
    } else {
      document.getElementById('imageInput')?.click();
    }
  };

  const handleDeleteImage = () => {
    setImage("");
    onClose();
  };

  return (
    <>
     <Box display={"flex"} alignItems={"center"}  mb={5}>
      <Box
        w="60px"
        h="60px"
        borderRadius={"17px"}
        background="rgba(217, 217, 217, 0.06)"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        cursor="pointer"
        onClick={handleBoxClick}
      >
        <label htmlFor="imageInput">
          {image ? (
            <>
              <Image src={image} alt="Selected Image" style={{ width: '100%', height: '100%', borderRadius: 'md' }} />
           
            </>
          ) : (
            <>
              <Input
                type="file"
                id="imageInput"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <Icon as={FaPlus} boxSize={6} color="gray.500" />
            </>
          )}
        </label>
      
      </Box>
      <Text ml={5} w={"100px"} >Add Image</Text>
     </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={image} alt="Selected Image" />
            <IconButton
                icon={<FaTrash />}
                aria-label="Delete Image"
                colorScheme="red"
                size="sm"
                position="absolute"
                top="0"
                right="0"
                onClick={handleDeleteImage}
              />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddImageBox;
