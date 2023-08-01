import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Pagination.module.scss';
import clsx from 'clsx';

const Pagination = ({ totalPages = 10, currentPage = 1 }) => {
  const pageIndexs = Array.from({ length: totalPages }, (_, index) => index + 1);
  const navigate = useNavigate();
  //
  const params = new URLSearchParams(location.search.trim());
  const handlePageClick = (pageIndex) => {
    params.set('page', +pageIndex);
    navigate(`?${params.toString()}`);
  };
  return (
    <div className={s.pagination}>
      {pageIndexs.map((pageIndex) => (
        <button
          key={pageIndex}
          type="button"
          className={clsx('move-up', { [s.current]: pageIndex === +currentPage })}
          title={`Page ${pageIndex}`}
          onClick={() => handlePageClick(pageIndex)}
          disabled={pageIndex === +currentPage}
        >
          {pageIndex}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
