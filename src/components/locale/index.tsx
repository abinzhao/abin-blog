import React, { ReactNode, useState } from 'react';
import { Button } from '@douyinfe/semi-ui';
import { IconLanguage } from '@douyinfe/semi-icons';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

interface Props {
    icon?: ReactNode;
    isRadius?: boolean;
    className?: string | undefined;
    btnType?: 'warning' | 'primary' | 'secondary' | 'danger' | undefined;
}
const Locale: React.FC<Props> = (props: Props) => {
    const { icon, className, btnType, isRadius } = props;
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
            type={btnType || 'primary'}
            className={className || undefined}
            style={{
                borderRadius: isRadius ? '50%' : undefined,
            }}
            icon={icon || <IconLanguage />}
            onClick={changeLanguage}
            aria-label="多语言"
        />
    );
};
export default Locale;
