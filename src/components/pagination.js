import PokeCard from "./pokecard";
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
    console.log(filterItems(items, filter));
    setItemsR(filterItems(items, filter).slice((p - 1) * l, (p - 1) * l + l));
  }, [location, filter]);

  const renderPokemons = itemsR.map((item) => {
    return <PokeCard data={item} key={item.name} />;
  });

  return (
    <div className={`${Style.pagination}`}>
      <PagNavigation
        transition={startTransition}
        filter={filter}
        setFilter={setFilter}
        pag={pag}
        limit={limit}
        itemsCount={filterItems(items, filter).length}
      />
      {isPending && <p>Updating List...</p>}
      <div className={`${Style.PokeItemsRender}`}>{renderPokemons}</div>
      <PagNavigation
        transition={startTransition}
        filter={filter}
        setFilter={setFilter}
        pag={pag}
        limit={limit}
        itemsCount={filterItems(items, filter).length}
      />
    </div>
  );
};

export default Pagination;
