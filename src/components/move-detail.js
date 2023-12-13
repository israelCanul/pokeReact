import { usePokemonMove } from '../hooks/pokemon';
import { getName, getMoveDescription, checkApply } from '../helper';
import Style from '../scss/move.module.scss';

const MoveDetail = ({ moveUrl }) => {
  const move = usePokemonMove(moveUrl?.move?.url);
  if (!move) {
    return (
      <div className={`${Style.move}`}>
        <div className={`${Style.move__name}`}>Loading...</div>
        <div className={`${Style.move__wraperDesc}`}>
          <div className={`${Style.move__type}`}>Loading...</div>
          <div className={`${Style.move__desc}`}></div>
          <div className={`${Style.move__stats}`}>
            <div className={`${Style.move__stat}`}>
              <small>Accuracy: Loading...</small>
            </div>
            <div className={`${Style.move__stat}`}>
              <small>Power: Loading...</small>
            </div>
            <div className={`${Style.move__stat}`}>
              <small>Damage Class: Loading...</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${Style.move}`}>
      <div className={`${Style.move__name}`}>
        {getName(move?.names, move?.name)}
      </div>
      <div className={`${Style.move__wraperDesc}`}>
        <div className={`${Style.move__type}`}>{move?.type.name}</div>
        <div className={`${Style.move__desc}`}>
          {getMoveDescription(move?.flavor_text_entries, '')}
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
