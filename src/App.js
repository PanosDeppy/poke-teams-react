import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";

// Our App returns the BrowserRouter that contains:
// 1 - the AppRoutes which contains our 3 pages
// 2 - and our Navbar, Banner as a constant in all of our pages.
export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <AppRoutes />
    </BrowserRouter>
  );
};
