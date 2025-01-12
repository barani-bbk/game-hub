import APIClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import useGameQueryStore from "@/stores/gameQueryStore";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: 12,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 3 * 60 * 1000,
  });
};

export default useGames;
