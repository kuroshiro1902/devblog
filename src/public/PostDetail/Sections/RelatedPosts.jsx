import { BlockItem, RecentBlock } from '../../../components';
import s from '../PostDetail.module.scss';

function RelatedPosts() {
  return (
    <div className={s.relatedPosts}>
      <RecentBlock title="Related posts">
        <BlockItem />
        <BlockItem />
        <BlockItem />
        <BlockItem />
        <BlockItem />
      </RecentBlock>
    </div>
  );
}

export default RelatedPosts;
