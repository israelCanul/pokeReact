import { useState } from 'react';
import Search from '../../img/icons8-search.svg';
const PagMovesNavigation = ({
  itemsCount = 0,
  pag = 0,
  limit = 25,
  filter = '',
  setFilter = () => {},
  setPage = () => {},
  transition = () => {},
}) => {
  const pageChange = (newPage) => {
    // console.log(newPage);
    setPage(newPage);
  };

  const updateFilter = (e) => {
    transition(() => {
      setFilter(e.target.value.toLowerCase());
    });
  };

  const renderButtons = () => {
    let maxPage = parseInt(itemsCount / limit);
    // console.log('count : ' + itemsCount, ' and ' + (itemsCount % limit));
    // console.log(limit);
    if (itemsCount % limit > 0) {
      maxPage += 1;
    }
    let btns = [];
    //agregamos el boton para ir 5 paginas atras
    if (pag - 5 > 0) {
      btns.push(
        <div
          key={`btnBack-${pag - 5}`}
          onClick={(e) => pageChange(pag - 5)}
          className={`navPagination__pag `}
        >{`<<`}</div>
      );
    }

    for (let i = pag - 2; i <= pag + 2; i++) {
      //   console.log(i, maxPage);
      let btn =
        i > 0 && i <= maxPage ? (
          <div
            key={i}
            onClick={(e) => pageChange(i)}
            className={`navPagination__pag ${
              i === pag ? 'navPagination__pag--active' : ''
            }`}
          >
            {i}
          </div>
        ) : (
          ''
        );
      btns.push(btn);
    }
    if (pag + 5 <= maxPage + 1) {
      btns.push(
        <div
          key={`btnForward-${pag - 5}`}
          onClick={(e) => pageChange(pag + 5)}
          className={`navPagination__pag `}
        >{`>>`}</div>
      );
    }
    return btns;
  };

  return (
    <div className='navPagination'>
      <div className='navPagination__wrappercontrol'>
        <input
          type='text'
          name=''
          className='navPagination__filter'
          value={filter}
          onChange={updateFilter}
        />
        <img
          width={30}
          height={30}
          src={Search}
          className='navPagination__filterIcon'
          alt='Search Icon'
        />
      </div>

      <div className={`navPagination__pages`}>{renderButtons()}</div>
    </div>
  );
};

export default PagMovesNavigation;
