import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem hideBelow="lg" area="aside" bg="gold">
        Aside
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
