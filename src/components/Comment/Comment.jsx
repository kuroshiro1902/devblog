import Author from '../Author/Author';
import s from './Comment.module.scss';
import { findCommentById } from '../../alternates/comments';
import clsx from 'clsx';
function Comment({ data }) {
  const hasReplies = data.replyIds.length > 0;
  return (
    <div className={s.comment}>
      <div className={clsx(s.main, { [s.line]: hasReplies })}>
        <div className={s.author}>
          <Author />
        </div>
        <div className={s.content}>{data.content}</div>
      </div>
      <ul className={clsx(s.replies, { [s.line]: hasReplies })}>
        {data.replyIds.map((replyId, index) => {
          const replyComment = findCommentById(replyId);
          if (replyComment)
            return (
              <li key={index}>
                <Comment data={replyComment} />{' '}
              </li>
            );
        })}
      </ul>
    </div>
  );
}

export default Comment;
