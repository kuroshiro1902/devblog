import React from 'react';
import OptionItem from '../OptionItem/OptionItem';
import st from './MobieNav.module.scss';
import { Link } from 'react-router-dom';
export default function MobieNav({ name, icon, options, link }) {
    return (
        <details>
            <summary>
                <Link to={link}>{name}</Link>
            </summary>
            {/* {options && ( */}
            {options?.map((item, index) => (
                <div key={index} className={st.NavItemSubItem}>
                    <OptionItem name={item.name} icon={item.icon} link={item.link} />
                </div>
            ))}
            {/* )} */}
        </details>
    );
}
