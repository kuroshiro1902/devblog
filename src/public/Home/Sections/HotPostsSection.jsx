import { Heading, PostItem } from '../../../components';
function HotPostsSection() {
  return (
    <div>
      <Heading title="Popular posts" description={`Don't miss the lastest trend`} />
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
}

export default HotPostsSection;
