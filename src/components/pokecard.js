import { usePokemonDetails } from "../hooks/pokemon";
//Style
import CardStyle from "../scss/pokecard.module.scss";
const PokeCard = ({ data }) => {
  const details = usePokemonDetails(data.url);

  if (!details)
    return (
      <div className={`${CardStyle.Pokecard} ${CardStyle.Pokecard__squeleton}`}>
        <div className={CardStyle.Pokecard__wrapper}></div>
      </div>
    );

  // const stats = details?.stats.forEach((stat) => {
  //   return (
  //     <div className={CardStyle.stat}>
  //       {stat.stat.name}: {stat.base_stat}
  //     </div>
  //   );
  // });
  return (
    <div className={CardStyle.Pokecard}>
      <div className={CardStyle.Pokecard__wrapper}>
        <div className={CardStyle.Pokecard__img}>
          <img
            src={details?.sprites?.front_default}
            alt="Pokemon Image"
            className={CardStyle.Pokecard__image}
          />
        </div>
        <div className={`m_df-cc ${CardStyle.Pokecard__name}`}>
          <p className={`m_df-cc ${CardStyle.Pokecard__textName}`}>
            {data.name}
          </p>
        </div>
        {/* <div className={CardStyle.Pokecard__stats}>{stats}</div> */}
      </div>
    </div>
  );
};

export default PokeCard;
