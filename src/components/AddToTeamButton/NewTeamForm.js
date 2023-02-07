import * as Yup from "yup";
import { useFormik } from "formik";

import { useState } from "react";

import { AddToNewTeamModal } from "./AddToNewTeamModal";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  textAlign: "center",
  color: "#335c67ff",
  bgcolor: "white",
  border: "5px solid #335c67ff",
  borderRadius: 1,
  p: 4,
};

// Button and form to add a new team.
export const NewTeamForm = ({ dialogButtonStyling, pokeData }) => {
  const [newTeamName, setNewTeamName] = useState("");

  // handle submit and form validation
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = ({ teamName }) => {
    setNewTeamName(teamName);
  };

  const initialValues = {
    teamName: "",
  };

  const validationSchema = Yup.object({
    teamName: Yup.string()
      .required("Please enter a name for your team.")
      .max(20, "Please enter a name of maximum 20 characters"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  console.log(formik.values.teamName);

  return (
    <Box>
      <Button sx={dialogButtonStyling} onClick={handleOpen}>
        New Team
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter the name of your team
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              required
              id="filled-required"
              variant="filled"
              name="teamName"
              type="text"
              placeholder="Please type a name"
              value={formik.values.teamName}
              onChange={formik.handleChange}
              error={formik.touched.teamName && Boolean(formik.errors.teamName)}
              helperText={formik.touched.teamName && formik.errors.teamName}
            />
            <AddToNewTeamModal newTeamName={newTeamName} pokeData={pokeData} />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
