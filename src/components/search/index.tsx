import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Input, Empty } from 'antd';
import Author from '../author';
import ArticleItem from '../Item';
import { Article } from '@/service/index';
import { useViewport } from '@/utils/viewportContext';
import styles from './index.module.scss';
import { useConfig } from '@/utils/configContext';
import { Button } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';

const ModelSearch = Input.Search;

interface Props {
    className?: string | undefined;
    icon?: ReactNode;
    btnType?: 'warning' | 'primary' | 'secondary' | 'danger' | undefined;
    styleModal?: string | undefined;
    onSearch?: (v: string) => void;
    isRadius?: boolean;
    loading?: boolean;
}

interface aythorProps {
    name: string;
    authorUrl: string;
    authorImage: string;
}
const Search: React.FC<Props> = (props: Props) => {
    const { className, btnType, icon, styleModal, isRadius, loading } = props;
    const { t } = useTranslation();
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [SearchData, setSearchData] = useState<any[]>([]);
    const { width } = useViewport();
    const defWidth = 620;

    const configContent = useConfig();
    const authorData: aythorProps = {
        name: configContent?.data?.name,
        authorUrl: configContent?.data?.author_url,
        authorImage: configContent?.data?.author_image,
    };

    const onSearch = async (value: string) => {
        props?.onSearch?.(value);
        const res: any = await Article({ value });
        setSearchData(res?.data?.data?.list);
    };
    return (
        <>
            <Button
                type={btnType || 'primary'}
                className={className || undefined}
                style={{
                    borderRadius: isRadius ? '50%' : undefined,
                }}
                icon={icon || <IconSearch />}
                onClick={() => setOpenSearch(!openSearch)}
                aria-label="搜索"
            />
            <Modal
                title={<Author authorData={authorData} />}
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
