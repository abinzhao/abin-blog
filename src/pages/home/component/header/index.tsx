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
    rightImageList?: string[];
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
    return width > defWidth ? (
        <div className={styles.header}>
            <div className={styles.left}>
                <div
                    className={`${styles.title} animate__animated animate__rotateIn`}
                >
                    {t('home.header.title')}
                    <span className={styles.name}>{title}</span>
                </div>
                <div
                    className={`${styles.subTitle} animate__animated animate__flipInY`}
                >
                    {subTitle}
                </div>
                <div
                    className={`${styles.content} animate__animated animate__jackInTheBox`}
                >
                    {content}
                </div>
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
                        className="animate__animated animate__fadeInUp"
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
                    <div
                        className="animate__animated animate__zoomInLeft"
                        style={{ marginTop: width > 1200 ? 52 : 12 }}
                    >
                        <Button
                            icon={<IconGithubLogo />}
                            theme="solid"
                            style={{ marginRight: 24 }}
                        >
                            GitHub
                        </Button>
                        <Button icon={<IconSidebar />} theme="solid">
                            ???&nbsp;&nbsp;&nbsp;&nbsp;???
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className={`${styles.right} animate__animated animate__rotateIn`}
            >
                <img
                    className={styles.leftImage}
                    src={rightImage || HomeImage}
                    alt="Home Header LOGO"
                />
            </div>
        </div>
    ) : (
        <div className={styles.headerLS}>
            <div
                className={`${styles.title} animate__animated animate__rotateIn`}
            >
                {t('home.header.title')}
                <span className={styles.name}>{title}</span>
            </div>
            <div
                className={`${styles.subTitle} animate__animated animate__flipInY`}
            >
                {subTitle}
            </div>
            <div
                className={`${styles.content} animate__animated animate__jackInTheBox`}
            >
                {content}
            </div>
            <div
                className="animate__animated animate__fadeInUp"
                style={{ marginTop: 12, display: 'flex' }}
            >
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
            <div
                className="animate__animated animate__zoomInLeft"
                style={{ marginTop: 12 }}
            >
                <Button
                    icon={<IconGithubLogo />}
                    theme="solid"
                    style={{ marginRight: 12 }}
                >
                    ??????GitHub
                </Button>
                <Button icon={<IconSidebar />} theme="solid">
                    ????????????
                </Button>
            </div>
            <div className="animate__animated animate__zoomInDown">
                <Carousel imgList={rightImageList} />
            </div>
        </div>
    );
};

export default Header;
