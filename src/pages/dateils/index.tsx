import React, { useEffect, useState } from 'react';
import { useViewport } from '@/utils/viewportContext';
import styles from './index.module.scss';
import { Card, Col, Divider, Row, Space } from '@douyinfe/semi-ui';
import { Author } from '@/components';
import { useConfig } from '@/utils/configContext';
import {
    IconPriceTag,
    IconDesktop,
    IconPhoneStroke,
} from '@douyinfe/semi-icons';
import { TagList } from '@/components/tag';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { DetailsReq } from '@/service';

interface aythorProps {
    name: string;
    authorUrl: string;
    authorImage: string;
    authorWorks: string;
}
const Datelis = () => {
    const { width } = useViewport();
    const configContent = useConfig();
    const [detail, setDetail] = useState<any>({});
    const authorData: aythorProps = {
        name: configContent?.data?.name,
        authorUrl: configContent?.data?.author_url,
        authorImage: configContent?.data?.author_image,
        authorWorks: configContent?.data?.author_works,
    };

    const CodeBlock = ({ language, value }: any) => (
        <SyntaxHighlighter language={language} style={codeStyle}>
            {value}
        </SyntaxHighlighter>
    );

    const defWidth = 620;
    const Details: any = async () => {
        const res: any = await DetailsReq({ id: 1 });
        console.log('res', res);
        setDetail(res?.data?.data);
        return res?.data?.data;
    };

    useEffect(() => {
        Details();
    }, []);

    return width > defWidth ? (
        <div className={styles.detail}>
            <div className={styles.content}>
                <Row gutter={[16, 16]}>
                    <Col span={16}>
                        <Card shadows="hover">
                            <div className={styles.contentHeader}>
                                <div className={styles.title}>
                                    {detail?.title}
                                </div>
                                <div className={styles.nameTitle}>
                                    {detail?.date}
                                </div>
                                <div className={styles.headerTag}>
                                    <IconPriceTag style={{ marginRight: 4 }} />
                                    {detail?.tag?.map(
                                        (item: string | number) => (
                                            <div
                                                key={item}
                                                style={{ marginLeft: 12 }}
                                            >
                                                {TagList[item]}
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                            <div className={styles.content}>
                                <Markdown
                                    // source={'## 12345'}
                                    renderers={{ code: CodeBlock }}
                                >
                                    {detail?.content}
                                </Markdown>
                            </div>
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
                                            IP属地:{detail?.IP}
                                        </span>
                                    </div>
                                </div>
                                <Divider margin="12px" />
                                <Space>
                                    <IconPriceTag style={{ marginRight: 4 }} />
                                    {detail?.tag?.map(
                                        (item: string | number) => (
                                            <div
                                                key={item}
                                                style={{ marginLeft: 6 }}
                                            >
                                                {TagList[item]}
                                            </div>
                                        ),
                                    )}
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
                            <div className={styles.title}>{detail?.title}</div>
                            <div className={styles.nameTitle}>
                                {detail?.date}
                            </div>
                            <div className={styles.headerTag}>
                                <IconPriceTag style={{ marginRight: 4 }} />
                                {detail?.tag?.map((item: string | number) => (
                                    <div key={item} style={{ marginLeft: 12 }}>
                                        {TagList[item]}
                                    </div>
                                ))}
                            </div>
                            <div className={styles.header}>
                                <Author authorData={authorData} isDescription />
                                <div className={styles.right}>
                                    {width > defWidth ? (
                                        <IconDesktop />
                                    ) : (
                                        <IconPhoneStroke />
                                    )}
                                    <span style={{ marginLeft: 12 }}>
                                        IP属地:{detail?.IP}
                                    </span>
                                </div>
                            </div>
                            <Divider margin="12px" />
                        </div>
                    </div>
                    <div className={styles.content}>
                        <Markdown
                            // source={'## 12345'}
                            renderers={{ code: CodeBlock }}
                        >
                            {detail?.content}
                        </Markdown>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Datelis;
