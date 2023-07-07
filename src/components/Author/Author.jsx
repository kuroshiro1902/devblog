import s from './Author.module.scss';
function Author() {
    return (
        <div className={s.author}>
            <a>
                <img src="https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg" />
            </a>
            <div>
                <h4>
                    <a>Author</a>
                </h4>
                <div className="subtext">Feb 12 2023</div>
            </div>
        </div>
    );
}

export default Author;
