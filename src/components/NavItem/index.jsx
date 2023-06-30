import { useEffect } from 'react';

export default function NavItem({ name, icon, isSub, options }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="NavItem">
            <div className="NavItem-name">{name}</div>
            <div className="NavItem-icon">{icon}</div>
            {isSub && (
                <div className="NavItem-sub">
                    {options?.map((item, index) => (
                        <div key={index} className="NavItem-sub-item">
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
