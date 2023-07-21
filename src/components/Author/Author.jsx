import s from './Author.module.scss';
import getTime from '../../utils/getTime';
function Author({ author = { id: 1, name: 'Author' }, time = new Date() }) {
  return (
    <div className={s.author}>
      <a className={s.img}>
        <img src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg" />
      </a>
      <div>
        <h4>
          <a>{author.name}</a>
        </h4>
        <div className="subtext">{getTime(time)}</div>
      </div>
    </div>
  );
}

export default Author;
