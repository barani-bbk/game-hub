import useGame from "@/hooks/useGame";
import { Heading, Text, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <>
      <Heading fontSize="4xl">{data.name}</Heading>
      <Text>{data.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
