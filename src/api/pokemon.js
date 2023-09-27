const URL_POKEMON = "https://pokeapi.co/api/v2";

function getList(pag = 0, limit = 1292) {
  let pagination = pag * limit;
  return fetch(`${URL_POKEMON}/pokemon?offset=${pagination}&limit=${limit}`);
}
function getListCallback(callback = () => {}) {
  fetch(`${URL_POKEMON}/pokemon?offset=0&limit=1292`)
    .then((res) => res.json())
    .then((response) => {
      callback(response, null);
    })
    .catch((err) => callback(null, err));
}

function callbackUrlByLink(link, callback = () => {}) {
  fetch(`${link}`)
    .then((res) => res.json())
    .then((response) => {
      callback(response, null);
    })
    .catch((err) => callback(null, err));
}

export { getList, callbackUrlByLink, getListCallback };
