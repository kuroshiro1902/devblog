import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import st from './OptionItem.module.scss';

export default function OptionItem({ icon, name, link }) {
    return (
        <Link to={link} className={clsx(st.OptionItem)}>
            {/* <Link to={link}> */}
            <div className={st.OptionItemLink}>
                <i cldiv className={OptionItem} ssName="icon">
                    {icon}
                </i>
                <span>{name}</span>
            </div>

            {/* </Link> */}
        </Link>
    );
}
