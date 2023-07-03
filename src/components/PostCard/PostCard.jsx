import s from './PostCard.module.scss'
function PostCard({
    tags = ['hashtag1','hashtag2','hashtag3','hashtag4','hashtag5','hashtag6','hashtag7','hashtag8','hashtag9','hashtag10'], 
    readtime=2, 
    title='Unique architectural designsUnique architectural designsUnique architectural designs but not lacking abcsdaedasd'}) {
    return ( 
        <div className={s.postCard}>
            <div className={s.imgCtn}>
                <a><img src='https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg' /></a>
            </div>
            <div className={s.info+' subtext'}>
                <div className={s.tags}>
                    {tags.map((tag,index)=>(
                        <a key={index}> #{tag} </a>
                    ))}
                </div>
                <div>{`${readtime} ${readtime>1? 'mins':'min'} to read`} </div>
            </div>
            <div className={s.title+' move-up'}><a>{title}</a></div>
            <div className={s.foot}>
                <div className={s.author}>
                    <a><img src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg"/></a>
                    <div>
                        <h4><a>Author</a></h4>
                        <div className='subtext'>Feb 12 2023</div>
                    </div>
                </div>
                <div className={s.readMore+' subtext'}><a>&nbsp;Read more&nbsp;</a></div>
            </div>
        </div> 
    );
}

export default PostCard;