const filterItems = (items, filter) => {
  if (filter === "") return items;
  return items.filter((f) => filter !== "" && f.name.includes(filter));
};
export { filterItems };
