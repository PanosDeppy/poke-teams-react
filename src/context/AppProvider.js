// import { useContext, createContext, useState } from "react";

// import { getDataFromLS } from "../utils/getDataFromLS";

// // the createContext function creates the context
// const AppContext = createContext();

// // we export a custom hook to access our values in the context
// export const useApp = () => useContext(AppContext);

// // we create the Porvider component
// export const AppProvider = ({ children }) => {
//   const [pokemonToAdd, setPokemonToAdd] = useState(getDataFromLS("", []));
//   // we create an object to store the values we want to access from the context
//   const value = { pokemonToAdd, setPokemonToAdd };

//   // we pass the value object to the Provider and spread the child nodes within the Provider
//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };
