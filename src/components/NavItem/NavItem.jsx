import { useEffect } from 'react';
import OptionItem from '../OptionItem/OptionItem';
import st from './NavItem.module.scss';
import { Link } from 'react-router-dom';

export default function NavItem({ name, icon, options, link }) {
    return (
        <div className={st.NavItem}>
            <Link to={Link} className={st.NavItemName}>
                {name}
            </Link>
            <div className={st.NavItemIcon}>{icon || '1'}</div>
            {options && (
                <div className={st.NavItemSub}>
                    {options?.map((item, index) => (
                        <div key={index} className={st.NavItemSubItem}>
                            <OptionItem name={item.name} icon={item.icon} link={item.link} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
