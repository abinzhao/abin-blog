import { Button } from 'antd';
import React, { ReactNode, useState } from 'react';
import { TranslationOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { RenderFunction } from 'antd/lib/tooltip';

interface Props {
    icon?: ReactNode;
    className?: string | undefined;
    tipTitle?: ReactNode | RenderFunction;
    btnType?: 'default' | 'primary' | 'dashed' | undefined;
}
const Locale: React.FC<Props> = (props: Props) => {
    const { icon, className, btnType } = props;
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(Cookies.get('i18next') || 'zh');
    const changeLanguage = () => {
        if (language == 'en') {
            i18n.changeLanguage('zh');
            setLanguage('zh');
            return;
        }
        i18n.changeLanguage('en');
        setLanguage('en');
    };
    return (
        <Button
            className={className || undefined}
            onClick={changeLanguage}
            type={btnType || 'dashed'}
            shape="circle"
            icon={icon || <TranslationOutlined />}
        />
    );
};
export default Locale;
