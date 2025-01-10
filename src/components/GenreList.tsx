import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Text, Link } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = new Array(20).fill(1);
  if (error) return null;

  return (
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
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text as={Link} onClick={() => onSelectGenre(genre)} fontSize="lg">
              {genre.name}
            </Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
