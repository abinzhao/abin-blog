import React from 'react';
import { Carousel as SemiCarousel } from '@douyinfe/semi-ui';
import styles from './index.module.scss';

interface Props {
    /**
     * 轮播图片列表
     */
    imgList?: string[];
}
const Carousel = (props: Props) => {
    const { imgList } = props;
    return (
        <div className={styles.carouselStyle}>
            <SemiCarousel
                className={styles.style}
                speed={1000}
                animation="fade"
                theme="dark"
                autoPlay
            >
                {imgList?.map((src, i) => {
                    return (
                        <div
                            key={src + i}
                            style={{
                                backgroundSize: 'cover',
                                backgroundImage: `url(${src})`,
                            }}
                        ></div>
                    );
                })}
            </SemiCarousel>
        </div>
    );
};

export default Carousel;
