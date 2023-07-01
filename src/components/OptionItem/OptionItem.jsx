import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import st from './OptionItem.module.scss';

export default function OptionItem({ icon, name, link }) {
    return (
        <div className={clsx(st.OptionItem)}>
            {/* <Link to={link}> */}
            <a href={link}>
                <i className="icon">{icon}</i>
                <span>{name}</span>
            </a>

            {/* </Link> */}
        </div>
    );
}
