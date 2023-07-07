import { useEffect } from 'react';
import OptionItem from '../OptionItem/OptionItem';
import st from './NavItem.module.scss';

export default function NavItem({ name, icon, options, link }) {
    return (
        <a className={st.NavItem} href={link ? link : false}>
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
        </a>
    );
}
