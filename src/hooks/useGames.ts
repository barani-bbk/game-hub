import { GameQuery } from "@/App";
import { Response } from "@/services/api-client";
import { Platform } from "./usePlatforms";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  slug: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () =>
    apiClient
      .get<Response<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
        },
      })
      .then((res) => res.data);

  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: fetchGames,
    staleTime: 3 * 60 * 1000,
  });
};

// useData<Game>(
//   "/games",
//   {
//     params: {
//       genres: gameQuery.genre?.id,
//       platforms: gameQuery.platform?.id,
//       ordering: gameQuery.sort,
//       search: gameQuery.searchText,
//     },
//   },
//   [gameQuery]
// );

export default useGames;
