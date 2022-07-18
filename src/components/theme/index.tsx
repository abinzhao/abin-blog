import React, { ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@douyinfe/semi-ui';
import { IconMoon } from '@douyinfe/semi-icons';

interface Props {
    icon?: ReactNode;
    isRadius?: boolean;
    className?: string | undefined;
    btnType?: 'warning' | 'primary' | 'secondary' | 'danger' | undefined;
}
const Theme: React.FC<Props> = (props: Props) => {
    const { icon, className, btnType, isRadius } = props;
    const [themeData, setThemeData] = useState<string>(
        Cookies.get('theme') || 'default',
    );
    const changeTheme = (): void => {
        if (Cookies.get('theme') == 'theme-mode') {
            Cookies.set('theme', 'dark');
            setThemeData('dark');
            return;
        }
        Cookies.set('theme', 'theme-mode');
        setThemeData('theme-mode');
    };
    useEffect(() => {
        if (!Cookies.get('theme')) {
            Cookies.set('theme', 'theme-mode');
            setThemeData('theme-mode');
        }
        const themes: string = Cookies.get('theme') || 'theme-mode';
        document
            .getElementsByTagName('body')[0]
            .setAttribute('theme-mode', themes);
    }, [themeData]);
    return (
        <Button
            type={btnType || 'primary'}
            className={className || undefined}
            style={{
                borderRadius: isRadius ? '50%' : undefined,
            }}
            icon={icon || <IconMoon />}
            onClick={changeTheme}
            aria-label="主题"
        />
    );
};
export default Theme;
