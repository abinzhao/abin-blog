import React from 'react';
import { useViewport } from '@/utils/viewportContext';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import { Button, Card, Col, Divider, Row, Space } from '@douyinfe/semi-ui';
import { Author } from '@/components';
import { useConfig } from '@/utils/configContext';
import {
    IconComment,
    IconLikeThumb,
    IconDesktop,
    IconPhoneStroke,
} from '@douyinfe/semi-icons';

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
                            <div className={styles.title}>标题</div>
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
                                        {0 ? (
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
                                    <Button
                                        icon={<IconLikeThumb />}
                                        theme="borderless"
                                        iconSize={'large'}
                                        type={'primary'}
                                    >
                                        获得点赞{123}
                                    </Button>
                                    <Button
                                        icon={<IconComment />}
                                        theme="borderless"
                                        type="primary"
                                    >
                                        获得评论{456}
                                    </Button>
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
                                    {0 ? <IconDesktop /> : <IconPhoneStroke />}
                                    <span style={{ marginLeft: 12 }}>
                                        IP属地:深圳
                                    </span>
                                </div>
                            </div>
                            <Divider margin="12px" />
                            <Space>
                                <Button
                                    icon={<IconLikeThumb />}
                                    theme="borderless"
                                    iconSize={'large'}
                                    type={'primary'}
                                >
                                    获得点赞{123}
                                </Button>
                                <Button
                                    icon={<IconComment />}
                                    theme="borderless"
                                    type="primary"
                                >
                                    获得评论{456}
                                </Button>
                            </Space>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Datelis;
