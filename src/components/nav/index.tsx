import React, { useState } from 'react';
import styles from './index.module.scss';
import Theme from '../theme';
import Locale from '../locale';
import { useViewport } from '@/utils/viewportContext';
import { SideSheet, Button, List } from '@douyinfe/semi-ui';
import { useNavigate } from 'react-router-dom';
import { IconMenu } from '@douyinfe/semi-icons';
import Author from '../author';
import Search from '../search';
import { iconList } from '../icon';

interface Props<P, T> {
    navList: P[];
    authorData?: T;
    isTheme?: boolean;
    isLocale?: boolean;
    isSearch?: boolean;
}
interface list {
    label: string;
    icon?: string;
    path: string;
}

interface AuthorProps {
    name: string;
    authorUrl: string;
    authorImage: string | undefined;
}
const Nav: React.FC<Props<list, AuthorProps>> = (
    props: Props<list, AuthorProps>,
) => {
    const {
        navList = [],
        isTheme = false,
        isLocale = false,
        isSearch = false,
        authorData = {
            name: '',
            authorUrl: '',
            authorImage: undefined,
        },
    } = props;
    const [openNav, setOpenNav] = useState<boolean>(false);
    const { width } = useViewport();
    const navigate = useNavigate();
    const defWidth = 620;

    return width > defWidth ? (
        <div className={styles.nav}>
            <div className={styles.navList}>
                {navList?.map((item: any, i: number) => {
                    return (
                        <Button
                            key={`nav-${i}`}
                            onClick={() => navigate(item.path)}
                            theme="borderless"
                            type="primary"
                            style={{ marginRight: 12 }}
                        >
                            {item?.label}
                        </Button>
                    );
                })}
            </div>
            {isTheme && <Theme className={styles.margin} isRadius />}
            {isLocale && <Locale className={styles.margin} isRadius />}
            {isSearch && <Search isRadius />}
        </div>
    ) : (
        <div className={styles.nav}>
            {isSearch && <Search className={styles.margin} isRadius />}
            {isTheme && <Theme className={styles.margin} isRadius />}
            {isLocale && <Locale className={styles.margin} isRadius />}
            <Button
                type={'primary'}
                style={{
                    borderRadius: '50%',
                }}
                icon={<IconMenu />}
                onClick={() => setOpenNav(!openNav)}
                aria-label="搜索"
            />
            <SideSheet
                title={<Author authorData={authorData} />}
                placement="left"
                width={300}
                onCancel={() => setOpenNav(false)}
                visible={openNav}
            >
                <List
                    size="large"
                    dataSource={navList}
                    renderItem={(item) => (
                        <List.Item
                            style={{ color: 'var(--semi-color-text-2)' }}
                            onClick={() => {
                                navigate(item?.path);
                                setOpenNav(false);
                            }}
                        >
                            {iconList[item?.icon || '']}
                            <div style={{ marginLeft: 10 }}>{item?.label}</div>
                        </List.Item>
                    )}
                />
            </SideSheet>
        </div>
    );
};
export default Nav;
