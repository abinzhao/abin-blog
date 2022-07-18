import React from 'react';
import { Empty } from '@douyinfe/semi-ui';
import {
    IllustrationNotFound,
    IllustrationNotFoundDark,
} from '@douyinfe/semi-illustrations';

const BlogError404 = () => (
    <Empty
        style={{ marginTop: 150 }}
        image={<IllustrationNotFound style={{ width: 150, height: 150 }} />}
        darkModeImage={
            <IllustrationNotFoundDark style={{ width: 150, height: 150 }} />
        }
        title={'页面好像走丢了'}
        description="abin正在全力寻找，请谅解，要不您先去看点别的"
    />
);

export default BlogError404;
