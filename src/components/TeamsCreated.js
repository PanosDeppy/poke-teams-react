import { Team } from "./Team";

import Box from "@mui/material/Box";
import { useApp } from "../context/AppProvider";

export const TeamsCreated = () => {
  const { teams } = useApp();
  return (
    <Box>
      HELLO
      {teams.map((team) => (
        <Team key={team.name} team={team} />
      ))}
    </Box>
  );
};
