import {
  SliderSection,
  EditorChoicePostsSection,
  NewPostsSection,
  NewCommentsSection,
  HotPostsSection,
} from './Sections';
import { Pagination } from '../../components';
import s from './Home.module.scss';
function Home() {
  return (
    <div className={s.home}>
      <SliderSection />
      <EditorChoicePostsSection />
      <div className={s.posts}>
        <HotPostsSection />
        <div>
          <NewPostsSection />
          <NewCommentsSection />
        </div>
      </div>
      <div className={s.pagination}>
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
