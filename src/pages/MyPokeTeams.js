import { useState, useEffect } from "react";
import { getDataFromLS } from "../utils/getDataFromLS";

import { Banner } from "../components/Banner";
import { MyPokeTeamsDefault } from "../components/MyPokeTeamsDefault";
import { TeamsCreated } from "../components/TeamsCreated";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const styleBoxes = {
  display: "flex",
  justifyContent: "center",
  mx: "auto",
  fontSize: "1.2rem",
  color: "#335c67ff",
};

export const MyPokeTeams = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const pokemonFromLS = getDataFromLS("pokemon", []);

    setPokemon(pokemonFromLS);
  }, []);

  return (
    <Container>
      <Box>
        <Banner title="My Poke Teams" />
      </Box>
      {pokemon.length === 0 ? (
        <MyPokeTeamsDefault />
      ) : (
        <TeamsCreated pokemon={pokemon} />
      )}
    </Container>
  );
};
