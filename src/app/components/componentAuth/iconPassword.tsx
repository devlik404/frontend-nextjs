"use client";

import { InputRightElement } from "@chakra-ui/react";
import { BiShowAlt, BiHide } from "react-icons/bi";

const ComponentIconPassword = ({ handle, show }: any) => {
  return (
    <>
      <InputRightElement
        width="4.5rem"
        onClick={handle}
        cursor={"pointer"}
        color={"whitesmoke"}
      >
        {show ? <BiShowAlt /> : <BiHide />}
      </InputRightElement>
    </>
  );
};

export default ComponentIconPassword;
