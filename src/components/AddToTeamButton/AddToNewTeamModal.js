import { useState } from "react";

import { getDataFromLS } from "../../utils/getDataFromLS";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useApp } from "../../context/AppProvider";

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

const buttonStyle = {
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
};

const activeButtonStyle = {
  display: "flex",
  justifyContent: "center",
  mx: "auto",
  textAlign: "center",
  color: "white",
  bgcolor: "#335c67ff",
  "&:hover": {
    color: "white",
    bgcolor: "#335c67ff",
  },
  border: "3px solid #335c67ff",
  borderRadius: 1,
  mt: 1,
};

export const AddToNewTeamModal = ({
  newTeamName,
  currentPokemon,
  open,
  setOpenAddNewTeamModal,
}) => {
  const { teams } = useApp();

  const [savedData, setSavedData] = useState(
    teams.some((each) => each.name === newTeamName)
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!savedData) {
      const teamsFromLS = getDataFromLS("teams", []);

      const teamToAddToIndex = teamsFromLS.findIndex((team) => {
        return team.name === newTeamName;
      });

      const teamToAddTo = teamsFromLS[teamToAddToIndex];

      teamToAddTo.pokemon.push(currentPokemon);

      localStorage.setItem("teams", JSON.stringify(teamsFromLS));

      setSavedData(true);
    }
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={() => setOpenAddNewTeamModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography
            sx={{
              textAlign: "center",
              color: "#335c67ff",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Your successfully created team "{newTeamName}".
            <Button
              sx={!savedData ? buttonStyle : activeButtonStyle}
              type="submit"
            >
              {!savedData
                ? `Add ${currentPokemon?.name} to team "${newTeamName}"`
                : `${currentPokemon?.name} was added to team "${newTeamName}"`}
            </Button>
          </Typography>
          <Link
            sx={{
              color: "#9e2a2b",
              "&:hover": {
                color: "#e09f3eff",
              },
            }}
            href="/my-poke-teams"
            underline="always"
            rel="noreferrer"
            paddingLeft={2}
          >
            go to "MyPokeTeams" page
          </Link>
        </Box>
      </Modal>
    </Box>
  );
};
