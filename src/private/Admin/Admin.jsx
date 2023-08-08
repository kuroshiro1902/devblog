import React from 'react';
import PostItem from '../../components/PostItem/PostItem';
import s from './Admin.module.scss';
export default function Admin(banner, avt, name) {
  return (
    <div className={s.admin}>
      <div className={s.banner}>
        <img
          src={'https://fullstack.edu.vn/static/media/cover-profile.3fb9fed576da4b28386a.png'}
          className={s.image}
          alt=""
        />
        <div className={s.avatar}>
          <img
            src={'https://files.fullstack.edu.vn/f8-prod/user_avatars/59886/622811434db32.jpg'}
            className={s.imageAva}
            alt=""
          />
        </div>
      </div>
      <div className={s.content}>
        <div className={s.contentLeft}>
          <div className={s.intro}>123</div>
        </div>
        <div className={s.contentRight}>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
    </div>
  );
}
