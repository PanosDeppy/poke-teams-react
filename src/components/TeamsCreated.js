import { useApp } from "../context/AppProvider";

import { Team } from "./Team";

import Box from "@mui/material/Box";
import { Container, Grid, Stack } from "@mui/material";

export const TeamsCreated = () => {
  const { teams } = useApp();
  return (
    <Stack
      direction="horizontal"
      gap={4}
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "around" }}
    >
      {teams.map((team) => (
        <Team key={team.name} team={team} />
      ))}
    </Stack>
  );
};
