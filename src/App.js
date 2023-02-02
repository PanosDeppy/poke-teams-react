import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import Box from "@mui/material/Box";

// Our App returns the BrowserRouter that contains:
// 1 - the AppRoutes which contains our 3 pages
// 2 - and our Navbar, Banner and Footer as a constant in all of our pages
// (Navbar with navigate and Banner with props title).
export const App = () => {
  return (
    <BrowserRouter>
      <Box
        sx={{
          minHeight: "100vh",
          overflow: "hidden",
          display: "block",
          position: "relative",
          pb: "100px",
        }}
      >
        <Navbar />
        <Banner />
        <AppRoutes />
        <Footer />
      </Box>
    </BrowserRouter>
  );
};
