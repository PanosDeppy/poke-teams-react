import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { MyPokeTeam } from "./pages/MyPokeTeam";
import { AboutMe } from "./pages/AboutMe";

// Our AppRoutes returns the 3 routes/pages that we have "Home", "MyPokeTeam and "AboutMe".
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-poke-team" element={<MyPokeTeam />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  );
};
