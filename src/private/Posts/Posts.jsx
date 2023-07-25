import React from 'react';
import BlockItem from '../../components/BlockItem/BlockItem';
import s from './Posts.module.scss';
export default function Posts({ heading }) {
  return (
    <div className={s.post}>
      <h2 className={s.heading}>{heading}</h2>
      <BlockItem />
      <BlockItem />
      <BlockItem />
      <BlockItem />
      <BlockItem />
    </div>
  );
}
