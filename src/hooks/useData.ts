import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Response<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setError("");
    setLoading(true);
    apiClient
      .get<Response<T>>(endpoint, {
        signal: controller.signal,
        ...(requestConfig || {}),
      })
      .then(({ data }) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setData([]);
        setLoading(false);
      });

    return () => controller.abort();
  }, [...(deps || [])]);

  return { data, error, isLoading };
};

export default useData;
