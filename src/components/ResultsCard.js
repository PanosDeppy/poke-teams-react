import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import questionMarksGif from "../images/questionMarksGif.gif";
import sorry from "../images/sorryy.png";
import letsgo from "../images/letsgo.png";

import { Type } from "./Type";
import { Abilities } from "./Abilities";
import { StatsModal } from "./StatsModal";
import { AddToTeamButton } from "./AddToTeamButton";
import { useApp } from "../context/AppProvider";

// Card that presents all the details of the Pokemon chosen
export const ResultsCard = ({ searchQuery }) => {
  const { currentPokemon } = useApp();

  return (
    <Card
      sx={{
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "3px solid #9e2a2b",
        mx: {
          xs: 2.5,
          sm: "auto",
          md: "auto",
          lg: "auto",
        },
        mt: 6,
        mb: 8,
        boxShadow: 20,
      }}
    >
      {!searchQuery && (
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              pt: 4,
              px: 4,
              fontFamily: "Pokemon Solid, sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "2px",
              color: "#9e2a2b",
            }}
          >
            Are you going to search for a Pokemon, or what?
          </Typography>
          <Box
            component="img"
            sx={{
              p: {
                xs: "0 50px 0 0",
                sm: "0 50px",
                md: "50px 50px 0 50px",
                lg: "50px 50px 0 50px",
                xl: "50px 50px 0 50px",
              },
              mx: {
                xs: 0,
                sm: 0,
                md: "auto",
                lg: "auto",
              },
            }}
            src={questionMarksGif}
            alt="question-mark"
          />
          <Box
            component="img"
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              mx: "auto",
            }}
            src={letsgo}
            alt="lets-go"
          />
        </Box>
      )}

      {searchQuery && (
        <Box
          component="img"
          sx={{
            maxWidth: "80%",
            p: "50px 50px 0 50px",
            m: "0 auto",
          }}
          src={
            currentPokemon?.sprites?.other?.dream_world?.front_default ||
            currentPokemon?.sprites?.front_default ||
            sorry
          }
          alt={currentPokemon?.name}
        />
      )}

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
          {currentPokemon?.name}
        </Typography>
      </CardContent>
      {currentPokemon && (
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
      )}
      {currentPokemon && <AddToTeamButton />}
    </Card>
  );
};
