import { usePokemonMove } from "../hooks/pokemon";
import { getName, getMoveDescription, checkApply } from "../helper";
import Style from "../scss/move.module.scss";

const MoveDetail = ({ moveUrl }) => {
  const move = usePokemonMove(moveUrl?.move?.url);
  if (!move) {
    return "..Loading";
  }

  return (
    <div className={`${Style.move}`}>
      <div className={`${Style.move__name}`}>
        {getName(move?.names, move?.name)}
      </div>
      <div className={`${Style.move__wraperDesc}`}>
        <div className={`${Style.move__type}`}>{move?.type.name}</div>
        <div className={`${Style.move__desc}`}>
          {getMoveDescription(move?.flavor_text_entries, "")}
        </div>
        <div className={`${Style.move__stats}`}>
          <div className={`${Style.move__stat}`}>
            <small>Accuracy: {checkApply(move?.accuracy)}</small>
          </div>
          <div className={`${Style.move__stat}`}>
            <small>Power: {checkApply(move?.power)}</small>
          </div>
          <div className={`${Style.move__stat}`}>
            <small>Damage Class: {checkApply(move?.damage_class?.name)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoveDetail;
