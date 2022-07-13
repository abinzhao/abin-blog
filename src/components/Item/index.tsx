import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

interface Props<P> {
    itemData: P;
}
interface ItemProps {
    itemImage?: string;
    itemId?: string | number;
    itemTitle?: string;
    itemSubTitle?: string;
    itemDate?: string;
    itemText?: string;
}
const ArticleItem: React.FC<Props<ItemProps>> = (props: Props<ItemProps>) => {
    const { itemData } = props;
    const navigate = useNavigate();
    const default_url =
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F10%2F20180910171735_uqvbg.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659844403&t=f976cd8d6da498671bdd51b78176ca74';

    return (
        <div className={styles.item}>
            <div className={styles.itemContent}>
                <div className={styles.itemLeft}>
                    <img
                        className={styles.img}
                        src={itemData?.itemImage || default_url}
                        // onClick={() => navigate('/')}
                        alt="item Text"
                    />
                    <div>
                        <div
                            style={{
                                color: 'var(--semi-color-text-0)',
                                fontWeight: 500,
                            }}
                        >
                            {itemData?.itemTitle || '00000000'}
                        </div>
                        <div style={{ color: 'var(--semi-color-text-2)' }}>
                            {itemData?.itemSubTitle || '00000000'}
                        </div>
                    </div>
                </div>
                <div>{itemData?.itemTitle || '5天前'}</div>
            </div>
            <div
                className={styles.itemText}
                style={{ color: 'var(--semi-color-text-2)' }}
            >
                {itemData?.itemText ||
                    'item.descriptionitem.descriptionitem.descriptionitem.descriptionitem.descriptionitem.descriptionitem.descriptionitem.descriptionitem.descriptionitem.descriptionitem.descriptionitem.description'}
            </div>
        </div>
    );
};

export default ArticleItem;
