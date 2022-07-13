import React, { ReactNode } from 'React';
import {
    IconGithubLogo,
    IconWeibo,
    IconUserCardVideo,
    IconImage,
    IconArticle,
    IconHome,
} from '@douyinfe/semi-icons';

interface iconProps {
    [MapData: string]: ReactNode;
}

export const iconList: iconProps = {
    home: <IconHome />,
    blog: <IconArticle />,
    image: <IconImage />,
    github: <IconGithubLogo />,
    video: <IconUserCardVideo />,
    weibo: <IconWeibo />,
};
