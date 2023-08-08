import { Link } from 'react-router-dom';
import s from './BreadCrumb.module.scss';
import { FiChevronRight } from 'react-icons/fi';
function BreadCrumb({ path = [{ name: 'Home', slug: '/' }], target = 'Current post' }) {
  return (
    <div className={s.breadcrumb}>
      {path.map((p, i) => (
        <div key={i} className={s.path}>
          <Link to={`${p.slug}`}>{p.name}</Link>
          <div className={s.arrow}>
            <FiChevronRight style={{ lineHeight: 'inherit' }} />
          </div>
        </div>
      ))}
      <div>{target}</div>
    </div>
  );
}

export default BreadCrumb;
