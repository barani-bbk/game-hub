import { Platform } from "@/entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import { ReactElement } from "react";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

const iconMap: { [key: string]: ReactElement } = {
  pc: <FaWindows />,
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
  nintendo: <SiNintendo />,
  mac: <FaApple />,
  linux: <FaLinux />,
  android: <FaAndroid />,
  ios: <MdPhoneIphone />,
  web: <BsGlobe />,
};

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon color="gray.500" key={platform.id}>
          {iconMap[platform.slug] ?? <BsGlobe />}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
