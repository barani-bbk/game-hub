import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  return usePlatforms().data.results.find((platform) => platform.id === id);
};

export default usePlatform;
