import { useState } from "react";

import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useApp } from "../context/AppProvider";

// Type popover button in ResultsCard component
export const Type = () => {
  const { currentPokemon } = useApp();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box>
      <Button
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
        TYPE
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Grid
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
          <ul className="list">
            {currentPokemon?.types.map((each) => (
              <li key={each.type.name}>{each.type.name}</li>
            ))}
          </ul>
        </Grid>
      </Popover>
    </Box>
  );
};
