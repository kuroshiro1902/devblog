import React from 'react';

import st from './RecentBlock.module.scss';
export default function RecentBlock({ title = '', children }) {
    console.log('chil', children);
    return (
        <div className={st.post}>
            <div className={st.postTitle}>{title}</div>
            <div className={st.postContent}>
                {children}
            </div>
        </div>
    );
}
