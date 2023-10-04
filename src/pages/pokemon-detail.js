import Style from "../scss/pokeDetail.module.scss";
import { usePokemonDetails } from "../hooks/pokemon";
import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import Abilities from "../components/abilities-detail";
import Move from "../components/move-detail";

const PokemonDetail = ({ data = {}, pokeId = 0 }) => {
  let { pokemon } = useParams();

  const details = usePokemonDetails(
    `https://pokeapi.co/api/v2/pokemon/${pokemon ? pokemon : pokeId}`
  );

  if (!details) {
    return "loading";
  }

  const renderStats = () => {
    if (details) {
      let stats = [];
      console.log(details);
      details.stats.map((st, i) => {
        stats.push(
          <div
            key={`${st.name}-${i}`}
            className={`${Style.pokeDetail__detail}`}
          >
            <label htmlFor="" className={`${Style.pokeDetail__label}`}>
              {st?.stat?.name}
            </label>
            <label htmlFor="" className={`fs--l ${Style.pokeDetail__value}`}>
              {st.base_stat}
            </label>
          </div>
        );
      });
      return stats;
    }
    return [];
  };
  const renderAbilities = () => {
    let abilitiesPokemon = [];
    if (details) {
      details.abilities.map((ability, id) => {
        abilitiesPokemon.push(
          <Abilities
            ability={ability}
            key={`${id}-${ability?.ability?.name}`}
          />
        );
      });
    }
    return abilitiesPokemon;
  };

  const renderMoves = () => {
    let movesPokemon = [];
    if (details) {
      details.moves.map((move, id) => {
        console.log(move);
        movesPokemon.push(
          <Move moveUrl={move} key={`${id}-${move?.move?.name}`} />
        );
      });
    }
    return movesPokemon;
  };

  return (
    <div className={`${Style.pokeDetail}`}>
      <div className={`${Style.pokeDetail__wrapper}`}>
        <div className="pokemonDetail">
          <div className="pokemonDetail__desc">
            <div className={`${Style.pokeDetail__detail}`}>
              <label
                htmlFor=""
                className={`fs--l tt__capitalize ff--pokemon ${Style.pokeDetail__value}`}
              >
                {details.name}
              </label>
            </div>
            <div className={`${Style.pokeDetail__detail}`}>
              <label htmlFor="" className={`${Style.pokeDetail__label}`}>
                Peso
              </label>
              <label htmlFor="" className={`fs--l ${Style.pokeDetail__value}`}>
                {details.weight}
              </label>
            </div>
            {renderStats()}
          </div>
          <div className="pokemonDetail__image">
            <img
              className="pokemonDetail__img"
              src={details?.sprites?.other?.["official-artwork"]?.front_default}
              alt="Pokemon Image"
            />
          </div>
          <div className="pokemonDetail__abilities">
            <p className="fs--l">Abilities</p>
            {renderAbilities()}
          </div>
          <div className="pokemonDetail__moves">
            <p className="fs--l">Moves</p>
            <div class="pokemonDetail__movesWrapper">{renderMoves()}</div>
          </div>
          <div className="pokemonDetail__locations">d</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
