import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { MyPokeTeam } from "./pages/MyPokeTeam";
import { AboutMe } from "./pages/AboutMe";
import { PageNotFound } from "./pages/PageNotFound";

// Our AppRoutes returns the 4 routes/pages that we have "Home", "MyPokeTeam, "AboutMe" and "PageNotFound".
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-poke-team" element={<MyPokeTeam />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
