import { useViewport } from '@/utils/viewportContext';
import { useTranslation } from 'react-i18next';
import React from 'react';
import styles from './index.module.scss';
import HomeImage from '@/assets/image/home.svg';
import { iconList } from '@/components/nav/icon';

interface Props<P> {
    btnList?: P[];
    title: string;
    subTitle: string;
    content?: string;
}
interface btnlist {
    icon: string;
    path: string;
}
const Header: React.FC<Props<btnlist>> = (props: Props<btnlist>) => {
    const { btnList = [], title = '', subTitle = '', content = '' } = props;
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
                        <div className={styles.content}>{content}</div>
                        <div className={styles.btnlist}>
                            {btnList?.map((item) => (
                                <a
                                    className={styles.btnLink}
                                    key={`btn-${item?.icon}`}
                                    href={item?.path}
                                >
                                    {iconList[item?.icon]}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img
                            className={styles.leftImage}
                            src={HomeImage}
                            alt="Home LOGO"
                        />
                    </div>
                </>
            ) : (
                <>123</>
            )}
        </div>
    );
};

export default Header;
