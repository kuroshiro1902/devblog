import {
  BlockItem,
  Heading,
  Pagination,
  PostCard,
  PostItem,
  PrimaryButton,
  RecentBlock,
  Slider,
  TopicCard,
} from '../../components';
import s from './Home.module.scss';
function Home() {
  return (
    <div className={s.home}>
      <div>
        <Heading title="Hot topics" description={`Don't miss out on the latest news`} />
        <div className={s.slider}>
          <Slider>
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
          </Slider>
        </div>
      </div>
      <div>
        <Heading title={`Editor's picked`} description="Featured and highly rated articles" />
        <div className={s.postCard}>
          <div className={s.postCardsCtn}>
            <PostCard />
            <PostCard />
          </div>
          <div className={s.postCardsCtn}>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div className={s.showMoreBtn}>
            <PrimaryButton rounded> Show more posts</PrimaryButton>
          </div>
        </div>
      </div>
      <div className={s.posts}>
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
        <div>
          <div style={{ marginBottom: '1.75rem' }}>
            <RecentBlock title="Recent posts">
              <BlockItem />
              <BlockItem />
              <BlockItem />
              <BlockItem />
            </RecentBlock>
          </div>
          <div>
            <RecentBlock title="Recent comments">
              <BlockItem author={'author'} />
              <BlockItem author={'author'} />
              <BlockItem author={'author'} />
            </RecentBlock>
          </div>
        </div>
      </div>
      <div className={s.pagination}>
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
