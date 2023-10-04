import { useEffect, useState } from "react";
import { callbackUrlByLink } from "../api/pokemon";

const usePokemonDetails = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data === null) {
      callbackUrlByLink(url, (res, err) => {
        if (err) {
          setData(false);
          return;
        } else {
          setData(res);
          return;
        }
      });
    }
    return () => {
      return null;
    };
  }, [data, url]);
  return data;
};

const usePokemonAbility = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data === null) {
      callbackUrlByLink(url, (res, err) => {
        if (err) {
          setData(false);
          return;
        } else {
          setData(res);
          return;
        }
      });
    }
    return () => {
      return null;
    };
  }, [data, url]);
  return data;
};
const usePokemonMove = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data === null) {
      callbackUrlByLink(url, (res, err) => {
        if (err) {
          setData(false);
          return;
        } else {
          setData(res);
          return;
        }
      });
    }
    return () => {
      return null;
    };
  }, [data, url]);
  return data;
};

export { usePokemonDetails, usePokemonAbility, usePokemonMove };
