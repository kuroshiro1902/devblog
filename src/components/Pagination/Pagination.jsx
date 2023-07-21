import { useState } from 'react';
import s from './Pagination.module.scss';
import clsx from 'clsx';
import { useMemo } from 'react';
const Pagination = ({
  totalPages = 10,
  onPageChange = (i) => {
    console.log(i);
  },
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const pageIndexs = useMemo(() => Array.from({ length: totalPages }, (_, index) => index + 1), []);
  return (
    <div className={s.pagination}>
      {pageIndexs.map((pageIndex) => (
        <button
          key={pageIndex}
          type="button"
          className={clsx('move-up', { [s.current]: pageIndex === currentIndex })}
          title={`Page ${pageIndex}`}
          onClick={() => {
            onPageChange(pageIndex);
            setCurrentIndex(pageIndex);
          }}
          disabled={pageIndex === currentIndex}
        >
          {pageIndex}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
