

import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
const SubNavbarComponent = ({click}:any) => {


  return (
    <Flex p={4} justifyContent={"space-between"} alignItems="center" color={"whitesmoke"}>
    {/* Left side */}
    <Flex alignItems="center">
    <Link href={"/home/about"}>
      <IconButton
        icon={<LuChevronLeft />}
        aria-label="Menu"
        fontSize="20px"
        variant="ghost"
        color={"whitesmoke"}
      />
      </Link>
      <Text>Back</Text>
    </Flex>

  
    <Button variant={"ghost"} onClick={click} color={"blue.200"}>Save</Button>
  </Flex>
  );
};

export default SubNavbarComponent ;