import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const ResultsCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pokemon Name
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Type</Button>
        <Button size="small">Abilities</Button>
        <Button size="small">Stats</Button>
        <Button size="small">Add to your team</Button>
      </CardActions>
    </Card>
  );
};
