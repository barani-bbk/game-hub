import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  slug: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GameResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setError("");
    apiClient
      .get<GameResponse>("/games", { signal: controller.signal })
      .then(({ data }) => {
        setGames(data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setGames([]);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
