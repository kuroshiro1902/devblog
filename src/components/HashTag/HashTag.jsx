import clsx from 'clsx';
import { Link } from 'react-router-dom';
function HashTag({ children }) {
  return (
    <Link to={children !== 'loading' ? `/tag/${children.toLowerCase()}` : ''} className={clsx('subtext')}>
      {`#${children} `}
    </Link>
  );
}

export default HashTag;
