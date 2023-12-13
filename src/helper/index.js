const filterItems = (items, filter) => {
  if (filter === '') return [];
  if (filter.length < 2) return [];
  return items.filter(
    (f) => filter !== '' && f.name.toLowerCase().includes(filter)
  );
};
const filterMovesItems = (items, filter) => {
  if (filter === '') return items;
  if (filter.length < 2) return items;
  return items.filter(
    (f) => filter !== '' && f?.move?.name.toLowerCase().includes(filter)
  );
};
const getName = (lista, name) => {
  let nameLanguage = lista.filter((a) => a.language.name === 'en');
  return nameLanguage.length ? nameLanguage[0].name : name;
};
const getDescription = (lista, description) => {
  let descLanguage = lista.filter((a) => a.language.name === 'en');
  return descLanguage.length ? descLanguage[0].flavor_text : description;
};
const getMoveDescription = (lista, description) => {
  let descLanguage = lista.filter((a) => a.language.name === 'en');
  return descLanguage.length ? descLanguage[0].flavor_text : description;
};

function checkApply(value) {
  return value || value === '' ? value : 'N/A';
}

export {
  filterItems,
  getName,
  getDescription,
  getMoveDescription,
  checkApply,
  filterMovesItems,
};
