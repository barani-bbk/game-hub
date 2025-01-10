import { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow={"hidden"} borderRadius={10}>
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="xl">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
