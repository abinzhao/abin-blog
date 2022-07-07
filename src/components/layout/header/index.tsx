import Locale from '@/components/locale';
import Theme from '@/components/theme';
import { useViewport } from '@/utils/viewportContext';
import React from 'react';
import styles from './index.module.scss';

const Header = (props: any) => {
    const { width } = useViewport();
    return (
        <div className={styles['header-ls']}>
            <div className={styles.author}>
                <img className={styles.img} src="" alt="author" />
                <div className={styles.name}>名字</div>
            </div>
            <div className={styles.nav}>
                <div>list</div>
                <Theme />
                <Locale />
                <div className={styles.search}>搜索</div>
            </div>
        </div>
    );
};

export default Header;
