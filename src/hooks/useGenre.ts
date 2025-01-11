import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  return useGenres().data.results.find((genre) => genre.id === id);
};

export default useGenre;
