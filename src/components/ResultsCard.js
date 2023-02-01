import { Type } from "./Type";
import { Abilities } from "./Abilities";
import { StatsModal } from "./StatsModal";

import pokemonImage from "../images/gallade.svg";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Card that presents all the details of the Pokemon chosen
export const ResultsCard = ({ pokeData }) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "3px solid #9e2a2b",
        m: "auto",
        boxShadow: 20,
      }}
    >
      <img className="image" src={pokemonImage} alt="pokemon" />

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
            letterSpacing: "2.5px",
            color: "#335c67ff",
          }}
        >
          Pokemon Name
        </Typography>
        <div>{pokeData}</div>
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
        <Type />
        <Abilities />
        <StatsModal />
      </CardActions>
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
          mb: 3,
          mx: "auto",
          width: "35%",
          color: "#335c67ff",
          bgcolor: "white",
          border: "solid #335c67ff",
          "&:hover": {
            color: "white",
            bgcolor: "#335c67ff",
          },
        }}
        type="submit"
        size="small"
      >
        Add to your team
      </Button>
    </Card>
  );
};
