import Stack from "@mui/material/Stack";

import { useApp } from "../context/AppProvider";
import { Team } from "./Team";

export const TeamsCreated = () => {
  const { teams } = useApp();
  return (
    <Stack
      direction="row"
      gap={4}
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "around" }}
    >
      {teams.map((team) => (
        <Team key={team.name} team={team} />
      ))}
    </Stack>
  );
};
