import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export const Team = ({ team }) => {
  return (
    <Container>
      <Typography>{team.name}</Typography>
      <Box>
        {team.pokemon.length === 0 && <div>NO POKEMON</div>}
        {team.pokemon.length !== 0 &&
          team.pokemon.map((pokemon) => {
            return <div>{pokemon.name}</div>;
          })}
      </Box>
    </Container>
  );
};
