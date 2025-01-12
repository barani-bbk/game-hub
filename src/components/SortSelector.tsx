import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import useGameQueryStore from "@/stores/gameQueryStore";

const SortSelector = () => {
  const onSelectSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sort);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const orderLabel =
    sortOrders.find((order) => order.value === selectedSortOrder)?.label ||
    sortOrders[0].label;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" outline="none" size="sm">
          Order by: {orderLabel}
        </Button>
      </MenuTrigger>
      <MenuContent minW="10rem">
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
