import loadingImg from '../../assets/image/loading.gif';
import s from './Loading.module.scss';
function Loading({ children }) {
  return (
    <div className={s.loading}>
      <div className={s.loadingImg} style={{ backgroundImage: `url('${loadingImg}')` }}></div>
      <p>{children}</p>
    </div>
  );
}

export default Loading;
