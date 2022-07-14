import React from 'react';
import Props from './type';
import styles from './index.module.scss';

const Carousel = (props: Props) => {
    const {
        width = '300px',
        height = '200px',
        isButton = false,
        imageList = [],
    } = props;
    return (
        <div
            // style={{
            //     width: typeof width == 'number' ? `${width}px` : width,
            //     height: typeof height == 'number' ? `${height}px` : height,
            // }}
            className={styles.box}
        >
            {isButton && (
                <>
                    <a href="javascript:;" className={styles.left}>
                        &lt;
                    </a>
                    <a href="javascript:;" className={styles.right}>
                        &gt;
                    </a>
                </>
            )}
            <ul
                // style={{
                //     width: typeof width == 'number' ? `${width}px` : width,
                //     height: typeof height == 'number' ? `${height}px` : height,
                //     overflow: 'hidden',
                // }}
                className={styles.imgs}
            >
                {imageList?.map((item, i) => (
                    <li
                        className={`${styles.imgLi} ${styles['imgLi' + i]}`}
                        key={item}
                        // style={{
                        //     width:
                        //         typeof width == 'number' ? `${width}px` : width,
                        //     overflow: 'hidden',
                        // }}
                    >
                        <a href="#">
                            <img
                                className={styles.img}
                                // width={
                                //     typeof width == 'number'
                                //         ? `${width - 50}px`
                                //         : `calc(${width} - 50px)`
                                // }
                                src={item}
                                alt=""
                            />
                        </a>
                    </li>
                ))}
            </ul>
            {/* 指示器 */}
            <ul className={styles.list}>12</ul>
            {/* 实现点击效果 */}
            <div className={styles.rightBtn}></div>
            <div className={styles.leftBtn}></div>
        </div>
    );
};

export default Carousel;
