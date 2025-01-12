import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/stores/gameQueryStore";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`;
  return (
    <Heading
      size={{
        base: "3xl",
        md: "4xl",
        lg: "5xl",
      }}
      as="h1"
      marginY={5}
    >
      {heading.trim()}
    </Heading>
  );
};

export default GameHeading;
