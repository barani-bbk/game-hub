import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name ?? ""} ${
    gameQuery.genre?.name ?? ""
  } Games`;
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
