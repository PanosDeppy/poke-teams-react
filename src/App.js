import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";

// Our App returns the BrowserRouter that contains:
// 1 - the AppRoutes which contains our 2 pages
// 2 - and our Navbar and Banner as a constant in both of our pages.
export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <AppRoutes />
    </BrowserRouter>
  );
};
