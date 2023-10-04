import { usePokemonAbility } from "../hooks/pokemon";
import { getName, getDescription } from "../helper";
import Style from "../scss/ability.module.scss";

const AbilitiesDetail = ({ ability }) => {
  const useAbility = usePokemonAbility(ability?.ability?.url);
  if (!useAbility) {
    return "..Loading";
  }

  return (
    <div className={`${Style.ability}`}>
      <div className={`${Style.ability__name}`}>
        {getName(useAbility?.names, useAbility?.name)}
      </div>
      <div className={`${Style.ability__description}`}>
        {getDescription(useAbility?.flavor_text_entries, "No hay descripcion")}
      </div>
    </div>
  );
};
export default AbilitiesDetail;
