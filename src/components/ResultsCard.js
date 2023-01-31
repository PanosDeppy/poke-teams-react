import { Type } from "./Type";
import { StatsModal } from "./StatsModal";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
      {/* <Box
        sx={{
          alignItems: "center",
        }}
      >
        <img src="images/sean-thomas-F6920BvzrZE-unsplash.jpg"></img>
      </Box> */}
      <CardMedia
        sx={{
          height: 250,
          // display: "inline-block",
        }}
        title="green iguana"
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
          sx={{ display: "flex", alignItems: "center" }}
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
          borderTop: "3px solid #9e2a2b",
        }}
      >
        <Type />
        <Button size="small">Abilities</Button>
        <StatsModal />
      </CardActions>
      <Button sx={{ my: 4 }} size="small">
        Add to your team
      </Button>
    </Card>
  );
};
