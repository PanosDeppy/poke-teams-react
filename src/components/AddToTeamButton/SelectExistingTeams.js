import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Select dropdown to choose an existing team to add your Pokemon to.
export const SelectExistingTeams = () => {
  const [team, setTeam] = useState("");

  const handleChange = (event) => {
    setTeam(event.target.value);
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
        // id="demo-select-small"
      >
        {/* {" "} */}
        EXISTING TEAMS
      </InputLabel>
      <Select
        // labelId="demo-select-small"
        // id="demo-select-small"
        // value={age}
        // label="Age"
        onChange={handleChange}
      >
        <MenuItem
          sx={{
            color: "#335c67ff",
            bgcolor: "white",
            "&:hover": {
              color: "white",
              bgcolor: "#335c67ff",
            },
          }}
          value=""
        >
          <em>None</em>
        </MenuItem>
        <MenuItem
          sx={{
            color: "#335c67ff",
            bgcolor: "white",
            "&:hover": {
              color: "white",
              bgcolor: "#335c67ff",
            },
          }}
          value={10}
        >
          Team 1
        </MenuItem>
        <MenuItem
          sx={{
            color: "#335c67ff",
            bgcolor: "white",
            "&:hover": {
              color: "white",
              bgcolor: "#335c67ff",
            },
          }}
          value={20}
        >
          Team 2
        </MenuItem>
        <MenuItem
          sx={{
            color: "#335c67ff",
            bgcolor: "white",
            "&:hover": {
              color: "white",
              bgcolor: "#335c67ff",
            },
          }}
          value={30}
        >
          Team 3
        </MenuItem>
      </Select>
    </FormControl>
  );
};
