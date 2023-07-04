import {
    BlockItem,
    Heading,
    PostCard,
    PostItem,
    PrimaryButton,
    RecentBlock,
    SecondaryButton,
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
                    <div>
                        <PostCard />
                        <PostCard />
                    </div>
                    <div>
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
                    <Heading title="Recent posts" description={`Don't miss the latest trends`} />
                    <div>
                        <BlockItem />
                        <BlockItem />
                        <BlockItem />
                        <BlockItem />
                        <BlockItem />
                    </div>
                </div>
                <div>
                    <RecentBlock title="Popular Posts">
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                    </RecentBlock>
                    <RecentBlock title="Popular Posts">
                        <PostItem author="Author" />
                        <PostItem author="Author" />
                        <PostItem author="Author" />
                        <PostItem author="Author" />
                        <PostItem author="Author" />
                    </RecentBlock>
                </div>
            </div>
            <div className={s.pagination}>
                <PrimaryButton circle>1</PrimaryButton>
                <SecondaryButton circle>2</SecondaryButton>
                <SecondaryButton circle>3</SecondaryButton>
                <SecondaryButton circle>4</SecondaryButton>
                <SecondaryButton circle>5</SecondaryButton>
            </div>
        </div>
    );
}

export default Home;
