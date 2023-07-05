import React from 'react';
import st from './PostItem.module.scss';
export default function PostItem({
    image = 'https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2-150x150.jpg',
    author,
    textLink = 'Helpful tips for women working from home during lockdown',
    date = '12h',
}) {
    return (
        <div className={st.postItem}>
            <img className={st.itemImage} src={image} alt="đây chắc chắn là ảnh thề :))" />
            <article className={st.itemArticle}>
                {author ? (
                    <p>
                        <strong>{author} </strong>on
                    </p>
                ) : (
                    ''
                )}
                <p className={st.itemLink}>{textLink}</p>
                <p className={`subtext`}>{date}</p>
            </article>
        </div>
    );
}
