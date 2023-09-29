import DefaultPokemon from "../img/default-pokemon.png";
//Style
import CardStyle from "../scss/pokecard.module.scss";
const SimplePokeCard = ({ data }) => {
  return (
    <div className={CardStyle.Pokecard}>
      <div className={CardStyle.Pokecard__wrapper}>
        <div className={CardStyle.Pokecard__img}>
          <img
            src={DefaultPokemon}
            alt="Pokemon Image"
            className={CardStyle.Pokecard__image}
          />
        </div>
        <div className={`m_df-cc ${CardStyle.Pokecard__name}`}>
          <p className={`m_df-cc ${CardStyle.Pokecard__textName}`}>
            {data.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimplePokeCard;
