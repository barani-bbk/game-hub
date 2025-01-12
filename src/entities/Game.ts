import Platform from "./Platform";
import Genre from "./Genre";
import Publisher from "./publisher";

interface Game {
  id: number;
  name: string;
  description_raw: string;
  background_image: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export default Game;
