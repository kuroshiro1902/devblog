import { Author } from '../../../components';
import s from '../PostDetail.module.scss';

function Heading({ title, author, createdAt }) {
  return (
    <div className={s.heading}>
      <div className={s.leftHeading}>
        <h1 className={s.title}>{title}</h1>
        <Author author={author} time={createdAt} />
      </div>
      <div className={s.rightHeading}>Share to fb</div>
    </div>
  );
}

export default Heading;
