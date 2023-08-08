import { Link } from 'react-router-dom';
import Author from '../Author/Author';
import HashTag from '../HashTag/HashTag';
import s from './PostCard.module.scss';
import { AiOutlineClockCircle } from 'react-icons/ai';
function PostCard({ post }) {
  const readtime = 2;
  const initData = {
    _id: null,
    title: 'Loading...',
    thumbnailUrl: 'https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg',
    categories: [{ name: 'loading' }],
    description: 'Explore the world through interesting articles on technology, lifestyle, healthy and more.',
    author: {
      _id: 'Loading...',
      fullname: 'Loading...',
      handleName: 'Loading...',
      avatarUrl: 'https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/04/banner-150x150.png',
    },
    createdAt: '2023-06-01T15:30:00.000Z',
  };
  if (!post) post = initData;
  return (
    <div className={s.postCard}>
      <div className={s.imgCtn}>
        <a href="/posts/post1">
          <img src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg" />
        </a>
      </div>
      <div className={s.info + ' subtext'}>
        <div className={s.tags}>
          {post.categories.slice(0, 3).map((category, i) => (
            <HashTag key={i}>{category.name}</HashTag>
          ))}
        </div>
        <div>
          <AiOutlineClockCircle /> {`${readtime} ${readtime > 1 ? 'mins' : 'min'} to read`}{' '}
        </div>
      </div>
      <div className={s.title + ' move-up'}>
        <Link to={'posts/' + post._id}>{post.title}</Link>
      </div>
      <div className={s.foot}>
        <Author author={post.author} time={post.createdAt} />
        <div className={s.readMore + ' subtext'}>
          <a>&nbsp;Read more&nbsp;</a>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
