import React from 'react';
import st from './PostItem.module.scss';
import SecondaryButton from '../SecondaryButton/SecondaryButton';
import HashTag from '../HashTag/HashTag';
import { AiOutlineClockCircle } from 'react-icons/ai';
import clsx from 'clsx';
export default function PostItem({
  image = 'https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2-270x257.jpg',
  sticky = 'sticky',
  tagBtn = ['Healthy', 'Technology'],

  title = 'Digital Design That Will Help You Start Your Business',
  description = 'The fancy moon going in little artist painting. Thirty days of lavender in the dreamy light inside. Other perfect oh plants, for and again',
  tags = ['Lifestyle', 'Travel', 'Lifestyle'],
  time = '1 min to read',
  searchItem = false,
}) {
  return (
    <div className={clsx(st.postItem, { [st.searchItem]: searchItem })}>
      <a href="#" className={`${st.postImage}  move-up`}>
        <img className={st.postImg} src={image} alt="" />
      </a>
      <div className={st.postContent}>
        <div className={st.postBadge}>
          {sticky ? <div className={st.poststiky}>{sticky}</div> : ''}
          {tagBtn?.map((item, index) => (
            // <div className={st.postBtnTag} key={index}>
            <SecondaryButton key={index} rounded className={st.tag}>
              {item}
            </SecondaryButton>
            // </div>
          ))}
        </div>

        <a className={st.title}>{title}</a>
        <p className={st.description}>{description}</p>
        <div className={st.postBottom}>
          <span className={`${st.hashtag} subtext`}>
            {tags?.map((tag, index) => (
              <HashTag key={index}>{tag}</HashTag>
            ))}
          </span>
          <span className={`${st.time} subtext`}>
            <AiOutlineClockCircle /> {time}
          </span>
        </div>
      </div>
    </div>
  );
}
