import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { HStack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText fontSize="lg" noOfLines={1} />
    </HStack>
  );
};

export default GenreListSkeleton;
