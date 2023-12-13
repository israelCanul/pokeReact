import { useEffect, useState, useTransition } from 'react';
import PagNavigation from './pagMovesNavigation';
import { filterMovesItems } from '../../helper';
import Move from '../../components/move-detail';

const MovesPagination = ({ items = [] }) => {
  const [isPending, startTransition] = useTransition();
  let [itemsR, setItemsR] = useState([]);
  let [filter, setFilter] = useState('');
  let [page, setPage] = useState(1);

  useEffect(() => {
    let itemsFiltered = filterMovesItems(items, filter);
    let l = itemsFiltered.length >= 25 ? 25 : itemsFiltered.length;
    // console.log('items em total: ' + itemsFiltered.length);
    // console.log(l);
    setItemsR(itemsFiltered.slice((page - 1) * l, (page - 1) * l + l));
  }, [filter, page]);
  useEffect(() => {
    if (filter !== '') {
      setPage(1);
    }
  }, [filter]);

  let renderItemsMove = itemsR.map((move, id) => (
    <Move moveUrl={move} key={`${id}-${move?.move?.name}`} />
  ));

  return (
    <>
      <PagNavigation
        transition={startTransition}
        filter={filter}
        setPage={setPage}
        setFilter={setFilter}
        pag={page}
        limit={25}
        itemsCount={filterMovesItems(items, filter).length}
      />
      <div className='pokemonDetail__movesWrapper'>{renderItemsMove}</div>
      <PagNavigation
        transition={startTransition}
        filter={filter}
        setPage={setPage}
        setFilter={setFilter}
        pag={page}
        limit={25}
        itemsCount={filterMovesItems(items, filter).length}
      />
    </>
  );
};

export default MovesPagination;
