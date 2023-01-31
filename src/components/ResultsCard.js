import { Type } from "./Type";
import { Abilities } from "./Abilities";
import { StatsModal } from "./StatsModal";

import dragon from "../images/gllde.svg";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export const ResultsCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "3px solid #9e2a2b",
        m: "auto",
      }}
    >
      <img className="image" src={dragon} alt="pokemon" />

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
        // variant="success"
        type="submit"
        size="small"
      >
        Add to your team
      </Button>
    </Card>
  );
};
