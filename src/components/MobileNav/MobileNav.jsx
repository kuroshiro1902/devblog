import React from 'react';
import OptionItem from '../OptionItem/OptionItem';

import { Link } from 'react-router-dom';

import st from './MobileNav.module.scss';

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
