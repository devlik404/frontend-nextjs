import { Flex, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";
import { RiMoreLine } from "react-icons/ri";
const NavbarComponent = ({ left, center, right }: any) => {
  return (
    <Flex
      p={4}
      justifyContent={"space-between"}
      alignItems="center"
      color={"whitesmoke"}
    >
      {/* Left side */}
      <Flex alignItems="center">
        <Link href={"/auth/login"}>
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

      {/* Center */}
      <Text>@malikfajar</Text>
      {/* Right side */}

      <IconButton
        icon={<RiMoreLine />}
        aria-label="Right Menu"
        fontSize="20px"
        variant="ghost"
        color={"whitesmoke"}
        onClick={() => {
    
        }}
      />
    </Flex>
  );
};

export default NavbarComponent;
