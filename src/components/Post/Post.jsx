import React from 'react';

import st from './Post.module.scss';
export default function Post({ title = '', children }) {
    console.log('chil', children);
    return (
        <div className={st.post}>
            <div className={st.postTitle}>{title}</div>
            <div className={st.postContent}>
                {/* {content?.map((item, index) => (
                    <PostItem
                        key={index}
                        image={item.image}
                        author={item.author}
                        textLink={item.textLink}
                        date={item.date}
                    />
                ))} */}
                {children}
            </div>
        </div>
    );
}
