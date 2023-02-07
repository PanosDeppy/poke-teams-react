import { useState } from "react";

import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useApp } from "../../context/AppProvider";

export const TransitionButton = () => {
  const { currentPokemon } = useApp();

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show Hidden Ability"
      />
      <Box sx={{ display: "flex" }}>
        <Fade in={checked}>
          <Paper sx={{ m: 1 }} elevation={4}>
            <Box
              sx={{
                color: "#9e2a2b",
                bgcolor: "#fff3b0",
                border: "3px solid #9e2a2b",
                boxShadow: 20,
                pr: 2,
              }}
            >
              <ul className="list">
                {currentPokemon?.abilities?.slice(-1).map((each) => (
                  <li key={each.ability.name}>{each.ability.name}</li>
                ))}
              </ul>
            </Box>
          </Paper>
        </Fade>
      </Box>
    </Box>
  );
};
