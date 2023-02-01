import { Box, Container } from "@mui/system";
import Link from "@mui/material/Link";

import "@fontsource/roboto/700.css";

export const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 3,
        mt: 6.5,
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: "1.2rem",
      }}
      className="footer"
    >
      <Box>
        Designed and developed by
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 1,
            color: "#fff3b0",
            "&:hover": {
              color: "#e09f3eff",
            },
          }}
          href="https://panosdeppy.github.io/My-React-Portfolio/"
          underline="always"
          rel="noreferrer"
          target="_blank"
        >
          Panagiotis Ioannidis
        </Link>
      </Box>
    </Container>
  );
};
