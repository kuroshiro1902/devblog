import { useParams } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import s from './PostDetail.module.scss';
import g from '../../style.module.scss';
import { Author, PostItem, RecentBlock } from '../../components';
import clsx from 'clsx';
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
            <main className={clsx(s.main, g.flex)}>
                <div className={clsx(g.content, s.content)}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione nisi vero
                        asperiores explicabo voluptatum ea nam animi, as 10 tempora et commodi a magnam cumque modi quo
                        amet impedit! Animi, aperiam?
                    </p>
                    <img src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/img.jpg" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione nisi vero
                        asperiores explicabo voluptatum ea nam animi, as 10 tempora et commodi a magnam cumque modi quo
                        amet impedit! Animi, aperiam?
                    </p>
                </div>
                <div>
                    <RecentBlock title="Related posts">
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                    </RecentBlock>
                </div>
            </main>
        </div>
    );
}

export default PostDetail;
