import { useState } from "react";

import { AddToTeamModal } from "./AddToTeamModal";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  textAlign: "center",
  color: "#335c67ff",
  bgcolor: "white",
  border: "5px solid #335c67ff",
  borderRadius: 1,
  p: 4,
};

// Button and form to add a new team.

export const NewTeamForm = ({ dialogButtonStyling }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={dialogButtonStyling} onClick={handleOpen}>
        New Team
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter the name of your team
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="filled-required"
              label="Required"
              variant="filled"
            />
            <Button
              sx={{
                display: "flex",
                justifyContent: "center",
                mx: "auto",
                textAlign: "center",
                color: "#335c67ff",
                bgcolor: "white",
                "&:hover": {
                  color: "white",
                  bgcolor: "#335c67ff",
                },
                border: "3px solid #335c67ff",
                borderRadius: 1,
                mt: 1,
              }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
