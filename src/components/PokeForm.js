import { useState } from "react";

import Form from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";

export const PokeForm = () => {
  const [pokeName, setPokeName] = useState("");

  const handleOnChange = (event) => {
    setPokeName(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        input: { color: "#9e2a2b" },
        my: 3,
      }}
      onSubmit={handleOnSubmit}
    >
      <FormControl sx={{ m: 1, width: "80%" }}>
        <OutlinedInput
          type="text"
          placeholder="Please type your Pokemon's name"
          onChange={handleOnChange}
          endAdornment={
            <InputAdornment position="start">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Form>
  );
};
