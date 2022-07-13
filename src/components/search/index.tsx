import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Author from '../author';
import ArticleItem from '../Item';
import { Article } from '@/service/index';
import { useViewport } from '@/utils/viewportContext';
import styles from './index.module.scss';
import { useConfig } from '@/utils/configContext';
import { Button, Modal, Empty, Input } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import {
    IllustrationNoResult,
    IllustrationNoResultDark,
} from '@douyinfe/semi-illustrations';

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
    const [inputSearch, setInputSearch] = useState<string>('');
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
                title={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Author authorData={authorData} />
                        <span className={styles.modalTitle}>
                            {t('articleSearch')}
                        </span>
                    </div>
                }
                visible={openSearch}
                className={`${styles.searchModel} ${styleModal}`}
                footer={null}
                onCancel={() => {
                    setOpenSearch(false);
                    setSearchData([]);
                }}
                centered
                width={width > defWidth ? 550 : '95%'}
                bodyStyle={{
                    overflow: 'auto',
                    height: width > defWidth ? 400 : 340,
                }}
            >
                <div className={styles.searchHeader}>
                    <Input
                        placeholder={t('search')}
                        size="large"
                        onChange={(v) => setInputSearch(v)}
                        showClear
                    ></Input>
                    <Button
                        type={'primary'}
                        size="large"
                        icon={<IconSearch />}
                        onClick={() => onSearch(inputSearch)}
                        aria-label={t('searchBtn')}
                        loading={loading || undefined}
                    >
                        {t('searchBtn')}
                    </Button>
                </div>
                <div
                    className={styles.itemContent}
                    style={{ maxHeight: width > defWidth ? 400 : 340 }}
                >
                    {SearchData?.length <= 0 ? (
                        <Empty
                            image={
                                <IllustrationNoResult
                                    style={{ width: 150, height: 150 }}
                                />
                            }
                            darkModeImage={
                                <IllustrationNoResultDark
                                    style={{ width: 150, height: 150 }}
                                />
                            }
                            style={{ margin: '20px 0' }}
                            title={t('emptyTitle')}
                            description={t('emptySubTitle')}
                        />
                    ) : (
                        SearchData?.map((item, i) => (
                            <ArticleItem key={`item-${i}`} itemData={{}} />
                        ))
                    )}
                </div>
            </Modal>
        </>
    );
};
export default Search;
