import { Team } from "./Team";

import Box from "@mui/material/Box";

export const TeamsCreated = ({ pokemon }) => {
  return (
    <Box>
      <Team pokemon={pokemon} />
    </Box>
  );
};
