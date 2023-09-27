import React, { useState } from "react";
const MyContext = React.createContext();

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState();
  return (
    <MyContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </MyContext.Provider>
  );
};

export { PokemonProvider, MyContext };
