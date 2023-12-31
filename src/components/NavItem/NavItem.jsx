import { useEffect } from 'react';
import OptionItem from '../OptionItem/OptionItem';
import st from './NavItem.module.scss';
import { Link } from 'react-router-dom';

export default function NavItem({ name, icon, options, link }) {
    if (link) {
        return (
            <a className={st.NavItem} href={link}>
                <div className={st.NavItemName}>{name}</div>
                <div className={st.NavItemIcon}>{icon || '1'}</div>
            </a>
        );
    }
    return (
        <div className={st.NavItem}>
            <div className={st.NavItemName}>{name}</div>

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
