"use client";

import { Box, Button } from "@chakra-ui/react";

const ComponentButton = ({child}:any) => {
  return (
    <>
      <Box position="relative" width="100%" mb={5}>
        <Button
      
        type="submit"
          color={"white"}
          w={"100%"}
          borderRadius={"8px"}
          background={"linear-gradient(108deg, #62CDCB 24.88%, #4599DB 78.49%)"}
          position="relative"
          _hover={{
            background:
              "linear-gradient(108deg, #4599DB 24.88%, #62CDCB 78.49%)",
          }}
        >
         {child}
        </Button>
        <Box
          position="absolute"
          bottom="-8px"
          left="0"
          right="0"
          height="8px" 
          borderRadius="8px"
          background="linear-gradient(108deg, rgba(98, 205, 203, 0.50) 24.88%, rgba(69, 153, 219, 0.50) 78.49%)"
          filter={"blur(8px)"}
        />
      </Box>
    </>
  );
};

export default ComponentButton;
