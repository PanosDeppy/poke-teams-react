import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import unfortunately from "../images/unfortunately.png";
import ticking from "../images/ticking.gif";

const styleBoxes = {
  display: "flex",
  justifyContent: "center",
  mx: "auto",
  fontSize: "1.2rem",
  color: "#335c67ff",
};

export const MyPokeTeamsDefault = () => {
  return (
    <Container>
      <Box>
        <Stack spacing={0.5}>
          <Box
            sx={{
              maxWidth: "15%",
              display: "flex",
              justifyContent: "center",
              mx: "auto",
              border: "2px solid #9e2a2b",
              borderRadius: "50%",
            }}
            component="img"
            src={unfortunately}
          />
          <Box sx={styleBoxes}>Unfortunately, you have no teams yet...</Box>
          <Box sx={styleBoxes}>
            Please go to the
            <Link
              sx={{
                color: "#9e2a2b",
                "&:hover": {
                  color: "#e09f3eff",
                },
              }}
              href="/"
              underline="always"
              rel="noreferrer"
              paddingLeft={2}
            >
              home - page
            </Link>
          </Box>
          <Box sx={styleBoxes}>and start building your teams.</Box>
          <Box sx={styleBoxes}>The clock is ticking!!!</Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mx: "auto",
              fontSize: "1.2rem",
              mb: 5,
              color: "#335c67ff",
            }}
          >
            What are you waiting for?
          </Box>
        </Stack>
        <Box
          sx={{
            maxWidth: "30%",
            display: "flex",
            justifyContent: "center",
            mx: "auto",
            mt: 4,
            mb: 4,
            border: "4px solid #9e2a2b",
            borderRadius: 10,
          }}
          component="img"
          src={ticking}
        />
      </Box>
    </Container>
  );
};
