import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

interface Props<P> {
    authorData: P;
    imgStyle?: CSSProperties | undefined;
    nameStyle?: CSSProperties | undefined;
}
interface AuthorProps {
    name: string;
    authorUrl: string;
    authorImage: string | undefined;
}
const Author: React.FC<Props<AuthorProps>> = (props: Props<AuthorProps>) => {
    const { authorData, imgStyle, nameStyle } = props;
    const navigate = useNavigate();
    const default_url =
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F10%2F20180910171735_uqvbg.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659844403&t=f976cd8d6da498671bdd51b78176ca74';
    console.log('authorData', authorData);
    return (
        <div className={styles.author}>
            <img
                className={styles.img}
                style={imgStyle || undefined}
                src={authorData?.authorImage || default_url}
                onClick={() => navigate('/')}
                alt="author"
            />
            <a href={authorData?.authorUrl}>
                <div className={styles.name} style={nameStyle || undefined}>
                    {authorData?.name || ''}
                </div>
            </a>
        </div>
    );
};
export default Author;
