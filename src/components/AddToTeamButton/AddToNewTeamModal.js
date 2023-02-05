import { useState } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Modal to confirm to the user that they successfully added a Pokemon to their chosen team

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "6px solid #335c67ff",
  borderRadius: 1,
  p: 4,
};

export const AddToNewTeamModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
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
        onClick={handleOpen}
      >
        Submit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              textAlign: "center",
              color: "#335c67ff",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Your Pokemon was successfully added to your new team
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};
