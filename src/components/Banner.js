import Box from "@mui/material/Box";

export const Banner = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        fontSize: "1.7rem",
        color: "#9e2a2b",
        my: 1,
      }}
    >
      {title}
    </Box>
  );
};
