import { Banner } from "../components/Banner";

import panosImage from "../images/panos_image.jpg";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const AboutMe = () => {
  const styleLinks = {
    color: "#335c67ff",
    "&:hover": {
      color: "#9e2a2b",
    },
    fontSize: "2rem",
    mb: 2,
  };

  return (
    <Container className="about-me">
      <Banner title="About Me" />
      <Stack spacing={1}>
        <Box>
          <img
            className="panos-image"
            src={panosImage}
            alt="Panagiotis Ioannidis"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "1.2rem",
            my: 2,
          }}
        >
          Panagiotis Ioannidis
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.2rem",
          }}
        >
          Frontend Developer | Illustrator | Musician | Author
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.1rem",
          }}
        >
          Check my React Portfolio
          <Link
            sx={{
              color: "#9e2a2b",
              "&:hover": {
                color: "#e09f3eff",
              },
              pb: 2,
            }}
            href="https://panosdeppy.github.io/My-React-Portfolio/"
            underline="always"
            rel="noreferrer"
            target="_blank"
            paddingLeft={2}
          >
            here
          </Link>
        </Box>
      </Stack>
      <Stack className="about-me-bio" spacing={3}>
        <Box
          sx={{
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "1.2rem",
          }}
        >
          I am a creative individual and passionate about continuous
          self-improvement, gaining knowledge in various sectors, acquiring new
          skills, expanding my horizons, and challenging myself to become better
          at what I do every day.
        </Box>
        <Box
          sx={{
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "1.2rem",
          }}
        >
          I have completed my Frontend development Bootcamp with Purple Beard
          Training. I am confident in working with HTML, CSS, Bootstrap,
          Javascript, and React.
        </Box>
        <Box
          sx={{
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "1.2rem",
          }}
        >
          Besides coding, I have a strong background in healthcare and music
          composition and I am a published author in the sector of personal
          development and romantic relationships. In my free time, I enjoy
          playing the bass guitar, illustrating, writing, yoga, martial arts,
          travelling, and spending quality time with my wife.
        </Box>
        <Box
          sx={{
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "1.2rem",
          }}
        >
          Looking forward to working with you!
        </Box>
      </Stack>

      <Box
        className="contact-me"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.1rem",
          pt: 2,
        }}
      >
        Contact me
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 2,
        }}
      >
        <Link
          href="https://www.linkedin.com/in/panagiotis-ioannidis-panos/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon sx={styleLinks} />
        </Link>
        <Link
          href="https://github.com/PanosDeppy"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon sx={styleLinks} />
        </Link>
      </Box>
    </Container>
  );
};
