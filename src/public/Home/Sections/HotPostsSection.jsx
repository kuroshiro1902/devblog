import { Heading, PostItem } from '../../../components';
import useGetData from '../../../hooks/useGetData';
import host from '../../../host.config';
function HotPostsSection() {
  const queryResult = useGetData(
    ['hot posts'],
    { url: `${host}/posts/hot-posts`, body: { amount: 5 } },
    { staleTime: 2 * 60 * 1000, cacheTime: 10 * 60 * 1000 },
  );
  const data = queryResult.data ?? [null, null, null, null, null];
  return (
    <div>
      <Heading title="Popular posts" description={`Don't miss the lastest trend`} />
      <div>
        {data.map((post, i) => (
          <PostItem key={i} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HotPostsSection;
