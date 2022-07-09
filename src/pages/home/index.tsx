import React from 'react';
// import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import styles from './index.module.scss';
import { Theme, Locale } from '@/components';
import { useTranslation } from 'react-i18next';
import { config } from '@/service/index';
// import API from '@/service';

const Home = () => {
    const { t } = useTranslation();
    // console.log(useSearchParams(), useLocation(), useParams(), request);
    config({}).then((res) => {
        console.log(res);
    });

    return (
        <div className={styles.Home}>
            <Theme />
            <div>Home/首页</div>
            多语言
            <Locale />
            <div>{t('title')}</div>
            <div>{t('content')}</div>
        </div>
    );
};

export default Home;
