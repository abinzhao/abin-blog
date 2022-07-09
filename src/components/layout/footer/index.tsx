import React from 'react';
import styles from './index.module.scss';

const Footer: React.FC = (props: any) => {
    return (
        <div className={styles.footer}>
            <span>这里是footer信息</span>
            <span>这里是footer信息</span>
        </div>
    );
};

export default Footer;
