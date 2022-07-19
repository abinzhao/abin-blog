import React from 'react';
import { useViewport } from '@/utils/viewportContext';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import { Card, Col, Divider, Row, Space, Tag } from '@douyinfe/semi-ui';
import { Author } from '@/components';
import { useConfig } from '@/utils/configContext';
import {
    IconPriceTag,
    IconDesktop,
    IconPhoneStroke,
} from '@douyinfe/semi-icons';
import { TagList } from '@/components/tag';

interface aythorProps {
    name: string;
    authorUrl: string;
    authorImage: string;
    authorWorks: string;
}
const Datelis = () => {
    const { width } = useViewport();
    const { t } = useTranslation();
    const configContent = useConfig();
    const authorData: aythorProps = {
        name: configContent?.data?.name,
        authorUrl: configContent?.data?.author_url,
        authorImage: configContent?.data?.author_image,
        authorWorks: configContent?.data?.author_works,
    };

    const defWidth = 620;
    return width > defWidth ? (
        <div className={styles.detail}>
            <div className={styles.content}>
                <Row gutter={[16, 16]}>
                    <Col span={16}>
                        <Card shadows="hover">
                            <div className={styles.contentHeader}>
                                <div className={styles.title}>
                                    不要再直接写undefined了
                                </div>
                                <div className={styles.nameTitle}>
                                    2022-7-19 星期二
                                </div>
                                <div className={styles.headerTag}>
                                    <IconPriceTag style={{ marginRight: 12 }} />
                                    {TagList['JavaScript']}
                                </div>
                            </div>
                            <div className={styles.content}></div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card shadows="hover" className={styles.jqwzStyle}>
                            <div className={styles.author}>
                                <div className={styles.header}>
                                    <Author
                                        authorData={authorData}
                                        isDescription
                                    />
                                    <div className={styles.right}>
                                        {width > defWidth ? (
                                            <IconDesktop />
                                        ) : (
                                            <IconPhoneStroke />
                                        )}
                                        <span style={{ marginLeft: 12 }}>
                                            IP属地:深圳
                                        </span>
                                    </div>
                                </div>
                                <Divider margin="12px" />
                                <Space>
                                    {TagList['qianduan']}
                                    {TagList['JavaScript']}
                                </Space>
                            </div>
                        </Card>
                        <Card shadows="hover">
                            <div className={styles.title}>近期文章</div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    ) : (
        <div className={styles.detailLS}>
            <div className={styles.contentLS}>
                <Card shadows="hover">
                    <div className={styles.titleLS}>
                        <div className={styles.author}>
                            <div className={styles.header}>
                                <Author authorData={authorData} isDescription />
                                <div className={styles.right}>
                                    {width > defWidth ? (
                                        <IconDesktop />
                                    ) : (
                                        <IconPhoneStroke />
                                    )}
                                    <span style={{ marginLeft: 12 }}>
                                        IP属地:深圳
                                    </span>
                                </div>
                            </div>
                            <Divider margin="12px" />
                            <Space>
                                <Tag color="blue" type="solid">
                                    前端
                                </Tag>
                                <Tag color={'cyan'} type="solid">
                                    JavaScript
                                </Tag>
                            </Space>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Datelis;
