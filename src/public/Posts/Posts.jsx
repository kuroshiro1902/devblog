import { PostItem } from '../../components';
import s from './Posts.module.scss';
function Posts() {
  return (
    <div className={s.posts}>
      <PostItem height={'160px'} searchItem />
    </div>
  );
}

export default Posts;
