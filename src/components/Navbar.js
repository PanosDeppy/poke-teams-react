import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import "@fontsource/roboto/700.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [showBurger, setShowBurger] = useState(false);

  const handleOpenNavMenu = (event) => {
    setShowBurger(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setShowBurger(null);
  };

  return (
    <AppBar className="navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Navbar for small devices */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={showBurger}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(showBurger)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* Home page */}
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/");
                }}
              >
                <Typography
                  sx={{
                    color: "#9e2a2b",
                    "&:hover": {
                      color: "#335c67",
                    },
                  }}
                >
                  Home
                </Typography>
              </MenuItem>

              {/* MyPokeTeams page */}
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/my-poke-teams");
                }}
              >
                <Typography
                  sx={{
                    color: "#9e2a2b",
                    "&:hover": {
                      color: "#335c67",
                    },
                  }}
                >
                  MyPokeTeams
                </Typography>
              </MenuItem>

              {/* AboutMe page */}
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/about-me");
                }}
              >
                <Typography
                  sx={{
                    color: "#9e2a2b",
                    "&:hover": {
                      color: "#335c67",
                    },
                  }}
                >
                  AboutMe
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Navbar for large devices */}
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { md: "center" },
            }}
          >
            {/* Home page */}
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={{
                my: 2,
                display: "block",
                textTransform: "capitalize",
                fontWeight: "800",
                fontSize: "1.5rem",
                color: "#fff3b0",
                "&:hover": {
                  color: "#e09f3eff",
                },
              }}
            >
              Home
            </Button>

            {/* MyPokeTeams page */}
            <Button
              onClick={() => {
                navigate("/my-poke-teams");
              }}
              sx={{
                my: 2,
                display: "block",
                textTransform: "capitalize",
                fontWeight: "800",
                fontSize: "1.5rem",
                color: "#fff3b0",
                "&:hover": {
                  color: "#e09f3eff",
                },
              }}
            >
              MyPokeTeams
            </Button>

            {/* AboutMe page */}
            <Button
              onClick={() => {
                navigate("/about-me");
              }}
              sx={{
                my: 2,
                display: "block",
                textTransform: "capitalize",
                fontWeight: "800",
                fontSize: "1.5rem",
                color: "#fff3b0",
                "&:hover": {
                  color: "#e09f3eff",
                },
              }}
            >
              AboutMe
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
