import React from 'react';
import PostItem from '../../components/PostItem/PostItem';
import s from './Admin.module.scss';
import Infor from '../Infor/Infor';
import Posts from '../Posts/Posts';
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom';
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
      <nav className={s.nav}>
        <div className={s.navLeft}>
          <NavLink to="info" className={s.navItem}>
            Thông tin
          </NavLink>
          <NavLink to="article" className={s.navItem}>
            Post
          </NavLink>
          <NavLink to="follow" className={s.navItem}>
            favorites Post
          </NavLink>
        </div>
        <a className={s.ceratePost}>Tạo bài viết mới</a>
      </nav>
      <div className={s.content}>
        <Routes>
          <Route path="article" element={<Posts heading="bài viết của tôi" />} />
          <Route path="follow" element={<Posts heading="bài viết theo dõi" />} />
          <Route path="info" element={<Infor />} />
          <Route path="" element={<Navigate to="info" />} />
        </Routes>
      </div>
    </div>
  );
}
