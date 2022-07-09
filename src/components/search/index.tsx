import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal, Input, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Author from '../author';
import ArticleItem from '../Item';
import { Article } from '@/service/index';
import { useViewport } from '@/utils/viewportContext';
import styles from './index.module.scss';

const ModelSearch = Input.Search;

interface Props {
    className?: string | undefined;
    icon?: ReactNode;
    btnType?: 'default' | 'primary' | 'dashed' | undefined;
    styleModal?: string | undefined;
    onSearch?: (v: string) => void;
    loading?: boolean;
}
const Search: React.FC<Props> = (props: Props) => {
    const { className, btnType, icon, styleModal, loading } = props;
    const { t } = useTranslation();
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [SearchData, setSearchData] = useState<any[]>([]);
    const { width } = useViewport();
    const defWidth = 620;

    const onSearch = async (value: string) => {
        props?.onSearch?.(value);
        const res: any = await Article({ value });
        setSearchData(res?.data?.data?.list);
    };

    console.log('SearchData', SearchData);
    return (
        <>
            <Button
                className={className || undefined}
                type={btnType || 'dashed'}
                shape="circle"
                icon={icon || <SearchOutlined />}
                onClick={() => setOpenSearch(!openSearch)}
            />
            <Modal
                title={<Author />}
                className={styleModal || undefined}
                style={{ minHeight: 300 }}
                visible={openSearch}
                footer={null}
                onCancel={() => {
                    setOpenSearch(false);
                    setSearchData([]);
                }}
            >
                <ModelSearch
                    placeholder={t('search')}
                    enterButton={<>{t('searchBtn')}</>}
                    size="large"
                    onSearch={onSearch}
                    loading={loading || false}
                    allowClear
                />
                <div
                    className={styles.itemContent}
                    style={{ maxHeight: width > defWidth ? 300 : 400 }}
                >
                    {SearchData?.length <= 0 ? (
                        <Empty style={{ margin: '20px 0' }} />
                    ) : (
                        SearchData?.map((item, i) => (
                            <ArticleItem key={`item-${i}`} />
                        ))
                    )}
                </div>
            </Modal>
        </>
    );
};
export default Search;
