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
import { useViewport } from '@/utils/viewportContext';

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
    const { width } = useViewport();
    const defWidth = 620;
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
                className={`${styles.content} animate__animated animate__zoomIn`}
                style={{
                    backgroundColor: 'var(--semi-color-fill-0)',
                    padding: width > defWidth ? 24 : 0,
                }}
            >
                <Content />
            </div>
        </div>
    ) : (
        <Empty
            style={{ marginTop: 150 }}
            image={
                <IllustrationConstruction style={{ width: 150, height: 150 }} />
            }
            darkModeImage={
                <IllustrationConstructionDark
                    style={{ width: 150, height: 150 }}
                />
            }
            title={'正在加载中'}
            description={'正在马不停蹄的为您从数据库偷数据...'}
        />
    );
};

export default Home;
