import { useParams } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

function PostDetail() {
    const { slug } = useParams();
    return (
        <div>
            {slug}
            <BreadCrumb />
        </div>
    );
}

export default PostDetail;
