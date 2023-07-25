import Author from '../Author/Author';
import s from './Comment.module.scss';
import { findCommentById } from '../../alternates/comments';
import clsx from 'clsx';
function ReplyComment({ data }) {
  const hasReplies = data.replyIds[0];
  return (
    <div className={s.replyComment}>
      <div className={clsx(s.main, { [s.continueLine]: hasReplies })}>
        <div className={s.author}>
          <Author />
        </div>
        <div className={s.content}>{data._id}</div>
      </div>
      <ul>
        {data.replyIds.map((replyId, index) => {
          const replyComment = findCommentById(replyId);
          if (replyComment)
            return (
              <li key={index}>
                <ReplyComment data={replyComment} />{' '}
              </li>
            );
        })}
      </ul>
    </div>
  );
}

export default ReplyComment;
