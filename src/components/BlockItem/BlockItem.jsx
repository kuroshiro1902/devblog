import st from './BlockItem.module.scss';
export default function BlockItem({
  image = 'https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2-150x150.jpg',
  author,
  text = 'Helpful tips for women working from home during lockdown',
  date = '12h',
}) {
  return (
    <div className={st.blockItem}>
      <img className={st.itemImage} src={image} alt="image" />
      <article className={st.itemArticle}>
        {author ? (
          <p>
            <strong>{author} </strong>on
          </p>
        ) : (
          ''
        )}
        <a href="#" className={st.itemLink}>
          {text}
        </a>
        <p className={`subtext`}>{date}</p>
      </article>
    </div>
  );
}
