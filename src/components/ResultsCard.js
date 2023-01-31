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
      }}
    >
      <Box
        sx={{
          alignItems: "center",
        }}
      >
        <img src="images/sean-thomas-F6920BvzrZE-unsplash.jpg"></img>
      </Box>
      <CardMedia
        sx={{
          height: 250,
          display: "flex",
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
        sx={{ display: "flex", justifyContent: "space-evenly", my: 3 }}
      >
        <Button size="small">Type</Button>
        <Button size="small">Abilities</Button>
        <Button size="small">Stats</Button>
      </CardActions>
      <Button sx={{ my: 4 }} size="small">
        Add to your team
      </Button>
    </Card>
  );
};
