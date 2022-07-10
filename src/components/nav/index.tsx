import React, { useState } from 'react';
import styles from './index.module.scss';
import Theme from '../theme';
import Locale from '../locale';
import { useViewport } from '@/utils/viewportContext';
import { Button, Drawer, List } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { BarsOutlined, BranchesOutlined } from '@ant-design/icons';
import Author from '../author';
import Search from '../search';
import { iconList } from './icon';

interface Props<P, T> {
    navList: P[];
    authorData?: T;
    isTheme?: boolean;
    isLocale?: boolean;
    isSearch?: boolean;
}
interface List {
    label: string;
    icon?: string;
    path: string;
}

interface AuthorProps {
    name: string;
    authorUrl: string;
    authorImage: string | undefined;
}
const Nav: React.FC<Props<List, AuthorProps>> = (
    props: Props<List, AuthorProps>,
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
                            type={'link'}
                            onClick={() => navigate(item.path)}
                            style={{ padding: '4px 10px 4px 4px' }}
                        >
                            {item?.label}
                        </Button>
                    );
                })}
            </div>
            {isTheme && <Theme className={styles.margin} />}
            {isLocale && <Locale className={styles.margin} />}
            {isSearch && <Search />}
        </div>
    ) : (
        <div className={styles.nav}>
            {isSearch && <Search className={styles.margin} />}
            {isTheme && <Theme className={styles.margin} />}
            {isLocale && <Locale className={styles.margin} />}
            <Button
                type={'text'}
                icon={<BarsOutlined />}
                onClick={() => setOpenNav(!openNav)}
            ></Button>
            <Drawer
                title={<Author authorData={authorData} />}
                placement="left"
                width={300}
                onClose={() => setOpenNav(false)}
                visible={openNav}
            >
                <List
                    itemLayout="horizontal"
                    dataSource={navList}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    item?.icon ? (
                                        iconList[item?.icon]
                                    ) : (
                                        <BranchesOutlined />
                                    )
                                }
                                title={
                                    <Link
                                        to={item?.path}
                                        onClick={() => setOpenNav(false)}
                                    >
                                        {item.label}
                                    </Link>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Drawer>
        </div>
    );
};
export default Nav;
