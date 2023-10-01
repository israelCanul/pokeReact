import Pagination from "../components/pagination";
import { MyContext } from "../context/PokemonsContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PokemonDetail from "./pokemon-detail";

const PokemonHome = () => {
  const pokeContext = useContext(MyContext);

  const renderPag = () => {
    if (pokeContext && pokeContext.pokemons) {
      return <Pagination items={pokeContext.pokemons} />;
    }
  };

  return (
    <div className="home">
      <div className="PokelistSection">{renderPag()}</div>
    </div>
  );
};

export default PokemonHome;
