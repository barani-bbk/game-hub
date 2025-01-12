import { Trailer } from "@/entities/Trailer";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ["games", id],
    queryFn: apiClient.getAll,
  });
};
export default useTrailers;
