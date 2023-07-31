import { useLocation } from 'react-router-dom';
import { Heading, Pagination, PostItem } from '../../components';
import s from './Posts.module.scss';
import SearchForm from './SearchForm';
import useGetData from '../../hooks/useGetData';
import host from '../../host.config';
function Posts() {
  const location = useLocation();
  const searchValue =
    new URLSearchParams(location.search).get('search')?.toString().trim().toLowerCase().replace(/ +/g, ' ') ?? '';
  const { data: posts, isLoading } = useGetData(['search', searchValue], `${host}/posts?search=${searchValue}`, {
    staleTime: 1 * 60 * 1000, //1 min
  });
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
        <Pagination />
      </div>
    </div>
  );
}

export default Posts;
