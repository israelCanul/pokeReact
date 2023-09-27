import Pagination from "../components/pagination";
import { MyContext } from "../context/PokemonsContext";
import { useContext } from "react";

const PokemonDetail = () => {
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

export default PokemonDetail;
