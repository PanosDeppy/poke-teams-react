import * as Yup from "yup";
import { useFormik } from "formik";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

// SearchForm to search the Pokemon's name and form validation with formik and yup
export const PokeForm = ({ setSearchQuery }) => {
  const onSubmit = ({ pokeName }) => {
    setSearchQuery(pokeName);
  };

  const initialValues = {
    pokeName: "",
  };

  const validationSchema = Yup.object({
    pokeName: Yup.string()
      .required("Please enter a Pokemon's name.")
      .min(2, "Please enter a Pokemon of minimum 2 characters"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        input: { color: "#9e2a2b" },
        mt: 3,
        mb: 5,
      }}
      onSubmit={formik.handleSubmit}
      component="form"
    >
      <FormControl
        sx={{
          m: 1,
          width: "80%",
          border: "3px solid #9e2a2b",
          borderRadius: 2,
          bgcolor: "white",
        }}
      >
        <TextField
          name="pokeName"
          type="text"
          placeholder="Please type your Pokemon's name"
          value={formik.values.pokeName}
          onChange={formik.handleChange}
          error={formik.touched.pokeName && Boolean(formik.errors.pokeName)}
          helperText={formik.touched.pokeName && formik.errors.pokeName}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </Box>
  );
};
