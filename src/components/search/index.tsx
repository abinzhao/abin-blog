import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Author from '../author';

const ModelSearch = Input.Search;

interface Props {
    className?: string | undefined;
    icon?: ReactNode;
    btnType?: 'default' | 'primary' | 'dashed' | undefined;
    styleModal?: string | undefined;
    onSearch?: (v: string) => void;
    loading?: boolean;
}
const Search = (props: Props) => {
    const { className, btnType, icon, styleModal, loading } = props;
    const { t } = useTranslation();
    const [openSearch, setOpenSearch] = useState<boolean>(false);

    const onSearch = (value: string) => props?.onSearch?.(value);

    return (
        <div className={className || undefined}>
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
                onCancel={() => setOpenSearch(false)}
            >
                <ModelSearch
                    placeholder={t('search')}
                    enterButton={<>{t('searchBtn')}</>}
                    size="large"
                    onSearch={onSearch}
                    loading={loading || false}
                    allowClear
                />
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};
export default Search;
