import { Box } from "@mui/system";

import { PokeForm } from "../components/PokeForm";
import { ResultsCard } from "../components/ResultsCard";

export const PokeSearch = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [error, setError] = useState(false);
  return (
    <Box>
      <PokeForm />
      <ResultsCard />
    </Box>
  );
};
