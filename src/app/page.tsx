'use client'
import { Link } from '@chakra-ui/next-js'
import { Box,Text } from '@chakra-ui/react'

export default function Page() {
  return (

    <>
    <Box h={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box color={"white"}>

      <Text fontSize  ={"lg"}>WELCOME TO YOUAPP</Text>
      <Text>Silahkan Login atau Register Terlebih Dahulu</Text>
      <Box display={"flex"} gap={2}>

      <Link href='/auth/login' color='blue.400' _hover={{ color: 'blue.500' }}>
     login
    </Link>
      <Link href='/auth/register' color='blue.400' _hover={{ color: 'blue.500' }}>
     Register
    </Link>
      </Box>
      </Box>
    </Box>
    </>
  )
}