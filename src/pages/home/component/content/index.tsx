import { useViewport } from '@/utils/viewportContext';
import { useTranslation } from 'react-i18next';
import React from 'react';
import styles from './index.module.scss';
import { Card, Col, Descriptions, Row, Tag } from '@douyinfe/semi-ui';
import { useNavigate } from 'react-router-dom';
import {
    IconMapPin,
    IconVerify,
    IconMail,
    IconUserSetting,
} from '@douyinfe/semi-icons';

// interface Props<P> {}
// interface btnlist {
//     icon: string;
//     path: string;
// }
const Content: React.FC = (props) => {
    // const {} = props;
    const { width } = useViewport();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const defWidth = 620;

    const data = [
        { key: <IconMapPin />, value: '北京' },
        { key: <IconVerify />, value: '官方认证' },
        { key: <IconMail />, value: 'abin_v@163.com' },
        {
            key: <IconUserSetting />,
            value: '贡献',
        },
    ];

    return width > defWidth ? (
        <div className={styles.content}>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Card
                        shadows="hover"
                        className={styles.cardLeft}
                        bodyStyle={{ padding: 0 }}
                    >
                        <div className={styles.leftTop}>
                            <div className={styles.leftTopAuthor}></div>
                        </div>
                        <div className={styles.nameStyle}>
                            <div className={styles.name}>我的姓名</div>
                            <div className={styles.sub}>职业</div>
                        </div>
                        <div className={styles.leftButtom}>
                            <Descriptions data={data} size={'large'} />
                        </div>
                        <div>
                            <Tag color="blue" type="solid">
                                solid tag
                            </Tag>
                            <Tag color="red" type="solid">
                                solid tag
                            </Tag>
                        </div>
                    </Card>
                </Col>
                <Col span={16}>
                    <Card shadows="hover" className={styles.cardRight}>
                        Card Content
                    </Card>
                </Col>
            </Row>
        </div>
    ) : (
        <div className={styles.contentLS}></div>
    );
};

export default Content;
