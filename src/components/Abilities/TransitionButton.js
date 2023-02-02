import { useState } from "react";

import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";

// Transition Button to reveal and hide the hidden ability in the Abilities button
const hiddenAbilityBox = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box
      sx={{
        color: "#9e2a2b",
        bgcolor: "#fff3b0",
        border: "3px solid #9e2a2b",
        boxShadow: 20,
        p: 2,
      }}
    >
      Hidden Ability
    </Box>
  </Paper>
);

export const TransitionButton = () => {
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
        <Fade in={checked}>{hiddenAbilityBox}</Fade>
      </Box>
    </Box>
  );
};
