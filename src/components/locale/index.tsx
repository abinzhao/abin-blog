import { Select } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Locale = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState('zh');
    const changeLanguage = (e: string) => {
        i18n.changeLanguage(e);
        setLanguage(e);
    };
    return (
        <div>
            <Select value={language} onChange={changeLanguage}>
                <option value="zh">中</option>
                <option value="en">英</option>
            </Select>
        </div>
    );
};
export default Locale;
