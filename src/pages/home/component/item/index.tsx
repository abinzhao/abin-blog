import React from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { Author } from '@/components';
import { TagList } from '@/components/tag';
import { IconPriceTag } from '@douyinfe/semi-icons';

interface Props<P> {
    WZData?: P;
}
interface WZProps {
    id: string | number;
    name: string;
    author: string;
    title: string;
    image: string;
    description: string;
    date: string;
    tag: string[];
    authorWorks?: string;
}
interface aythorProps {
    name: string;
    authorImage: string;
    authorWorks: string;
}

const WZItem: React.FC<Props<WZProps>> = (props: Props<WZProps>) => {
    const { WZData } = props;
    const navigate = useNavigate();
    const authorData: aythorProps = {
        name: WZData?.title || '',
        authorImage: WZData?.author || '',
        authorWorks: WZData?.name || '',
    };

    return (
        <div className={styles.itemStyle}>
            <div className={styles.imgDivStyle}>
                <img
                    src={WZData?.image}
                    className={styles.imgStyle}
                    alt="author"
                    onClick={() => navigate(`/detail/${WZData?.id}`)}
                />
            </div>
            <div className={styles.content}>
                <div
                    className={styles.description}
                    onClick={() => navigate(`/detail/${WZData?.id}`)}
                >
                    {WZData?.description}
                </div>
                <div className={styles.titleStyle}>
                    <Author authorData={authorData} isDescription />
                    <div className={styles.dateStyle}>{WZData?.date}</div>
                </div>
                <div className={styles.tagStyle}>
                    <IconPriceTag style={{ margin: '12px 6px 0 0' }} />
                    {WZData?.tag?.map((item: string | number) => (
                        <div key={item} style={{ margin: '12px 12px 0 0' }}>
                            {TagList[item]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WZItem;
