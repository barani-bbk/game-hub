import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
}

export interface GenreResponse {
  count: number;
  next: string;
  previous: string;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setError("");
    setLoading(true);
    apiClient
      .get<GenreResponse>("/genres", { signal: controller.signal })
      .then(({ data }) => {
        setGenres(data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setGenres([]);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
