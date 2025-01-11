import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" outline="none" size="sm" marginBottom={1}>
          Order by: Relevance
        </Button>
      </MenuTrigger>
      <MenuContent minW="10rem">
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="date_added">Date Added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="release_date">Release Date</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="average_rating">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
