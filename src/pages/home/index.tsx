import React, { useEffect, useState } from 'react';
// import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { Header } from './component';
import { useConfig } from '@/utils/configContext';
import { filterObj } from '@/utils/utils';
import { Empty } from '@douyinfe/semi-ui';
import { IllustrationConstructionDark } from '@douyinfe/semi-illustrations';
import { IllustrationConstruction } from '@douyinfe/semi-illustrations';
import Content from './component/content';

interface homeHeader {
    title: string;
    subTitle: string;
    content: string;
    btnList: any[];
    rightImage: string | undefined;
    rightImageList: string[];
    textList: string[];
    imageLogo: string;
}
const data = {
    title: '',
    subTitle: '',
    content: '',
    btnList: [],
    rightImage: undefined,
    rightImageList: [],
    textList: [],
    imageLogo: '',
};
const Home = () => {
    const [homeData, setHomeData] = useState<homeHeader>({ ...data });
    const { t } = useTranslation();
    const configContent = useConfig();
    useEffect(() => {
        setHomeData({
            title: configContent?.data?.home?.title,
            subTitle: configContent?.data?.home?.subTitle,
            content: configContent?.data?.home?.content,
            btnList: configContent?.data?.home?.btnList,
            rightImage: configContent?.data?.home?.rightImage,
            rightImageList: configContent?.data?.home?.rightImageList || [],
            textList: configContent?.data?.home?.textList || [],
            imageLogo: configContent?.data?.home?.imageLogo || '',
        });
    }, [configContent]);

    return Object.keys(filterObj(homeData))?.length > 0 ? (
        <div className={styles.Home}>
            <Header {...homeData} />
            <div
                className={styles.content}
                style={{ backgroundColor: 'var(--semi-color-fill-0)' }}
            >
                <Content />
            </div>
            <div className="animate__animated animate__fadeInTopLeft">
                Home/首页
            </div>
            <h1 className="animate__animated animate__backInUp">
                An animated element
            </h1>
            多语言
            <div>{t('title')}</div>
            <div>{t('content')}</div>
        </div>
    ) : (
        <div className={styles.emptyStyle}>
            <Empty
                image={
                    <IllustrationConstruction
                        style={{ width: 150, height: 150 }}
                    />
                }
                darkModeImage={
                    <IllustrationConstructionDark
                        style={{ width: 150, height: 150 }}
                    />
                }
                description={'正在加载中...'}
                style={{ padding: 30 }}
            />
        </div>
    );
};

export default Home;
