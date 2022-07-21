import React from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { Author } from '@/components';

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
    comment?: number | 0;
    like?: number | 0;
    date: string;
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
            <img src={WZData?.image} alt="author" />
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
            </div>
        </div>
    );
};

export default WZItem;
