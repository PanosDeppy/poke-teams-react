import { Banner } from "../components/Banner";
import { PokeSearch } from "../containers/PokeSearch";

import { Box } from "@mui/system";

export const Home = () => {
  return (
    <Box>
      <Banner title="Find your Pokemon and build your team" />
      <PokeSearch />
    </Box>
  );
};
