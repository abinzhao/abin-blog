import Author from '@/components/author';
import Nav from '@/components/nav';
import { useConfig } from '@/utils/configContext';
import { useViewport } from '@/utils/viewportContext';
import React from 'react';
import styles from './index.module.scss';

const Header: React.FC = () => {
    const configContent = useConfig();
    const { width } = useViewport();
    const defWidth = 620;
    const authorData = {
        name: configContent?.data?.name,
        authorUrl: configContent?.data?.author_url,
        authorImage: configContent?.data?.author_image,
    };
    return (
        <div
            className={styles.header}
            style={{ padding: width < defWidth ? 12 : 0 }}
        >
            <Author authorData={authorData} />
            <Nav
                navList={configContent?.data?.navList}
                authorData={authorData}
                isLocale
                isSearch
                isTheme
            />
        </div>
    );
};

export default Header;
