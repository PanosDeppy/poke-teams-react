import { useContext, createContext, useState } from "react";

import { getDataFromLS } from "../utils/getDataFromLS";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [teams, setTeams] = useState(getDataFromLS("teams", []));
  const [currentPokemon, setCurrentPokemon] = useState();

  const value = { teams, setTeams, currentPokemon, setCurrentPokemon };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
