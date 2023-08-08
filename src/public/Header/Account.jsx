import React, { useState } from 'react';
import s from './Header.module.scss';
import accountLogo from '../../assets/image/account.jpg';
import { Link } from 'react-router-dom';
const AccountList = [
    {
        path: '/profile',
        name: 'Trang cá nhân',
    },
    {
        path: '/new-post',
        name: 'Tạo bài viết',
    },
    {
        path: '/logout',
        name: 'Đăng xuất',
    },
];
const length = AccountList.length;

export default function Account() {
    const [isMenu, setIsMenu] = useState(false);
    return (
        <div className={s.account}>
            <img
                src={accountLogo}
                alt=""
                onClick={() => {
                    setIsMenu(!isMenu);
                }}
            />
            {isMenu ? (
                <ul className={s.accountMenu}>
                    {AccountList.map((item, index) => (
                        <li key={index} className={index < length - 1 ? s.borderBottom : s.accountItem}>
                            <Link to={item.path} className={s.accountItemLink}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                ''
            )}
        </div>
    );
}
