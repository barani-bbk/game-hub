import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding={2} paddingBottom={10}>
      <Image boxSize="50px" src={logo} />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
