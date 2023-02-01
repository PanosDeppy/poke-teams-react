import { useState } from "react";

import { TransitionButton } from "./TransitionButton";

import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

// Abilities popper button in ResultsCard component
export const Abilities = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box>
      <Button
        type="button"
        sx={{
          bgcolor: "#9e2a2b",
          "&:hover": {
            color: "#540b0eff",
            bgcolor: "#e09f3eff",
          },
        }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Abilities
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{
            color: "#9e2a2b",
            bgcolor: "#fff3b0",
            border: "3px solid #9e2a2b",
            boxShadow: 20,
            p: 2,
          }}
        >
          Main Abilities:
          <Grid item xs={6}>
            <ol className="list">
              <li>Ability 1</li>
              <li>Ability 2</li>
            </ol>
          </Grid>
          <TransitionButton />
        </Box>
      </Popper>
    </Box>
  );
};
