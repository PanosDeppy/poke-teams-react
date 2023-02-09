import Box from "@mui/material/Box";

import { Banner } from "../components/Banner";
import { PokeSearch } from "../containers/PokeSearch";

export const Home = () => {
  return (
    <Box>
      <Banner title="Find your Pokemon and build your team" />
      <PokeSearch />
    </Box>
  );
};
