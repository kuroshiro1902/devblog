import clsx from 'clsx';
import s from './TopicCard.module.scss'
function TopicCard() {
    return ( 
        <a className={s.topicCard}>
            <img className={s.bgImg} src='https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/design.png' />
            <div className={s.overlay}></div>
            <div className={s.info}>
                <h4>Topic</h4>
                <p className={clsx('subtext',s.count)}>5 topics</p>
            </div>
        </a>
     );
}

export default TopicCard;