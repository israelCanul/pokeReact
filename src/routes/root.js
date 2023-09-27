import { Outlet } from "react-router-dom";
import Logo from "../img/pokereact-logo.png";
import { getListCallback } from "../api/pokemon";

import { MyContext } from "../context/PokemonsContext";
import { useContext, useEffect, useState } from "react";

export default function Root() {
  const userContext = useContext(MyContext);
  const [items, setItems] = useState(null);
  useEffect(() => {
    if (!items) {
      getListCallback((res, err) => {
        if (err) setItems([]);
        else {
          setItems(res.results);
          userContext.setPokemons(res.results);
        }
      });
    }
  }, []);
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="header__logo">
            <img
              width={300}
              height={80}
              src={Logo}
              alt=""
              className="header__img"
            />
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
