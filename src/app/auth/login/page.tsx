"use client";

import ComponentInput from "@/app/components/componentAuth/auhtInput";
import ComponentButton from "@/app/components/button";
import {
  Box,
  FormControl,
  Heading,
  InputGroup,
} from "@chakra-ui/react";
import React from "react";
import ComponentInputPassword from "@/app/components/componentAuth/inputPassword";
import Link from "next/link";
import ComponentIconPassword from "@/app/components/componentAuth/iconPassword";
import { UseAuth } from "@/app/auth/useAuth";

const AuthLogin = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

 const { changeHandlerValidate, submitHandelValidate } = UseAuth()

  return (
    <>
      <Box>
        <Box
          height="100vh"
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <Box boxShadow="base" p="6" rounded="md" w="50%">
            <form onSubmit={submitHandelValidate}>
              <Box mb={5} gap="4">
                <Heading color="whitesmoke">Login</Heading>
              </Box>

              <Box mb="4">
                <FormControl>
                <ComponentInput type={"text"}  holder={"Enter Username/Email"} name={"email"} change={changeHandlerValidate}/>
                </FormControl>
              </Box>
              <Box mb="5">
                <InputGroup size="md">
                  <ComponentInputPassword show={show} holder={"Enter Password"} name={"password"} change={changeHandlerValidate}/>
                  <ComponentIconPassword handle={handleClick} show={show}/>
                </InputGroup>
              </Box>

              <ComponentButton child={"Login"}/>
            </form>
            <Box textAlign={"center"} p={5}>
              <Heading size="xs" color={"whitesmoke"}>
                No account? <Link href={"/auth/register"}>Register here</Link>
              </Heading>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AuthLogin;
