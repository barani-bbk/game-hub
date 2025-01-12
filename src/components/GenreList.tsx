import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/stores/gameQueryStore";
import { Heading, HStack, Image, Link, List, Text } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const onSelectGenre = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const skeletons = new Array(20).fill(1);
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root listStyle="none">
        {isLoading &&
          skeletons.map((_, index) => (
            <List.Item paddingY={1} key={index}>
              <GenreListSkeleton />
            </List.Item>
          ))}
        {data?.results.map((genre) => (
          <List.Item paddingY={1} key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                as={Link}
                onClick={() => onSelectGenre(genre.id)}
                fontSize="lg"
              >
                {genre.name}
              </Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
