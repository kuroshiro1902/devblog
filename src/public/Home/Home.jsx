import { BlockItem, Heading, PostCard, PostItem, PrimaryButton, RecentBlock, Slider } from '../../components';
import s from './Home.module.scss';
function Home() {
    return (
        <div className={s.home}>
            <div style={{ height: '180px' }}>
                <Slider>
                    <img
                        style={{ height: '100%' }}
                        src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/design.png"
                    />
                    <img
                        style={{ height: '100%' }}
                        src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/design.png"
                    />
                    <img
                        style={{ height: '100%' }}
                        src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/design.png"
                    />
                    <img
                        style={{ height: '100%' }}
                        src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/design.png"
                    />
                    <img
                        style={{ height: '100%' }}
                        src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/design.png"
                    />
                    <img
                        style={{ height: '100%' }}
                        src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/design.png"
                    />
                    <img
                        style={{ height: '100%' }}
                        src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/design.png"
                    />
                    <img
                        style={{ height: '100%' }}
                        src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/design.png"
                    />
                    <img
                        style={{ height: '100%' }}
                        src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/design.png"
                    />
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
                <div style={{ width: '60%' }}>
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                </div>
                <div>
                    <Heading />
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
