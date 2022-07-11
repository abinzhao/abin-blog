import React from 'react';
// import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { Header } from './component';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.Home}>
            <Header
                title="老忘同学"
                subTitle="bb"
                btnList={[]}
                imageList={[]}
            />
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
    );
};

export default Home;
