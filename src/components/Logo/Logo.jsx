import React from 'react';
import st from './Logo.module.scss';
import clsx from 'clsx';
import logo from '../../assets/image/logo.svg';
import { Link } from 'react-router-dom';
export default function Logo() {
    return (
        <Link to="/" className={clsx(st.logo)}>
            <img src={logo} alt="logo" />
        </Link>
    );
}
