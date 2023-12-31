import s from './Author.module.scss';
import formatISODateToDate from '../../utils/formatISODateToDate';
import { Link } from 'react-router-dom';
function Author({ author, time }) {
  author = author ?? {
    _id: 1,
    fullname: 'Author',
    handleName: 'author00',
    avatarUrl: 'https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/04/banner-150x150.png',
  };
  return (
    <div className={s.author}>
      <Link className={s.img} to={`/author/@${author.handleName}`}>
        <img src={author.avatarUrl} />
      </Link>
      <div className={s.main}>
        <h4>
          <Link to={`/author/@${author.handleName}`}>{author.fullname}</Link>
        </h4>
        {time && <div className="subtext">{formatISODateToDate(time)}</div>}
      </div>
    </div>
  );
}

export default Author;
