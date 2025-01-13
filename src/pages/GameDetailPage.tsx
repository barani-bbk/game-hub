import GameAttributes from "@/components/GameAttributes";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import TextSummorize from "@/components/TextSummorize";
import useGame from "@/hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      gap={5}
    >
      <GridItem>
        <Heading marginBottom={4} fontSize="4xl">
          {data.name}
        </Heading>
        <TextSummorize>{data.description_raw}</TextSummorize>
        <GameAttributes game={data} />
      </GridItem>
      <GridItem spaceY={4}>
        <GameTrailer gameId={data.id} />
        <GameScreenshots gameId={data.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
