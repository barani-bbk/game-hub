import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { Card } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
