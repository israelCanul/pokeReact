const filterItems = (items, filter) => {
  if (filter === "") return [];
  if (filter.length < 2) return [];
  return items.filter(
    (f) => filter !== "" && f.name.toLowerCase().includes(filter)
  );
};
export { filterItems };
