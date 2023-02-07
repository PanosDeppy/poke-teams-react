import { ResultsCard } from "./ResultsCard";

import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export const Team = ({ pokemon }) => {
  return (
    <Container>
      <Typography>Team title</Typography>
      <Box>
        <ResultsCard />
      </Box>
    </Container>
  );
};
