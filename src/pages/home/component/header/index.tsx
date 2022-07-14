import { useViewport } from '@/utils/viewportContext';
import { useTranslation } from 'react-i18next';
import React from 'react';
import styles from './index.module.scss';
import HomeImage from '@/assets/image/home.svg';
import { iconList } from '@/components/icon';
import { Button } from '@douyinfe/semi-ui';
import { IconGithubLogo, IconSidebar } from '@douyinfe/semi-icons';
import { useNavigate } from 'react-router-dom';
import { Carousel } from '@/components';

interface Props<P> {
    btnList?: P[];
    title: string;
    subTitle: string;
    content?: string;
    rightImage?: string | undefined;
    rightImageList?: any[];
}
interface btnlist {
    icon: string;
    path: string;
}
const Header: React.FC<Props<btnlist>> = (props: Props<btnlist>) => {
    const {
        btnList = [],
        title = '',
        subTitle = '',
        content = '',
        rightImage = undefined,
        rightImageList = [],
    } = props;
    const { width } = useViewport();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const defWidth = 620;
    console.log('Props', { ...props });
    return width > defWidth ? (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.title}>
                    {t('home.header.title')}
                    <span className={styles.name}>{title}</span>
                </div>
                <div className={styles.subTitle}>{subTitle}</div>
                <div className={styles.content}>{content}</div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            marginTop: width > 1200 ? 52 : 12,
                            display: 'flex',
                        }}
                    >
                        {btnList?.map((item, i) => (
                            <div
                                key={`header-btn-${item?.icon}-${i}`}
                                onClick={() => navigate(item?.path)}
                                style={{
                                    marginRight:
                                        i == btnList?.length - 1 ? 0 : 24,
                                    color: '#0077fa',
                                }}
                            >
                                {iconList[item?.icon]}
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: width > 1200 ? 52 : 12 }}>
                        <Button
                            icon={<IconGithubLogo />}
                            theme="solid"
                            style={{ marginRight: 24 }}
                        >
                            GitHub
                        </Button>
                        <Button icon={<IconSidebar />} theme="solid">
                            掘&nbsp;&nbsp;&nbsp;&nbsp;金
                        </Button>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <img
                    className={styles.leftImage}
                    src={rightImage || HomeImage}
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
            <div style={{ marginTop: 12, display: 'flex' }}>
                {btnList?.map((item, i) => (
                    <div
                        key={`header-btn-ls-${item?.icon}-${i}`}
                        onClick={() => navigate(item?.path)}
                        style={{
                            marginRight: i == btnList?.length - 1 ? 0 : 12,
                            color: '#0077fa',
                        }}
                    >
                        {iconList[item?.icon]}
                    </div>
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
            <Carousel width={300} height={200} />
        </div>
    );
};

export default Header;
