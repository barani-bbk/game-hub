import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack>
      <Link to="/">
        <Image objectFit="cover" boxSize="50px" src={logo} />
      </Link>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
