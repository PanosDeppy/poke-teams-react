import * as Yup from "yup";
import { useFormik } from "formik";

import Form from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";

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
      .min(3, "Please enter a Pokemon of minimum 3 characters")
      .max(15, "Pokemon name cannot be more that 15 characters"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

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
    >
      <FormControl
        sx={{
          m: 1,
          width: "80%",
          border: "3px solid #9e2a2b",
          borderRadius: 2,
          backgroundColor: "white",
        }}
        onSubmit={formik.handleSubmit}
      >
        <OutlinedInput
          name="pokeName"
          type="text"
          placeholder="Please type your Pokemon's name"
          value={formik.values.pokeName}
          onChange={formik.handleChange}
          error={formik.touched.pokeName && Boolean(formik.errors.pokeName)}
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
