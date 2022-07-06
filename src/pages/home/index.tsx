import React, { useState } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import axios from '@/utils/axios';
import styles from './index.module.scss';
import { Button } from 'antd';
import API from '@/service';

const Home = () => {
    const [themes, setThemes] = useState<string>('default');
    const requestRes = async () => {
        const result = await axios({
            url: '/api/xxx',
            method: 'get',
        });
        console.log(result);
    };
    const request = async () => {
        const result = await API.login('zhangsan', '123456');
        console.log(result);
    };
    console.log(requestRes, request);
    console.log(useSearchParams(), useLocation(), useParams());
    const changeTheme = (): void => {
        setThemes(themes == 'default' ? 'dark' : 'default');
        document
            .getElementsByTagName('body')[0]
            .setAttribute('data-theme', themes);
    };
    return (
        <div className={styles.Home}>
            Home
            <Button onClick={changeTheme}>00000</Button>
        </div>
    );
};

export default Home;
