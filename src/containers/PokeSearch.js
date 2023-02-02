import { useEffect, useState } from "react";

import axios from "axios";

import oops from "../images/oops.jpg";

import { PokeForm } from "../components/PokeForm";
import { ResultsCard } from "../components/ResultsCard";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

// Container to handle the search query on the PokeForm component
export const PokeSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pokeData, setPokeData] = useState();
  const [error, setError] = useState(false);

  // UseEffect to handle the API call and catch the error if there is any
  useEffect(() => {
    if (searchQuery) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${searchQuery}`
          );

          setError(false);
          setPokeData(data);
          console.log(data.types[0].type.name);
        } catch (typeError) {
          setPokeData([]);
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
          <Box
            component="img"
            sx={{
              maxWidth: "40%",
              display: "flex",
              justifyContent: "center",
              mx: "auto",
              border: "3px solid #9e2a2b",
              borderRadius: 20,
            }}
            src={oops}
          />
        </Box>
      )}
      {!error && <ResultsCard pokeData={pokeData} />}
    </Box>
  );
};
