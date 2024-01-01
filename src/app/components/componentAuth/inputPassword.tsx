"use client";

import { Input } from "@chakra-ui/react";
import React from "react";

const ComponentInputPassword = ({ show, holder,name ,change}: any) => {
  return (
    <>
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder={holder}
        name={name}
        onChange={change}
        background={"rgba(255, 255, 255, 0.06)"}
        color={"whitesmoke"}
        border={"none"}
      />
    </>
  );
};

export default ComponentInputPassword;
