import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";

// Stats modal in ResultsCard component to present the Pokemon's stats
export const StatsModal = ({ pokeData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button
        sx={{
          color: "white",
          bgcolor: "#9e2a2b",
          "&:hover": {
            color: "#540b0eff",
            bgcolor: "#e09f3eff",
          },
        }}
        onClick={handleOpen}
      >
        Stats
      </Button>
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
            width: 300,
            color: "#9e2a2b",
            bgcolor: "#fff3b0",
            textTransform: "capitalize",
            border: "3px solid #9e2a2b",
            borderRadius: 1,
            boxShadow: 20,
            p: 2,
          }}
        >
          <Grid>
            <ol>
              {pokeData?.stats.map((each) => (
                <li>
                  {each.stat.name} = {each.base_stat}
                </li>
              ))}
            </ol>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};
