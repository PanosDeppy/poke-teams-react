import Box from "@mui/material/Box";

// Banner with title that changes in each page
export const Banner = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        fontSize: {
          xs: "0.8rem",
          sm: "1.3rem",
          md: "1.5rem",
          lg: "1.7rem",
        },
        color: "#9e2a2b",
        my: 1,
      }}
    >
      {title}
    </Box>
  );
};
