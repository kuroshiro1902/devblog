import Author from '../Author/Author';
import s from './Comment.module.scss';
const data = {
    id: 1,
    author: {
        id: 1,
        name: 'Author',
    },
    content: 'This is a comment.',
    time: new Date(),
    replies: [2, 3, 4],
};
function Comment({ children }) {
    return (
        <div className={s.comment}>
            <Author />
            <p>{data.content}</p>
        </div>
    );
}

export default Comment;
