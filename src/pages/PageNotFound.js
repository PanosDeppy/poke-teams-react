import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import notfound from "../images/not-found.gif";

export const PageNotFound = () => {
  return (
    <Stack spacing={0.5}>
      <Box
        sx={{
          maxWidth: "80%",
          display: "flex",
          justifyContent: "center",
          mt: 20,
          mx: "auto",
          border: "6px solid #9e2a2b",
          borderRadius: 20,
        }}
        component="img"
        src={notfound}
      />
    </Stack>
  );
};
