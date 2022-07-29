import React from 'react';
import { Pages } from '../../models';
import './paginator.css';

const getRange = (start: number, end: number): number[] => {
  return Array(end - start + 1)
    .fill(0)
    .map((_, idx) => start + idx);
};

export const Paginator = ({
  page,
  toPage,
  max = 5,
}: {
  page: Pages;
  toPage: (p: number) => void;
  max?: number;
}) => {
  const { current, total, perPage } = page;
  const length = Math.ceil(total / perPage);
  const maxLength = length > max ? max : length;
  const range = [
    current >= maxLength ? current - maxLength + 1 : 1,
    current >= maxLength ? current : maxLength,
  ];
  const pages = getRange(range[0], range[1]);
  const prevHandler = () => {
    toPage(page.current - 1);
  };
  const nextHandler = () => {
    toPage(page.current + 1);
  };

  return (
    <div className='pages'>
      {page.current > 1 ? (
        <div className='page page__prev' onClick={prevHandler}>
          &laquo; Prev
        </div>
      ) : (
        ''
      )}
      {pages.map((i) => {
        const className = `page${i === current ? ' page__current' : ''}`;
        return (
          <div className={className} key={i}>
            {i}
          </div>
        );
      })}
      {page.current < length ? (
        <div className='page page__next' onClick={nextHandler}>
          Next &raquo;
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
