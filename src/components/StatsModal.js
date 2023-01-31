import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";

export const StatsModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button onClick={handleOpen}>Stats</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            color: "#9e2a2b",
            bgcolor: "#fff3b0d5",
            border: "2px solid #9e2a2b",
            boxShadow: 20,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            STATS
          </Typography>
          <Grid xs={6}>
            <ul className="list">
              <li>PokeStats</li>
            </ul>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};
