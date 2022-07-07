import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Theme = () => {
    const [themeData, setThemeData] = useState<string>(
        Cookies.get('theme') || 'default',
    );
    const changeTheme = (): void => {
        console.log('Cookies', Cookies.get('theme'));
        if (Cookies.get('theme') == 'default') {
            Cookies.set('theme', 'dark');
            setThemeData('dark');
            return;
        }
        Cookies.set('theme', 'default');
        setThemeData('default');
    };
    useEffect(() => {
        const themes: string = Cookies.get('theme') || 'default';
        document
            .getElementsByTagName('body')[0]
            .setAttribute('data-theme', themes);
    }, [themeData]);
    return (
        <Button type={'primary'} onClick={changeTheme}>
            主题
        </Button>
    );
};
export default Theme;
