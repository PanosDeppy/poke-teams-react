import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { MyPokeTeam } from "./pages/MyPokeTeam";

// Our AppRoutes returns the 2 routes/pages that we have "Home" and "MyPokeTeam"
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-poke-team" element={<MyPokeTeam />} />
    </Routes>
  );
};
