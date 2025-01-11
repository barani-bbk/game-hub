import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  const buttonLabel =
    data.results.find((platform) => platform.id === selectedPlatformId)?.name ||
    "Platform";

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" outline="none" size="sm">
          {buttonLabel} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent minW="10rem">
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
            value={platform.slug}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
