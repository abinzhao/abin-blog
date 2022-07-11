import { useViewport } from '@/utils/viewportContext';
import { useTranslation } from 'react-i18next';
import React from 'react';
import styles from './index.module.scss';

interface Props<P, T> {
    btnList?: P[];
    title: string;
    subTitle: string;
    imageList: T[];
}
interface btnlist {
    icon: string;
    path: string;
}
interface ImageProps {
    imageUrl: string;
    title: string;
    id: number | string;
}
const Header: React.FC<Props<btnlist, ImageProps>> = (
    props: Props<btnlist, ImageProps>,
) => {
    const { btnList = [], title = '', subTitle = '', imageList = [] } = props;
    const { width } = useViewport();
    const { t } = useTranslation();
    const defWidth = 620;
    return (
        <div className={styles.header}>
            {width > defWidth ? (
                <>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            <div>{t('home.header.title')}</div>
                            <div className={styles.name}>{title}</div>
                        </div>
                        <div className={styles.subTitle}>{subTitle}</div>
                    </div>
                    <div className={styles.reght}>
                        <div>哈喽</div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Header;
