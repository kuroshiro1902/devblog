import { RecentBlock, BlockItem } from '../../../components';

function NewCommentsSection() {
  return (
    <div>
      <RecentBlock title="Recent comments">
        <BlockItem author={'author'} />
        <BlockItem author={'author'} />
        <BlockItem author={'author'} />
      </RecentBlock>
    </div>
  );
}

export default NewCommentsSection;
