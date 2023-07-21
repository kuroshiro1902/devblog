import { useParams } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import s from './PostDetail.module.scss';
import g from '../../style.module.scss';
import { Author, BlockItem, RecentBlock, Comment } from '../../components';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
const _content = `<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione nisi vero
asperiores explicabo voluptatum ea nam animi, as 10 tempora et commodi a magnam cumque modi
quo amet impedit! Animi, aperiam?
</p>
<img src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/img.jpg" />
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione nisi vero
asperiores explicabo voluptatum ea nam animi, as 10 tempora et commodi a magnam cumque modi
quo amet impedit! Animi, aperiam.
</p>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione nisi vero
asperiores explicabo voluptatum ea nam animi, as 10 tempora et commodi a magnam cumque modi
quo amet impedit! Animi, aperiam.
</p>`;
import { findCommentById } from '../../alternates/comments';
const commentIds = [
  '64b8df052320b7312a9ffb75',
  '64b8dfa02320b7312a9ffb7x',
  '64b8dfa02320b7312a9ffb7x',
  '64b8dfa02320b7312a6ffb76',
  '64b8dfa02320b7312a6ffb76',
  '64b8dfa02320b7312a6ffb76',
  '64b8dfa02320b7312a6ffb76',
  '64b8dfa02320b7312a6ffb76',
  '64b8dfa02320b7312a6ffb76',
];
function PostDetail({ content = _content }) {
  const contentRef = useRef();
  const { slug } = useParams();
  useEffect(() => {
    contentRef.current.innerHTML = content;
  }, []);
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
        <div>
          <div className={clsx(g.content, s.content, 'ql-editor')} ref={contentRef}></div>
          <div>
            <h1 style={{ marginTop: '1rem' }}>Comments</h1>
            <small>Login to comment.</small>
            <section className={s.comments}>
              {commentIds.map((commentId) => (
                <Comment key={commentId} data={findCommentById(commentId)} />
              ))}
            </section>
          </div>
        </div>
        <div className={s.relatedPosts}>
          <RecentBlock title="Related posts">
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
          </RecentBlock>
        </div>
      </main>
    </div>
  );
}

export default PostDetail;
