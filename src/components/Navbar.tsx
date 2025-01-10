import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingX={2} paddingY={1}>
      <Image boxSize="50px" src={logo} />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
