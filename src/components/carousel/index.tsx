import React from 'react';
import Props from './type';
import styles from './index.module.scss';

const Carousel = (props: Props) => {
    const {
        width = '90%',
        height = '300px',
        isButton = false,
        imageList = [],
    } = props;
    return (
        <div
            className={styles.box}
            style={{ width: typeof width == 'number' ? `${width}px` : width }}
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
                className={styles.imgs}
                style={{
                    width:
                        typeof width == 'number'
                            ? `${width - 50}px`
                            : `calc(${width} - 50px)`,
                }}
            >
                <li></li>
            </ul>
            {width}
            {height}
        </div>
    );
};

export default Carousel;
