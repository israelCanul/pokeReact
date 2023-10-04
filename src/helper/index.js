const filterItems = (items, filter) => {
  if (filter === "") return [];
  if (filter.length < 2) return [];
  return items.filter(
    (f) => filter !== "" && f.name.toLowerCase().includes(filter)
  );
};
const getName = (lista, name) => {
  let nameLanguage = lista.filter((a) => a.language.name === "es");
  return nameLanguage.length ? nameLanguage[0].name : name;
};
const getDescription = (lista, description) => {
  let descLanguage = lista.filter((a) => a.language.name === "es");
  return descLanguage.length ? descLanguage[0].flavor_text : description;
};
const getMoveDescription = (lista, description) => {
  let descLanguage = lista.filter((a) => a.language.name === "es");
  return descLanguage.length ? descLanguage[0].flavor_text : description;
};

function checkApply(value) {
  return value || value === "" ? value : "N/A";
}

export { filterItems, getName, getDescription, getMoveDescription, checkApply };
