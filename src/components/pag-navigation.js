import { useNavigate } from "react-router-dom";
import Search from "../img/icons8-search.svg";

const PagNavigation = ({
  itemsCount = 0,
  pag = 0,
  limit = 25,
  filter = "",
  setFilter = () => {},
  transition = () => {},
}) => {
  const navigate = useNavigate();
  const limitChange = (e) => {
    navigate(`/pokeReact/?pag=${pag}&limit=${e.target.value}`);
  };
  const pageChange = (newPage) => {
    if (newPage != pag) navigate(`/pokeReact/?pag=${newPage}&limit=${limit}`);
  };

  const renderButtons = () => {
    let maxPage = parseInt(itemsCount / limit);
    let btns = [];
    //agregamos el boton para ir 5 paginas atras
    if (pag - 5 > 0) {
      btns.push(
        <div
          key={`btnBack-${pag - 5}`}
          onClick={(e) => pageChange(pag - 5)}
          className={`navPagination__pag `}
        >{`<<`}</div>
      );
    }

    for (let i = pag - 2; i <= pag + 2; i++) {
      let btn =
        i > 0 && i <= maxPage + 1 ? (
          <div
            key={i}
            onClick={(e) => pageChange(i)}
            className={`navPagination__pag ${
              i === pag ? "navPagination__pag--active" : ""
            }`}
          >
            {i}
          </div>
        ) : (
          ""
        );
      btns.push(btn);
    }
    if (pag + 5 <= maxPage + 1) {
      btns.push(
        <div
          key={`btnForward-${pag - 5}`}
          onClick={(e) => pageChange(pag + 5)}
          className={`navPagination__pag `}
        >{`>>`}</div>
      );
    }
    return btns;
  };

  const updateFilter = (e) => {
    transition(() => {
      setFilter(e.target.value);
    });
  };
  return (
    <div className="navPagination">
      <div className="navPagination__wrappercontrol">
        <input
          type="text"
          name=""
          className="navPagination__filter"
          value={filter}
          onChange={updateFilter}
        />
        <img
          width={30}
          height={30}
          src={Search}
          className="navPagination__filterIcon"
          alt="Search Icon"
        />
      </div>
      <div className="navPagination__limit">
        <select
          name="limit"
          onChange={limitChange}
          value={limit}
          className="navPagination__limitSelect"
        >
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className={`navPagination__pages`}>{renderButtons()}</div>
    </div>
  );
};

export default PagNavigation;
