import React from 'react';

import st from './RecentBlock.module.scss';
export default function RecentBlock({ title = '', children }) {
  return (
    <div className={st.block}>
      <div className={st.title}>{title}</div>
      <div className={st.content}>{children}</div>
    </div>
  );
}
