import GameAttributes from "@/components/GameAttributes";
import TextSummorize from "@/components/TextSummorize";
import useGame from "@/hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <>
      <Heading marginBottom={4} fontSize="4xl">
        {data.name}
      </Heading>
      <TextSummorize>{data.description_raw}</TextSummorize>
      <GameAttributes game={data} />
    </>
  );
};

export default GameDetailPage;
