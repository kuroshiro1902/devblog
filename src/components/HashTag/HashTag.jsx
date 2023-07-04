import clsx from 'clsx';
function HashTag({children}) {
    return ( 
        <a 
            href={`'/tag/${children.toLowerCase()}`}
            className={clsx('subtext')}
        >
            {`#${children} `}
        </a>
     );
}

export default HashTag;