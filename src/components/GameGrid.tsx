import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
  slug: string;
}

interface GameResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    apiClient
      .get<GameResponse>("/games")
      .then(({ data }) => {
        setGames(data.results);
      })
      .catch((error) => {
        setError(error.message);
        setGames([]);
      });
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
