import { useParams } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import s from './PostDetail.module.scss';
import { Author } from '../../components';
function PostDetail() {
    const { slug } = useParams();
    return (
        <div className={s.postDetail}>
            <div className={s.breadCrumb}>
                <BreadCrumb />
            </div>
            <div className={s.heading}>
                <div className={s.leftHeading}>
                    <h1 className={s.title}>Five places must visit in turkey to relax in the winter season</h1>
                    <Author />
                </div>
                <div className={s.rightHeading}>Share to fb</div>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione nisi vero asperiores
                explicabo voluptatum ea nam animi, tempora et commodi a magnam cumque modi quo amet impedit! Animi,
                aperiam?
            </div>
        </div>
    );
}

export default PostDetail;
