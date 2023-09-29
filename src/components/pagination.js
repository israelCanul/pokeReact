import PokeCard from "./pokecard";
import SimplePokeCard from "./simple-pokecard";
import { useSearchParams } from "react-router-dom";
import PagNavigation from "./pag-navigation";
import { useLocation } from "react-router-dom";
import { filterItems } from "../helper";

//StyleModule
import Style from "../scss/pagination.module.scss";
import { useEffect, useState, useTransition } from "react";
const Pagination = ({ items }) => {
  const location = useLocation();
  const [isPending, startTransition] = useTransition();
  let [searchParams] = useSearchParams();
  let [pag, setPag] = useState(
    searchParams.get("pag") ? parseInt(searchParams.get("pag")) : 1
  );
  let [limit, setLimit] = useState(
    searchParams.get("limit") ? parseInt(searchParams.get("limit")) : 25
  );
  let [itemsR, setItemsR] = useState([]);
  let [filter, setFilter] = useState("");

  useEffect(() => {
    let p = searchParams.get("pag") ? parseInt(searchParams.get("pag")) : 1;
    let l = searchParams.get("limit")
      ? parseInt(searchParams.get("limit"))
      : 25;
    setLimit(l);
    setPag(p);
    setItemsR(items.slice((p - 1) * l, (p - 1) * l + l));
  }, [location, filter]);

  const renderPokemons = itemsR.map((item) => {
    return <PokeCard data={item} key={item.name} />;
  });

  const resetFilter = (e) => {
    e.preventDefault();
    setFilter("");
  };

  const renderFilteredPokemons = () => {
    let fPokemons = filterItems(items, filter);
    return fPokemons.map((fP, i) => {
      return fPokemons.length < 10 ? (
        <PokeCard data={fP} key={`${fP.name}-${i}`} />
      ) : (
        <SimplePokeCard data={fP} key={`${fP.name}-${i}`} />
      );
    });
  };

  return (
    <div className={`${Style.pagination}`}>
      <PagNavigation
        transition={startTransition}
        filter={filter}
        setFilter={setFilter}
        pag={pag}
        limit={limit}
        itemsCount={items.length}
      />
      {filter !== "" && filter.length > 1 && (
        <div className={`${Style.pagination__filterWrapper}`}>
          <div className={`${Style.pagination__filterAction}`}>
            <a onClick={resetFilter} href="/" className="closeIcon"></a>
          </div>
          <div className={`${Style.pagination__filterResult}`}>
            {isPending && <p>Updating List...</p>}
            {renderFilteredPokemons()}
          </div>
        </div>
      )}
      <div className={`${Style.PokeItemsRender}`}>{renderPokemons}</div>
      <PagNavigation
        transition={startTransition}
        filter={filter}
        setFilter={setFilter}
        pag={pag}
        limit={limit}
        itemsCount={items.length}
      />
    </div>
  );
};

export default Pagination;
