import React, { ReactNode, useState } from 'react';
import Footer from './footer';
import Header from './header';
import styles from './index.module.scss';
import { BackTop } from '@douyinfe/semi-ui';
import { IconArrowUp } from '@douyinfe/semi-icons';

interface Props {
    children?: ReactNode;
}
const styleTop = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderRadius: '50%',
    backgroundColor: '#0077fa',
    color: '#fff',
    bottom: 100,
};

const Layout: React.FC<Props> = (props: Props) => {
    const [scrollTop, setScrollTop] = useState<any>(0);
    const handleScroll = () => {
        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        setScrollTop(scrollTop);
        return scrollTop;
    };
    window.addEventListener('scroll', handleScroll);

    return (
        <div
            className={styles.layout}
            style={{
                color: 'var(--semi-color-text-0)',
                backgroundColor: 'var( --semi-color-bg-0)',
            }}
        >
            <div
                className={`${styles.top} ${
                    scrollTop > 0 ? styles.headerBg : styles.headerBgDef
                }`}
            >
                <Header />
            </div>
            <div id="center" className={styles.center}>
                {props?.children}
                <BackTop style={styleTop}>
                    <IconArrowUp />
                </BackTop>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
