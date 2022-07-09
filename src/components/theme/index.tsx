import { Button } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { BgColorsOutlined } from '@ant-design/icons';

interface Props {
    icon?: ReactNode;
    className?: string | undefined;
    btnType?: 'default' | 'primary' | 'dashed' | undefined;
}
const Theme: React.FC<Props> = (props: Props) => {
    const { icon, className, btnType } = props;
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
        if (!Cookies.get('theme')) {
            Cookies.set('theme', 'default');
            setThemeData('default');
        }
        const themes: string = Cookies.get('theme') || 'default';
        document
            .getElementsByTagName('body')[0]
            .setAttribute('data-theme', themes);
    }, [themeData]);
    return (
        <Button
            className={className || undefined}
            onClick={changeTheme}
            type={btnType || 'dashed'}
            shape="circle"
            icon={icon || <BgColorsOutlined />}
        />
    );
};
export default Theme;
