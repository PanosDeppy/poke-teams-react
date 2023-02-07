import { useState } from "react";

import { SelectExistingTeams } from "./SelectExistingTeams";
import { NewTeamForm } from "./NewTeamForm";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const dialogButtonStyling = {
  display: "flex",
  justifyContent: "center",
  mx: "auto",
  width: "auto",
  color: "white",
  bgcolor: "#9e2a2b",
  "&:hover": {
    color: "white",
    bgcolor: "#335c67ff",
  },
  borderRadius: 1,
  p: 1,
};

// Button to chose if you want to place the Pokemon either in a new team or an existing one.
export const AddToTeamButton = ({ pokeData }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
          mb: 3,
          mx: "auto",
          width: "35%",
          color: "#335c67ff",
          bgcolor: "white",
          border: "solid #335c67ff",
          "&:hover": {
            color: "white",
            bgcolor: "#335c67ff",
          },
        }}
        size="small"
        onClick={handleClickOpen}
      >
        Add to your team
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            color: "#9e2a2b",
            bgcolor: "#fff3b0",
            border: "3px solid #9e2a2b",
            borderRadius: 1,
            p: 2,
          }}
        >
          <DialogTitle id="alert-dialog-title">
            "Which team do you want to add your pokemon to?"
          </DialogTitle>
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Stack>
              <NewTeamForm
                dialogButtonStyling={dialogButtonStyling}
                pokeData={pokeData}
              />
              <SelectExistingTeams />
            </Stack>
          </DialogActions>
        </Box>
      </Dialog>
    </Container>
  );
};
