import { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow={"hidden"} borderRadius={10}>
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
