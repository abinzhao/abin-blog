import React, { useState } from 'react';
import { Card, Avatar, Space, Button } from '@douyinfe/semi-ui';
import styles from './index.module.scss';
import {
    IconComment,
    IconDislikeThumb,
    IconLikeThumb,
} from '@douyinfe/semi-icons';
import { useNavigate } from 'react-router-dom';

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
    comment: number | 0;
    like: number | 0;
    date: string;
}

const WZItem: React.FC<Props<WZProps>> = (props: Props<WZProps>) => {
    const { WZData } = props;
    const { Meta } = Card;
    const navigate = useNavigate();
    const [likeThumb, setLikeThumb] = useState<boolean>(false);
    return (
        <Card
            style={{ maxWidth: 340, margin: '12px 0' }}
            title={
                <Meta
                    title={
                        <div onClick={() => navigate(`/detail/${WZData?.id}`)}>
                            {WZData?.title}
                        </div>
                    }
                    description={WZData?.name}
                    avatar={
                        <Avatar
                            alt={WZData?.title}
                            size="default"
                            src={WZData?.author}
                        />
                    }
                />
            }
            headerExtraContent={
                <span
                    style={{ fontSize: 14, color: 'var(--semi-color-text-2)' }}
                >
                    {WZData?.date}
                </span>
            }
            cover={
                <div onClick={() => navigate(`/detail/${WZData?.id}`)}>
                    <img alt="example" height={200} src={WZData?.image} />
                </div>
            }
            footerLine={false}
            footerStyle={{ display: 'flex', justifyContent: 'flex-start' }}
            footer={
                <Space>
                    <Button
                        icon={
                            likeThumb ? <IconDislikeThumb /> : <IconLikeThumb />
                        }
                        theme="borderless"
                        iconSize={'large'}
                        type={likeThumb ? 'danger' : 'primary'}
                        onClick={() => {
                            if (likeThumb && WZData) {
                                WZData.comment = WZData && WZData?.comment - 1;
                                setLikeThumb(!likeThumb);
                                return;
                            }
                            if (!likeThumb && WZData) {
                                WZData.comment = WZData && WZData?.comment + 1;
                                setLikeThumb(!likeThumb);
                            }
                        }}
                    >
                        {WZData?.comment}
                    </Button>
                    <Button
                        icon={<IconComment />}
                        theme="borderless"
                        type="primary"
                        onClick={() => {
                            console.log(WZData?.id);
                        }}
                    >
                        {WZData?.like}
                    </Button>
                </Space>
            }
        >
            <div
                className={styles.description}
                onClick={() => navigate(`/detail/${WZData?.id}`)}
            >
                {WZData?.description}
            </div>
        </Card>
    );
};

export default WZItem;
