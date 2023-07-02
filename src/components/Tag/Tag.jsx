import s from './Tag.module.scss'
function Tag({href='#', children}) {
    return ( 
        <a 
        href={href}
        className={s.tag}
        >
            {children}
        </a>
     );
}

export default Tag;