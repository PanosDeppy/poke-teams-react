import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useApp } from "../../context/AppProvider";
import { TransitionButton } from "./TransitionButton";

import { useState } from "react";

// Abilities popper button in ResultsCard component
export const Abilities = () => {
  const { currentPokemon } = useApp();

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
            textTransform: "capitalize",
            border: "3px solid #9e2a2b",
            boxShadow: 20,
            borderRadius: 1,
            p: 2,
          }}
        >
          Main Abilities:
          <Grid>
            <ol className="list">
              {currentPokemon?.abilities?.slice(0, -1).map((each) => (
                <li key={each.ability.name}>{each.ability.name}</li>
              ))}
            </ol>
          </Grid>
          <TransitionButton />
        </Box>
      </Popper>
    </Box>
  );
};
