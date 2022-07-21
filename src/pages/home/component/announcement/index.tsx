import { IconBulb } from '@douyinfe/semi-icons';
import React from 'react';
import styles from './index.module.scss';

interface Props {
    content?: string;
}
const Announcement: React.FC = (props: Props) => {
    const { content } = props;
    return (
        <div className={styles.announcement}>
            <IconBulb color="blue" />
        </div>
    );
};

export default Announcement;
