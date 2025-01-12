import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/stores/gameQueryStore";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const onSelectPlatform = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  if (error) return null;
  const buttonLabel = usePlatform(selectedPlatformId)?.name || "Platform";

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
            onClick={() => onSelectPlatform(platform.id)}
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
