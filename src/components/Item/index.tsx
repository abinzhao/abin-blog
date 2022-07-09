import { List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import styles from './index.module.scss';

const ArticleItem: React.FC = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemContent}>
                <List.Item.Meta
                    avatar={<Avatar src={'item.avatar'} />}
                    title={<a href={'item.href'}>{'item.title'}</a>}
                    description={'abin'}
                />
                <div className={styles.date}>5天前</div>
            </div>
            <div className={styles.itemText}>
                item.descriptionitem.descriptionitem.description
                item.descriptionitem.descriptionitem.description
                item.descriptionitem.descriptionitem.description
                item.descriptionitem.descriptionitem.description
            </div>
        </div>
    );
};

export default ArticleItem;
