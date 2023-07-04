import { BlockItem, PostCard, PostItem, PrimaryButton, RecentBlock, Slider, TopicCard } from '../../components';
import s from './Home.module.scss';
function Home() {
    return (
        <div className={s.home}>
            <div style={{ height: '180px' }}>
                <Slider>
                    <TopicCard />
                    <TopicCard />
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
            <div style={{ display: 'flex', gap: '1rem' }}>
                <PostCard />
                <PostCard />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div>
                <PrimaryButton rounded>Show more posts</PrimaryButton>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40%' }}>
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                </div>
                <div>
                    <RecentBlock title="lkasjdlkaj">
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                    </RecentBlock>
                </div>
            </div>
            <div>
                <PrimaryButton circle>1</PrimaryButton>
                <PrimaryButton circle>1</PrimaryButton>
                <PrimaryButton circle>1</PrimaryButton>
                <PrimaryButton circle>1</PrimaryButton>
                <PrimaryButton circle>1</PrimaryButton>
            </div>
        </div>
    );
}

export default Home;
