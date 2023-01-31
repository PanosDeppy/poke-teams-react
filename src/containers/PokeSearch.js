import { Box } from "@mui/system";

import { PokeForm } from "../components/PokeForm";
import { ResultsCard } from "../components/ResultsCard";

export const PokeSearch = () => {
  return (
    <Box>
      <PokeForm />
      <ResultsCard />
    </Box>
  );
};
