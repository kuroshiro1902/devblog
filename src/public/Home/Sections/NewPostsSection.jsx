import { RecentBlock, BlockItem } from '../../../components';
function NewPostsSection() {
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <RecentBlock title="Recent posts">
        <BlockItem />
        <BlockItem />
        <BlockItem />
        <BlockItem />
      </RecentBlock>
    </div>
  );
}

export default NewPostsSection;
