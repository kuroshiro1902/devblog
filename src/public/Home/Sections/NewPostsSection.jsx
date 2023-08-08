import { RecentBlock, BlockItem } from '../../../components';
import useGetData from '../../../hooks/useGetData';
import host from '../../../host.config';
import formatISODateToDate from '../../../utils/formatISODateToDate';
function NewPostsSection() {
  const queryResult = useGetData(
    ['new posts'],
    { url: `${host}/posts/new-posts`, body: { amount: 5 } },
    { staleTime: 2 * 60 * 1000, cacheTime: 10 * 60 * 1000 },
  );
  const data = queryResult.data ?? [null, null, null, null];
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <RecentBlock title="Recent posts">
        {data.map((post, i) => (
          <BlockItem
            key={i}
            text={post?.title}
            image={post?.thumbnailUrl}
            date={formatISODateToDate(post?.createdAt)}
          />
        ))}
      </RecentBlock>
    </div>
  );
}

export default NewPostsSection;
