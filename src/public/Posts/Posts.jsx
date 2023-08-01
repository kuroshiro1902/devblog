import { useLocation } from 'react-router-dom';
import { Heading, Pagination, PostItem } from '../../components';
import s from './Posts.module.scss';
import SearchForm from './SearchForm';
import useGetData from '../../hooks/useGetData';
import host from '../../host.config';
const initData = { currentPage: 1, totalPages: 1, totalPosts: 0, posts: [] };
function Posts() {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const searchParam = urlSearchParams.get('search')?.toString().trim().toLowerCase().replace(/ +/g, ' ') ?? '';
  const _pageParam = urlSearchParams.get('page');
  const pageParam = !isNaN(_pageParam) ? (_pageParam > 0 ? _pageParam : 1) : 1;
  const { data, isLoading } = useGetData(
    ['posts', 'search=' + searchParam, 'page=' + +pageParam],
    `${host}/posts?search=${searchParam}&page=${pageParam}`,
    {
      staleTime: 1 * 60 * 1000, //1 min
    },
  );
  const { totalPages, posts } = data ?? initData;
  return (
    <div className={s.posts}>
      <Heading title="Posts" description="Search for: " style={{ marginBottom: '1rem' }} />
      <SearchForm />
      {isLoading ? (
        <h1 className={s.loading}>Loading...</h1>
      ) : posts.length > 0 ? (
        <ul className={s.searchList}>
          {posts.map((post, i) => (
            <li key={i}>
              <PostItem height={'160px'} searchItem {...post} />
            </li>
          ))}
        </ul>
      ) : (
        <h1 className={s.loading}>No post.</h1>
      )}
      <div className={s.pagination}>
        <Pagination totalPages={totalPages} currentPage={pageParam} />
      </div>
    </div>
  );
}

export default Posts;
