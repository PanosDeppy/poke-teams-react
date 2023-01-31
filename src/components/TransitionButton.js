import { useState } from "react";

import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";

const icon = (
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
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show Hidden Ability"
      />
      <Box sx={{ display: "flex" }}>
        <Fade in={checked}>{icon}</Fade>
      </Box>
    </Box>
  );
};
