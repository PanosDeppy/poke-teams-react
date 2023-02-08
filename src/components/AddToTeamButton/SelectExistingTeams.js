import { useState } from "react";

import { useApp } from "../../context/AppProvider";
import { getDataFromLS } from "../../utils/getDataFromLS";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Select dropdown to choose an existing team to add your Pokemon to.
export const SelectExistingTeams = () => {
  const { teams, currentPokemon } = useApp();
  const [team, setTeam] = useState("");

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  const handleClick = ({ team }) => {
    const teamsFromLS = getDataFromLS("teams", []);

    // const teamToAddToIndex = teamsFromLS.findIndex((team) => {
    //   return team.name === team.name;
    // });

    // const teamToAddTo = teamsFromLS.filter((team) => team.name === team.name);

    let teamsIndex = teamsFromLS.reduce((existingTeams, team, i) => {
      if (team.name === team.name) {
        existingTeams.push(i);
        return existingTeams;
      }
    }, []);

    teamsIndex.map((i) => {
      console.log(teams[i].name);
      console.log(teamsFromLS[i].name);

      if (teams[i].name === teamsFromLS[i].name) {
        teamsFromLS[i].pokemon.push(currentPokemon);
      }
    });

    localStorage.setItem("teams", JSON.stringify(teamsFromLS));
  };
  return (
    <FormControl
      sx={{
        m: 1,
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
    >
      <InputLabel
        sx={{
          color: "white",
          fontFamily: "Roboto",
        }}
      >
        EXISTING TEAMS
      </InputLabel>
      <Select value={team} onChange={handleChange} onClick={handleClick}>
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
