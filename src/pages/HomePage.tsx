import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Grid, GridItem, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem
          position="sticky"
          height="100vh"
          left={0}
          top={0}
          zIndex={900}
          hideBelow="lg"
          area="aside"
        >
          <GenreList />
        </GridItem>
        <GridItem paddingX={5} paddingBottom={10} area="main">
          <GameHeading />
          <HStack gap={5} marginBottom={4}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
