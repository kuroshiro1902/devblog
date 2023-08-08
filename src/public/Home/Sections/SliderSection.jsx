import { Slider, TopicCard, Heading } from '../../../components';
import s from '../Home.module.scss';
function SliderSection() {
  return (
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
  );
}

export default SliderSection;
