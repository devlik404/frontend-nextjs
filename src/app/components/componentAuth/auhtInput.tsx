'use client'

import { Input } from "@chakra-ui/react"



const ComponentInput =({type,holder,name,change}:any) => {
    return(
        <>
          <Input
          color={"whitesmoke"}
                type={type}
              background={"rgba(255, 255, 255, 0.06)"}
                name={name}
                placeholder={holder}
                onChange={change}
                border={"none"}
              />
        </>
    )
}

export default ComponentInput;