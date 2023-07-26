import React from 'react';
import s from './Infor.module.scss';
import { BlockItem, RecentBlock } from '../../components';
export default function Infor() {
  return (
    <div className={s.content}>
      <div className={s.contentLeft}>
        <div className={s.intro}>
          <h4 className={s.heading}>Giới thiệu</h4>
          <div className={s.name}>
            <span className={s.spanLeft}>Họ tên:</span>
            <span className={s.spanRight}> </span>
          </div>
          <div className={s.mail}>
            <span className={s.spanLeft}>Mail:</span>
            <span className={s.spanRight}> </span>
          </div>
          <div className={s.acc}>
            <span className={s.spanLeft}>Tài khoản:</span>
            <span className={s.spanRight}> </span>
          </div>
          <div className={s.pass}>
            <span className={s.spanLeft}>Mật khẩu:</span>
            <span className={s.spanRight}> </span>
          </div>
        </div>
      </div>
      <div className={s.contentRight}>
        <RecentBlock title="Hoạt động gần đây">
          <BlockItem />
          <BlockItem />
          <BlockItem />
          <BlockItem />
          <BlockItem />
          <BlockItem />
        </RecentBlock>
      </div>
    </div>
  );
}
