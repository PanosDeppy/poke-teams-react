import { useEffect, useState } from "react";

import axios from "axios";

import oops from "../images/oops.jpg";

import { PokeForm } from "../components/PokeForm";
import { ResultsCard } from "../components/ResultsCard";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useApp } from "../context/AppProvider";

// Container to handle the search query on the PokeForm component
export const PokeSearch = () => {
  const { currentPokemon, setCurrentPokemon } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // UseEffect to handle the API call and catch the error if there is any
  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${searchQuery}`
          );

          setError(false);
          setLoading(false);
          setCurrentPokemon(data);
        } catch (typeError) {
          setCurrentPokemon();
          setLoading(false);
          setError(true);
        }
      };

      fetchData();
    }
  }, [searchQuery]);

  return (
    <Box>
      <PokeForm setSearchQuery={setSearchQuery} />
      {error && (
        <Box>
          <Alert
            sx={{
              width: "50%",
              color: "#9e2a2b",
              border: "3px solid #9e2a2b",
              borderRadius: 2,
              p: 1,
              mb: 4,
              mx: "auto",
            }}
            severity="error"
          >
            Oops! Could not find results for "{searchQuery}"
          </Alert>
          <Backdrop
            sx={{
              color: "#9e2a2b",
              bgcolor: "#fff3b069",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Box
            component="img"
            sx={{
              maxWidth: "40%",
              display: "flex",
              justifyContent: "center",
              mx: "auto",
              mb: 5,
              border: "3px solid #9e2a2b",
              borderRadius: 20,
            }}
            src={oops}
          />
        </Box>
      )}
      {!error && <ResultsCard searchQuery={searchQuery} />}
    </Box>
  );
};
