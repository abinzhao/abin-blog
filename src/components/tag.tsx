import React, { ReactNode } from 'React';
import { Tag } from '@douyinfe/semi-ui';

interface tagProps {
    [MapData: string]: ReactNode;
}

export const TagList: tagProps = {
    JavaScript: (
        <Tag color={'blue'} type="solid">
            JavaScript
        </Tag>
    ),
    html: (
        <Tag color={'amber'} type="solid">
            html
        </Tag>
    ),
    css: (
        <Tag color={'cyan'} type="solid">
            css
        </Tag>
    ),
    Node: (
        <Tag color={'green'} type="solid">
            Node
        </Tag>
    ),
    Vue: (
        <Tag color={'grey'} type="solid">
            Vue
        </Tag>
    ),
    React: (
        <Tag color={'indigo'} type="solid">
            React
        </Tag>
    ),
    Angular: (
        <Tag color={'lime'} type="solid">
            Angular
        </Tag>
    ),
    qianduan: (
        <Tag color={'purple'} type="solid">
            前端
        </Tag>
    ),
    houduan: (
        <Tag color={'yellow'} type="solid">
            后端
        </Tag>
    ),
};

<Tag color="blue" type="solid">
    JavaScript
</Tag>;
