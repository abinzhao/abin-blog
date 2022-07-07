import React from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import styles from './index.module.scss';
import { Theme } from '@/components';
import API from '@/service';

const Home = () => {
    const request = async () => {
        const result = await API.login('zhangsan', '123456');
        console.log(result);
    };
    console.log(useSearchParams(), useLocation(), useParams(), request);

    return (
        <div className={styles.Home}>
            <Theme />
            <div>Home/首页</div>
        </div>
    );
};

export default Home;
