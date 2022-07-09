import React from 'react';
import Footer from './footer';
import Header from './header';
import styles from './index.module.scss';

const Layout: React.FC = (props: any) => {
    return (
        <div className={styles.layout}>
            <div className={styles.top}>
                <Header />
            </div>
            <div className={styles.center}>{props?.children}</div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
