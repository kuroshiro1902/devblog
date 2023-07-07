import React, { useEffect, useRef } from 'react';
import s from './Header.module.scss';
import { DarkModeBtn, Logo, MobileNav, NavItem } from '../../components';
export default function Header() {
    const headerRef = useRef(null);
    useEffect(() => {
        const hideHeader = () => {
            if (window.pageYOffset > 98 && window.pageYOffset < 500) {
                headerRef.current.style.top = '-50px';
                headerRef.current.style.borderBottom = '1px solid #ccc';
            } else if (window.pageYOffset > 500) {
                headerRef.current.style.position = 'fixed';
                headerRef.current.style.top = '0';
                headerRef.current.style.borderBottom = '1px solid #ccc';
            } else {
                headerRef.current.style.position = 'unset';
                headerRef.current.style.borderBottom = 'none';
                // headerRef.current.style.top = '0';
            }
        };
        window.addEventListener('scroll', hideHeader);
        return () => window.removeEventListener('scroll', hideHeader);
    });
    return (
        <div ref={headerRef} className={s.header}>
            <div className={s.headerLogo}>
                <Logo />
            </div>
            <ul className={s.headerNav}>
                <li>
                    <NavItem
                        name="Front-end"
                        icon={false}
                        options={[
                            { name: 'HTML', icon: false, link: '/home' },
                            { name: 'CSS', icon: false, link: '/home' },
                            { name: 'JavaScript', icon: false, link: '/home' },
                        ]}
                    />
                </li>
                <li>
                    <NavItem
                        name="Back-end"
                        icon={false}
                        options={[
                            { name: 'JavaScript', icon: false, link: '/home' },
                            { name: 'NodeJS', icon: false, link: '/home' },
                            { name: 'MongoDB', icon: false, link: '/home' },
                            { name: 'library', icon: false, link: '/home' },
                        ]}
                    />
                </li>
                <li>
                    <NavItem
                        name="UI/UX"
                        icon={false}
                        options={[
                            { name: 'UI Designer', icon: false, link: '/home' },
                            { name: 'UX Designer', icon: false, link: '/home' },
                        ]}
                    />
                </li>
                <li>
                    <NavItem
                        name="Tips & Tricks"
                        icon={false}
                        options={[
                            { name: 'CSS', icon: false, link: '/home' },
                            { name: 'HTML', icon: false, link: '/home' },
                            { name: 'Visual studio code', icon: false, link: '/home' },
                        ]}
                    />
                </li>
                <li>
                    <NavItem name="Others" icon={false} link="/" />
                </li>
                <li>
                    <NavItem name="About Me" icon={false} link="#" />
                </li>
            </ul>
            <div className={s.headerRinght}>
                <DarkModeBtn />
                <div className={s.burger}>"icon 3/"</div>
            </div>
            <div className={s.mobieHeader}>
                <div className={s.overlay}></div>
                <div className={s.mobieContent}>
                    <div className={s.mobieLogoTop}>
                        <Logo />
                        <div className={s.mobieClose}>X</div>
                    </div>
                    <div className={s.mobileNav}>
                        <MobileNav
                            name="Front-end"
                            icon={false}
                            options={[
                                { name: 'HTML', icon: false, link: '/home' },
                                { name: 'CSS', icon: false, link: '/home' },
                                { name: 'JavaScript', icon: false, link: '/home' },
                            ]}
                        />
                        <MobileNav
                            name="Front-end"
                            icon={false}
                            options={[
                                { name: 'HTML', icon: false, link: '/home' },
                                { name: 'CSS', icon: false, link: '/home' },
                                { name: 'JavaScript', icon: false, link: '/home' },
                            ]}
                        />
                        <MobileNav
                            name="Front-end"
                            icon={false}
                            options={[
                                { name: 'HTML', icon: false, link: '/home' },
                                { name: 'CSS', icon: false, link: '/home' },
                                { name: 'JavaScript', icon: false, link: '/home' },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
