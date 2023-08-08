import { Heading, PostCard, PrimaryButton } from '../../../components';
import useGetData from '../../../hooks/useGetData';
import host from '../../../host.config';
import s from '../Home.module.scss';
function EditorChoicePostsSection() {
  const queryResult = useGetData(
    ["editor's choice posts"],
    { url: `${host}/posts/editors-choice-posts`, body: { amount: 5 } },
    { staleTime: 2 * 60 * 1000, cacheTime: 10 * 60 * 1000 },
  );
  const data = queryResult.data ?? [null, null, null, null, null];
  console.log(data);
  return (
    <div>
      <Heading title={`Editors' Choice`} description="Featured and highly rated articles" />
      <div className={s.postCard}>
        <div className={s.postCardsCtn}>
          {data.slice(0, 2).map((post, i) => (
            <PostCard post={post} key={i} />
          ))}
        </div>
        <div className={s.postCardsCtn}>
          {data.slice(2, 5).map((post, i) => (
            <PostCard post={post} key={i} />
          ))}
        </div>
        <div className={s.showMoreBtn}>
          <PrimaryButton rounded> Show more posts</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default EditorChoicePostsSection;
