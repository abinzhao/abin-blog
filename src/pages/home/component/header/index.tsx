import { useViewport } from '@/utils/viewportContext';
import { useTranslation } from 'react-i18next';
import React from 'react';
import styles from './index.module.scss';
import HomeImage from '@/assets/image/home.svg';
import { iconList } from '@/components/icon';
import { Button } from '@douyinfe/semi-ui';
import { IconGithubLogo, IconSidebar } from '@douyinfe/semi-icons';

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
    return width > defWidth ? (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.title}>
                    {t('home.header.title')}
                    <span className={styles.name}>{title}</span>
                </div>
                <div className={styles.subTitle}>{subTitle}</div>
                <div className={styles.content}>{content}</div>
                <div style={{ marginTop: width > 1200 ? 52 : 12 }}>
                    {btnList?.map((item, i) => (
                        <a
                            className={styles.btnLink}
                            key={`header-btn-${item?.icon}-${i}`}
                            href={item?.path}
                        >
                            {iconList[item?.icon]}
                        </a>
                    ))}
                </div>
                <div style={{ marginTop: width > 1200 ? 52 : 12 }}>
                    <Button
                        icon={<IconGithubLogo />}
                        theme="solid"
                        style={{ marginRight: 12 }}
                    >
                        前往GitHub
                    </Button>
                    <Button icon={<IconSidebar />} theme="solid">
                        前往掘金
                    </Button>
                </div>
            </div>
            <div className={styles.right}>
                <img
                    className={styles.leftImage}
                    src={HomeImage}
                    alt="Home Header LOGO"
                />
            </div>
        </div>
    ) : (
        <div className={styles.headerLS}>
            <div className={styles.title}>
                {t('home.header.title')}
                <span className={styles.name}>{title}</span>
            </div>
            <div className={styles.subTitle}>{subTitle}</div>
            <div className={styles.content}>{content}</div>
            <div style={{ marginTop: 12 }}>
                {btnList?.map((item, i) => (
                    <a
                        className={styles.btnLink}
                        key={`header-ls-btn-${item?.icon}-${i}`}
                        href={item?.path}
                    >
                        {iconList[item?.icon]}
                    </a>
                ))}
            </div>
            <div style={{ marginTop: 12 }}>
                <Button
                    icon={<IconGithubLogo />}
                    theme="solid"
                    style={{ marginRight: 12 }}
                >
                    前往GitHub
                </Button>
                <Button icon={<IconSidebar />} theme="solid">
                    前往掘金
                </Button>
            </div>
        </div>
    );
};

export default Header;
