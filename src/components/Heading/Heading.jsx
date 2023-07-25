import React from 'react';
import st from './Heading.module.scss';

export default function Heading({ title = 'Recent posts', description = "Don't miss the latest trends", style }) {
  return (
    <div className={st.heading} style={style}>
      <h2 className={st.headingTitle}>{title}</h2>
      <p className={st.headingDesc}>{description}</p>
    </div>
  );
}
