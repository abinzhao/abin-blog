import { useViewport } from '@/utils/viewportContext';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Card, Col, Row } from '@douyinfe/semi-ui';
import { Article } from '@/service';
import WZItem from '../item';
import { XGYQComponent } from '@/components';
import Announcement from '../announcement';

const Content: React.FC = () => {
    const [WZData, setWZData] = useState<any[]>([]);
    // const {} = props;
    const { width } = useViewport();
    const { t } = useTranslation();
    const defWidth = 620;

    const WZFun = async () => {
        const res: any = await Article({});
        setWZData(res?.data?.data?.list);
    };

    useEffect(() => {
        WZFun();
    }, []);

    return width > defWidth ? (
        <div className={styles.content}>
            <Row gutter={[16, 16]}>
                <Col span={16}>
                    <Card
                        title={'最新文章'}
                        shadows="hover"
                        className={styles.cardLeft}
                        style={{ borderRadius: 18 }}
                    >
                        <div className={styles.cardLeftContent}>
                            {WZData?.map((item, i) => (
                                <WZItem
                                    key={`${item?.id}-${i}`}
                                    WZData={item}
                                />
                            ))}
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        shadows="hover"
                        style={{
                            borderRadius: 18,
                            marginBottom: 12,
                        }}
                        bodyStyle={{ padding: 0 }}
                    >
                        <Announcement />
                    </Card>
                    <Card
                        shadows="hover"
                        style={{ borderRadius: 18, marginBottom: 12 }}
                    >
                        <XGYQComponent />
                    </Card>
                </Col>
            </Row>
        </div>
    ) : (
        <div className={styles.contentLS}>
            <Card
                title={t('newWZ')}
                shadows="hover"
                className={styles.cardLeft}
                style={{ borderRadius: 18 }}
            >
                <div className={styles.cardLeftContent}>
                    {WZData?.map((item, i) => (
                        <WZItem key={`${item?.id}-${i}`} WZData={item} />
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Content;
