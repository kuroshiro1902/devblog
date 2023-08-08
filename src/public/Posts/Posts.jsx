import { useEffect, useState } from 'react';
import { Heading, Pagination, PostItem } from '../../components';
import s from './Posts.module.scss';
import SearchForm from './SearchForm';
function Posts() {
  console.log('render');
  return (
    <div className={s.posts}>
      <Heading title="Posts" description="Search for: " style={{ marginBottom: '1rem' }} />
      <SearchForm />
      <ul className={s.searchList}>
        <li>
          <PostItem height={'160px'} searchItem />
        </li>
      </ul>
      <div className={s.pagination}>
        <Pagination />
      </div>
    </div>
  );
}

export default Posts;
