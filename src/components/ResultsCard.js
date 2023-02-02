import { Type } from "./Type";
import { Abilities } from "./Abilities";
import { StatsModal } from "./StatsModal";
import { AddToTeamButton } from "./AddToTeamButton";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Card that presents all the details of the Pokemon chosen
export const ResultsCard = ({ pokeData }) => {
  //const pokeSpriteUrl = pokeData.sprites.other.dream_world.front_default;
  const pokemonName = pokeData.name;

  return (
    <Card
      sx={{
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "3px solid #9e2a2b",
        mx: "auto",
        mt: 6,
        mb: 8,
        boxShadow: 20,
      }}
    >
      <Box
        component="img"
        sx={{
          maxWidth: "80%",
          p: "50px 50px 0 50px",
          m: "0 auto",
        }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeData.id}.svg`}
        alt={pokemonName}
      />

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Pokemon Solid",
            fontSize: "1.7rem",
            textTransform: "capitalize",
            letterSpacing: "2.5px",
            color: "#335c67ff",
          }}
        >
          {pokemonName}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: 0,
          mb: 2,
          pt: 2,
          borderTop: "3px solid #9e2a2b",
        }}
      >
        <Type pokeData={pokeData} />
        <Abilities />
        <StatsModal />
      </CardActions>
      <AddToTeamButton />
    </Card>
  );
};
