import axios from "axios";

export interface Response<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ee76f934d75c49d4aabbdd83922eacbe",
  },
});
