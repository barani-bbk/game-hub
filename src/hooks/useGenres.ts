import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Response } from "../services/api-client";
import genres from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
}

const useGenres = () => {
  const fetchGenre = () =>
    apiClient.get<Response<Genre>>("/genres").then(({ data }) => data);

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenre,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });
};

export default useGenres;
