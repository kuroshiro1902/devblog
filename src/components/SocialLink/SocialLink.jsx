function SocialLink({href='#', children}) {
    return ( 
        <a href={href}>{children}</a>
     );
}

export default SocialLink;