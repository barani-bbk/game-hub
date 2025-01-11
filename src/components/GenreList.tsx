import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Text, Link, Heading } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
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
        {data.map((genre) => (
          <List.Item paddingY={1} key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                as={Link}
                onClick={() => onSelectGenre(genre)}
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
