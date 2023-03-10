import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ClearIcon from "@mui/icons-material/Clear";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

import sorry from "../images/sorryy.png";

import { getDataFromLS } from "../utils/getDataFromLS";
import { useApp } from "../context/AppProvider";

export const Team = ({ team }) => {
  const { setTeams, setCurrentPokemon, currentPokemon } = useApp();

  const handleClickRemoveTeam = () => {
    const teamsFromLS = getDataFromLS("teams", []);

    const teams = teamsFromLS.filter((each) => {
      return each.name !== team.name;
    });

    localStorage.setItem("teams", JSON.stringify(teams));

    setTeams(teams);
  };

  // const handleClickRemovePokemon = () => {
  //   const teamsFromLS = getDataFromLS("teams", []);

  //   const pokemon = teamsFromLS.filter((each) => {
  //     console.log(each.pokemon);
  //     console.log(team.pokemon);
  //     return each.pokemon !== team.pokemon;
  //   });

  //   localStorage.setItem("teams", JSON.stringify(pokemon));

  //   setTeams(pokemon);
  // };

  return (
    <Container
      sx={{
        border: "8px solid #9e2a2b",
        bgcolor: "#f1fcff",
        borderRadius: 2,
        width: "70%",
        mt: 1,
        mb: 6,
        mx: "auto",
      }}
    >
      <InputAdornment position="start">
        <IconButton onClick={handleClickRemoveTeam}>
          <ClearIcon
            sx={{
              border: "2px solid #335c67ff",
              borderRadius: "50%",
              bgcolor: "#335c67ff",
              color: "white",
            }}
          />
        </IconButton>
      </InputAdornment>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Pokemon Solid, sans-serif",
          fontSize: "1.4rem",
          letterSpacing: "2.5px",
          color: "#335c67ff",
          mb: 3,
          pb: 0,
          pt: 2,
        }}
      >
        {team.name}
      </Typography>

      <Grid container spacing={3}>
        {team.pokemon.map((pokemon) => {
          return (
            <Grid item xs={5.89}>
              <Card
                sx={{
                  maxWidth: 200,
                  // height: {
                  //   xs: 120,
                  //   sm: 130,
                  //   md: 1,
                  //   lg: 1,
                  //   xl: 1,
                  // },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "4px solid #9e2a2b",
                  borderRadius: 2,
                  pt: {
                    xs: 0,
                    sm: 0,
                    md: 1,
                    lg: 1,
                    xl: 1,
                  },
                  mx: "auto",
                  mt: 0,
                  mb: 3,
                  boxShadow: 20,
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: "90px",
                    maxWidth: "80%",
                    p: {
                      xs: 0,
                      sm: 0,
                      md: "10px 10px 0 10px",
                      lg: "10px 10px 0 10px",
                      xl: "10px 10px 0 10px",
                    },
                    m: "0 auto",
                  }}
                  src={
                    pokemon?.sprites?.other?.dream_world?.front_default ||
                    pokemon?.sprites?.front_default ||
                    sorry
                  }
                  alt={pokemon?.name}
                />

                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 0,
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "flex",
                        lg: "flex",
                        xl: "flex",
                      },
                      alignItems: "center",
                      fontFamily: "Pokemon Solid",
                      fontSize: "1rem",
                      textTransform: "capitalize",
                      letterSpacing: "2.5px",
                      color: "#335c67ff",
                    }}
                  >
                    {pokemon?.name}
                  </Typography>
                  <InputAdornment position="start">
                    <IconButton
                      sx={{
                        display: {
                          xs: "none",
                          sm: "none",
                          md: "flex",
                          lg: "flex",
                          xl: "flex",
                        },
                        position: "relative",
                        top: "25px",
                        left: "35px",
                        mx: 0,
                        p: 0,
                      }}
                      // onClick={handleClickRemovePokemon}
                    >
                      <ClearIcon
                        sx={{
                          border: "2px solid #335c67ff",
                          borderRadius: "50%",
                          bgcolor: "#335c67ff",
                          color: "white",
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
