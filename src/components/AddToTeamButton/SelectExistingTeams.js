import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useApp } from "../../context/AppProvider";
import { getDataFromLS } from "../../utils/getDataFromLS";

export const SelectExistingTeams = ({ handleClose }) => {
  const { teams, setTeams, currentPokemon } = useApp();

  const handleChange = ({ target }) => {
    const teamName = target.value;

    const teamsFromLS = getDataFromLS("teams", []);

    const teamIndex = teamsFromLS.findIndex(
      (teamFromLS) => teamFromLS.name === teamName
    );

    const teamToEdit = teamsFromLS[teamIndex];

    teamToEdit.pokemon.push(currentPokemon);

    localStorage.setItem("teams", JSON.stringify([...teamsFromLS]));

    setTeams([...teamsFromLS]);

    handleClose();
  };

  return (
    <FormControl
      sx={{
        m: 3,
        width: 170,
        bgcolor: "#9e2a2b",
        "&:hover": {
          color: "white",
          bgcolor: "#335c67ff",
        },
        borderRadius: 1,
        fontFamily: "Roboto",
      }}
      size="small"
      variant="filled"
    >
      <InputLabel
        sx={{
          color: "white",
          fontFamily: "Roboto",
        }}
      >
        EXISTING TEAMS
      </InputLabel>
      <Select onChange={handleChange}>
        {teams.map((each) => (
          <MenuItem
            key={each.name}
            value={each.name}
            sx={{
              color: "#335c67ff",
              bgcolor: "white",
              "&:hover": {
                color: "white",
                bgcolor: "#335c67ff",
              },
            }}
          >
            {each.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
