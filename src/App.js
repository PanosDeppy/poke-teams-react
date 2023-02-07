import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";

import { AppRoutes } from "./AppRoutes";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

import Box from "@mui/material/Box";

// Our App returns:
// a) the AppProvider that is connected to the App Context
// b) the BrowserRouter (to ensure that the App is browsable) that contains:
// 1 - the AppRoutes which contains our 3 pages and renders each page based on the url
// 2 - and our Navbar, Banner and Footer as a constant in all of our pages (These 3 components are outside of the AppRoutes to be consistent in each page.)
export const App = () => {
  return (
    <AppProvider>
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
    </AppProvider>
  );
};
