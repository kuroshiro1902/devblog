import React from 'react';
import st from './Logo.module.scss';
import clsx from 'clsx';
import logo from '../../assets/image/logo.svg';
export default function Logo() {
    return (
        <div className={clsx(st.logo)}>
            <img src={logo} alt="logo" />
        </div>
    );
}
