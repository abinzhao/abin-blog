import React, { CSSProperties } from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
    url?: string;
    imgStyle?: CSSProperties | undefined;
    nameStyle?: CSSProperties | undefined;
}
const Author = (props: Props) => {
    const { url, imgStyle, nameStyle } = props;
    const default_url =
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F10%2F20180910171735_uqvbg.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659844403&t=f976cd8d6da498671bdd51b78176ca74';
    const { t } = useTranslation();

    return (
        <div className={styles.author}>
            <img
                className={styles.img}
                style={imgStyle || undefined}
                src={url || default_url}
                alt="author"
            />
            <div className={styles.name} style={nameStyle || undefined}>
                名字
            </div>
        </div>
    );
};
export default Author;
