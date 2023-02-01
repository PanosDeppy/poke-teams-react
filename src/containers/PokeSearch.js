import { useEffect, useState } from "react";

import axios from "axios";

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

            // {
            //   params: {
            //     keywords: searchQuery,
            //   },
            // }
          );

          setError(false);
          setPokeData(data.abilities);
          console.log(data.abilities);
        } catch (error) {
          setPokeData();
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
        <Alert
          sx={{
            width: "50%",
            color: "#9e2a2b",
            border: "3px solid #9e2a2b",
            p: 1,
            mb: 4,
            mx: "auto",
          }}
          severity="error"
        >
          Could not find results for {searchQuery}
        </Alert>
      )}
      <ResultsCard pokeData={pokeData} />
      {pokeData && <ResultsCard pokeData={pokeData} />}
    </Box>
  );
};
