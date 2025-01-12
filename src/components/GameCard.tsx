import { Game } from "@/entities/Game";
import getCroppedImageUrl from "@/services/image-url";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body paddingBottom={5}>
        <HStack justifyContent="space-between" marginBottom={4}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
