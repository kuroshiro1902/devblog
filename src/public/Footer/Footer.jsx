import s from './Footer.module.scss'
function Footer() {
    return ( 
        <div className={`${s.container} flex`}>
            <div className={`${s.content} flex`}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div></div>
        </div>
     );
}

export default Footer;