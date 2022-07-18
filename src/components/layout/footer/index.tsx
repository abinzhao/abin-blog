import { useConfig } from '@/utils/configContext';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

const Footer: React.FC = () => {
    const configContent = useConfig();
    const { t } = useTranslation();
    const { data = {} } = configContent;
    return (
        <div className={styles.footer}>
            <div>{`${t('Copyright')} © ${data?.footer?.copyright || 2022} ${
                data?.footer?.title
            }`}</div>
            <div className={styles.subtitle}>
                <div className={styles.ba}>
                    <img
                        src="https://lf9-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/beian.png"
                        alt="公安网"
                    />
                    {`${t('recordNumber')}：${data?.footer?.recordNumber}`}
                </div>
            </div>
            <div>
                Designed & Developed with love by
                <span className={styles.des}>{data?.footer?.devName}</span>
            </div>
        </div>
    );
};

export default Footer;
