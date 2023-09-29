import PokeCard from "./pokecard";
import { useSearchParams } from "react-router-dom";
import PagNavigation from "./pag-navigation";
import { useLocation } from "react-router-dom";

//StyleModule
import Style from "../scss/pagination.module.scss";
import { useEffect, useState } from "react";
const Pagination = ({ items }) => {
  const location = useLocation();
  let [searchParams] = useSearchParams();
  let [pag, setPag] = useState(
    searchParams.get("pag") ? parseInt(searchParams.get("pag")) : 1
  );
  let [limit, setLimit] = useState(
    searchParams.get("limit") ? parseInt(searchParams.get("limit")) : 25
  );
  let [itemsR, setItemsR] = useState([]);

  useEffect(() => {
    let p = searchParams.get("pag") ? parseInt(searchParams.get("pag")) : 1;
    let l = searchParams.get("limit")
      ? parseInt(searchParams.get("limit"))
      : 25;
    setLimit(l);
    setPag(p);
    setItemsR(items.slice((p - 1) * l, (p - 1) * l + l));
  }, [location]);

  const renderPokemons = itemsR.map((item) => {
    return <PokeCard data={item} key={item.name} />;
  });

  return (
    <div className={`${Style.pagination}`}>
      <PagNavigation pag={pag} limit={limit} itemsCount={items.length} />
      <div className={`${Style.PokeItemsRender}`}>{renderPokemons}</div>
      <PagNavigation pag={pag} limit={limit} itemsCount={items.length} />
    </div>
  );
};

export default Pagination;
