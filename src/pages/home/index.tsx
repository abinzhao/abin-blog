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
                subTitle="做事有始有终值得开始的事就值得完成。聪明人做事总是有始有终!把意念深潜得下，何理不可得，把志气奋发起，何事不可做。"
                content="前端工程师"
                btnList={[
                    { icon: 'home', path: 'ws' },
                    { icon: 'home', path: 'ws' },
                ]}
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
