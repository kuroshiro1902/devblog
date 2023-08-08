import { findCommentById } from '../../../alternates/comments';
import { Comment } from '../../../components';
import s from '../PostDetail.module.scss';

function Comments({ commentIds }) {
  commentIds = commentIds ?? ['1', '4'];
  return (
    <div>
      <h1 style={{ marginTop: '1rem' }}>Comments</h1>
      <small>Login to comment.</small>
      <section className={s.comments}>
        {commentIds.map((commentId) => (
          <Comment key={commentId} data={findCommentById(commentId)} />
        ))}
      </section>
    </div>
  );
}

export default Comments;
