import React from 'react';
import st from './BlockItem.module.scss';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import HashTag from '../HashTag/HashTag';
export default function BlockItem({
    image = 'https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2-270x257.jpg',
    sticky = 'sticky',
    tagBtn = ['Healthy', 'Technology'],
    headingLink = 'Digital Design That Will Help You Start Your Business',
    title = 'The fancy moon going in little artist painting. Thirty days of lavender in the dreamy light inside. Other perfect oh plants, for and again.…',
    tags = ['Lifestyle', 'Travel', 'Lifestyle', 'Travel', 'Lifestyle', 'Travel', 'Lifestyle'],
    time = '1 min to read',
}) {
    return (
        <div className={st.blockItem}>
            <div className={`${st.blockImage}  move-up`}>
                <img className={st.blockImg} src={image} alt="" />
            </div>
            <div className={st.blockContent}>
                <div className={st.blockBadge}>
                    {sticky ? <div className={st.blockstiky}>{sticky}</div> : ''}
                    {tagBtn?.map((item, index) => (
                        // <div className={st.blockBtnTag} key={index}>
                        <SecondaryButton key={index} rounded className={st.tag}>
                            {item}
                        </SecondaryButton>
                        // </div>
                    ))}
                </div>
                <a className={st.heading}>{headingLink}</a>
                <p className={st.title}>{title}</p>
                <div className={st.blockBottom}>
                    <span className={`${st.hashtag} subtext`}>
                        {tags?.map((tag, index) => (
                            <HashTag key={index}>{tag}</HashTag>
                        ))}
                    </span>
                    <span className={`${st.time} subtext`}>{time}</span>
                </div>
            </div>
        </div>
    );
}
