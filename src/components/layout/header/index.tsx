import Author from '@/components/author';
import Nav from '@/components/nav';
import React from 'react';
import styles from './index.module.scss';

const Header = () => {
    const navlist = [
        { label: '首页', icon: <>1</>, path: '/' },
        { label: 'home', icon: <>1</>, path: '/home' },
    ];
    return (
        <div className={styles.header}>
            <Author />
            <Nav navList={navlist} isLocale isSearch isTheme />
        </div>
    );
};

export default Header;
