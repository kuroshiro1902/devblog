import st from './PostItem.module.scss';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import formatISODateToDate from '../../utils/formatISODateToDate';
export default function PostItem({ post, searchItem }) {
  const sticky = true;
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
    <div className={clsx(st.postItem, { [st.searchItem]: searchItem })}>
      <Link to={`/posts/${post._id}`} className={`${st.postImage}  move-up`}>
        <img className={st.postImg} src={post.thumbnailUrl} alt="" />
      </Link>
      <div className={st.postContent}>
        <div className={st.postBadge}>
          {sticky ? (
            <div className={st.poststiky} title="Editors' choice">
              {<FaStar style={{ height: 20, width: 20 }} />}
            </div>
          ) : null}
          {post.categories.slice(0, 3).map((item, index) => (
            // <div className={st.postBtnTag} key={index}>
            <SecondaryButton key={index} rounded className={st.tag}>
              {item.name}
            </SecondaryButton>
            // </div>
          ))}
        </div>

        <Link to={`/posts/${post._id}`} className={st.title}>
          {post.title}
        </Link>
        <p className={st.description}>{post.description}</p>
        <div className={st.postBottom}>
          <span className={`${st.hashtag} subtext`}>
            Author: <b>{post.author?.fullname}</b>
          </span>
          <span className={`${st.time} subtext`}>
            <AiOutlineClockCircle /> {formatISODateToDate(post.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
}
