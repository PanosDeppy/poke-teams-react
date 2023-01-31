import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";

import Form from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";

export const PokeForm = ({ setSearchQuery }) => {
  // const onSubmit = ({ pokeName }) => {
  //   setSearchQuery(pokeName);
  // };

  // const formValue = {
  //   pokeName: "",
  // };

  // const validationSchema = Yup.object({
  //   pokeName: Yup.string()
  //     .required("Please enter a Pokemon's name.")
  //     .min(3, "Please enter a Pokemon of minimum 3 characters")
  //     .max(15, "Pokemon name cannot be more that 15 characters"),
  // });

  // const onChange = {
  //   pokeName,
  // };

  // const formik = useFormik({
  //   formValue,
  //   validationSchema,
  //   onSubmit,
  //   // onChange,
  // });

  // const handleOnChange = (event) => {
  //   setPokeName(event.target.value);
  // };

  // const handleOnSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <Form
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        input: { color: "#9e2a2b" },
        mt: 3,
        mb: 5,
      }}
      // onSubmit={formik.handleSubmit}
    >
      <FormControl
        sx={{
          m: 1,
          width: "80%",
          border: "2px solid #9e2a2b",
          borderRadius: 2,
        }}
      >
        <OutlinedInput
          name="pokeName"
          type="text"
          placeholder="Please type your Pokemon's name"
          // value={formik.values.pokeName}
          // error={formik.touched.pokeName && Boolean(formik.errors.pokeName)}
          // helperText={formik.touched.pokeName && formik.errors.pokeName}
          // onChange={formik.handleChange}
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
